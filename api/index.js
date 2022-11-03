const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const readReviews = async (reviews) => {
  const dir = "data/comments/";
  const result = await Promise.all(
    reviews.map(async (review) => await fs
      .readFile(`${dir}${review.file}`, "utf8")
      .then((content) => JSON.parse(content)))
  );

  return result;
};

const getAllReviews = async () => {
  const dir = "data/comments/";
  const reviews = await Promise.all(
    (await fs.readdir("data/comments")).map(async (file) => {
      const {birthtime} = await fs.stat(`${dir}${file}`);
      return {
        file,
        created: birthtime
      }
    })
  );

  return reviews;
}

/**
 * Enpoint to retrieve ordered reviews.
 * 
 * URL endpoints example.
 *    "/rating" returns an array of all reviews sections by rating number.
 *    "/rating/?stars=1" returns an array of specific stars based on query.
 *    "/rating/?average=true" returns an array with average rating based on query.
 */
app.get("/ratings", async (req, res) => {
  const { stars, average } = req.query;
  const allReviews = await getAllReviews();
  const reviews = await readReviews(allReviews);
  const sorted = reviews.sort((a,b) => a.rating - b.rating);

  let result;

  const rating = (stars) ? [parseInt(stars)] : [1,2,3,4,5];
  const sectionedReviews = {};

  rating.forEach((rate) =>
    sectionedReviews[rate] = sorted.filter((review) => review.rating === rate)
  );

  if(stars) {
    result = sectionedReviews;
  }

  const reviewsArray = Object.values(sectionedReviews);

  const totalStars = reviewsArray.map((item) => item.length).reduce((a, b) => a + b, 0);
  const ratingData = reviewsArray.map((item) => item.length * 100 / totalStars);
  const averageData = reviewsArray.map((item, index) => (index + 1) * item.length).reduce((a, b) => a + b, 0) / totalStars;

  if(average === 'true') {
    result = {
      averageData,
      ratingData
    };
  }

  res.status(201).json(result);
});

// Getting all reviews created in the directory data/comments.
app.get("/reviews", async (req, res) => {
  let reviews;
  const { order, filter, page } = req.query;

  try {
    const allReviews = await getAllReviews();
    const sortedFiles = allReviews.sort((a,b) => new Date(a.created) - new Date(b.created)).reverse();
    const orderedReviews = (order === 'ASC') ? sortedFiles : sortedFiles.reverse() ;
    let allContent = [];

    allContent = await readReviews(orderedReviews)

    if(page) {
      const paginated = [];
      while (allContent.length > 0) {
        const chunks = allContent.splice(0, 3);
        paginated.push(chunks);
      }
      const currentPage = parseInt(page);
      const maxPages = paginated.length;

      const pagination = {
        prevPage: (currentPage !== 0) && currentPage - 1, 
        current: currentPage,
        nextPage: (currentPage < (maxPages - 1)) && currentPage + 1,
        maxPages: maxPages,
      };

      allContent = (currentPage <= maxPages) ? [{
        content: paginated[page],
        pagination
      }]
      : [];
    }

    reviews = (filter)
    ? allContent.filter((review) => review.rating === parseInt(filter))
    : allContent;
  } catch (err) {
    console.log(err);
    return res.sendStatus(404);
  }

  res.json(reviews);
});

app.get("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  let content;

  try {
    content = await fs.readFile(`data/comments/${id}.json`, "utf-8");
  } catch (err) {
    console.log(err);
    return res.sendStatus(404);
  }

  res.json(JSON.parse(content));
});

app.post("/comment", async (req, res) => {
  const id = req.body.id;
  const content = req.body;
  const data = JSON.stringify(content);

  if (!content) {
    return res.sendStatus(400);
  }

  await fs.mkdir("data/comments", { recursive: true });
  await fs.writeFile(`data/comments/${id}.json`, data);

  res.status(201).json({
    id: content.id,
    name: content.name,
  });
});

app.listen(3030, () => {
  console.log("API serve is running...");
});
