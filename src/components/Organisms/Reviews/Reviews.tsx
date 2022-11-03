import { useState, useCallback } from "react";
import useSWR from "swr";
import ArticleCard from "../../Molecules/ArticleCard";
import Filters from "../../Molecules/Filters";
import { UseReviewContext } from "../../../context/reviewContext";
import {fetcher} from '../../../utils/fetcher/fetcher';

interface FilterEvent {
  filter?: string;
  index?: number;
}

const Reviews = () => {
  const { reviewData } = UseReviewContext();
  const [filter, setFilter] = useState(0);
  const [order, setOrder] = useState("ASC");

  const handleFilter = useCallback((event: FilterEvent) => {
    const { index, filter } = event;

    if (filter) setOrder(filter);

    if (index) setFilter(index);

    if (index === 0) {
      setFilter(0);
      setOrder("ASC");
    }
  }, []);

  const getfilter = filter ? `filter=${filter}` : "";
  const getOrder = order ? `order=${order}` : "";
  const query = `?${getOrder}&${getfilter}`;

  const { data } = useSWR(`http://localhost:3030/reviews/${query}`, fetcher, { suspense: true });

  return data.length ? (
    <>
      <Filters getButtonEvent={handleFilter} />
      <section data-testid="reviews-container" className="col-span-2">
        {
          (Object.keys(reviewData).length > 1) ? <ArticleCard {...reviewData} /> : ''
        }
        {data?.map((review: any) => (
          <ArticleCard key={review.id} {...review} />
        ))}
      </section>
    </>
  ): (
    <p data-testid="no-reviews" className="text-xl text-center col-span-2">There are no reviews, please add one.</p>
  );
};

export default Reviews;
