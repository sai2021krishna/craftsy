const express = require("express");

const { products } = require("./response/products-response");
const {
  freshProfile,
  emailProfile,
  newsLetterSubscriptionProfile,
  personalInformationProfile,
  personalInformationProfileWithNewsLetterSubscribed,
} = require("./response/profile");
const { errorResponse } = require("./response/error");

const app = express();

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send("hello");
  }, 200);
});

app.get("/products/all", (req, res) => {
  setTimeout(() => {
    res.status(200).send(products);
  }, 2000);
});

app.post("/subscribe/news-letter", (req, res) => {
  const { email } = req.query.param;
  console.info("/subscribe/news-letter => ", email);
  setTimeout(() => {
    res.status(200).send(newsLetterSubscriptionProfile);
  }, 2000);
});

app.post("/profile/create", (req, res) => {
  setTimeout(() => {
    res.status(200).send(personalInformationProfile);
  }, 2000);
});

app.get("/profile/fetch", (req, res) => {
  const { email } = req.query.param;
  console.info("/profile => ", email);
  setTimeout(() => {
    res.status(200).send(freshProfile);
  }, 2000);
});

app.listen(8080, () => {
  console.info("server running");
});
