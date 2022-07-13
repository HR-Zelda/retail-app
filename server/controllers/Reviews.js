const axios = require('axios');
require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

module.exports.getReviews = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
    params: req.query,
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.error('There was an error in the getReviews controller function:\n', err);
      res.sendStatus(400);
    });
};

module.exports.getReviewsMeta = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
    params: req.query,
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.error('There was an error in the getReviewsMeta controller function:\n', err);
      res.sendStatus(400);
    });
};

module.exports.postReview = (req, res) => {
  res.sendStatus(501);
};

module.exports.putReviewHelpful = (req, res) => {
  console.log(req.params);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.params.review_id}/helpful`, {}, {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.error('There was an error in the putReviewHelpful controller function:\n', err);
      res.sendStatus(400);
    });
};

module.exports.putReviewReport = (req, res) => {
  console.log(req.params);
  res.sendStatus(501);
};