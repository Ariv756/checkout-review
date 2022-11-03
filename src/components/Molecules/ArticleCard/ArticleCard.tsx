import RatingStars from "../RatingStars";
import { Article } from "./ArticleCard.model";

const ArticleCard = (review: Article) => {
  return (
    review && (
      <article
        key={`${review.id} - article card`}
        className="bg-slate-50 my-6 p-6 rounded-md"
      >
        <header className="flex items-center mb-5 justify-between">
          <p className="font-bold">{review.name}</p>
          <span className="flex">
            <RatingStars {...review} />
          </span>
        </header>
        <p className="block my-2">{review.comment}</p>
      </article>
    )
  );
};

export default ArticleCard;
