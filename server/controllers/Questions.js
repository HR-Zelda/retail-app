const axios = require('axios');
require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

module.exports.getQuestions = (req, res) => {
  axios
    .get(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
      {
        params: {
          product_id: req.query.product_id,
          count: req.query.count || 5,
        },
      },
    )
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.postQuestion = (req, res) => {
  console.log(req.body);
  const postBody = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id,
  };

  axios
    .post(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
      postBody,
    )
    .then((result) => {
      res.status(201).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.helpfulQuestion = (req, res) => {
  const questionID = req.body.question_id;

  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/helpful`,
    )
    .then((result) => {
      res.status(204).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.reportQuestion = (req, res) => {
  const questionID = req.body.question_id;

  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/report`,
    )
    .then((result) => {
      res.status(204).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
