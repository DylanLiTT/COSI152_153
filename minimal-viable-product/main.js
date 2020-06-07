"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.htm);
  utils.getFile("views/index.html", res);
});

router.get("/house.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/house.html", res);
});

router.get("/restaurant.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/restaurant.html", res);
});

router.get("/covid19.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/covid19.html", res);
});

router.get("/thanks.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/thanks.html", res);
});

router.get("/HouseForm.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/HouseForm.html", res);
});

router.get("/waltham.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/waltham.jpg", res);
});

router.get("/housing.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/housing.jpg", res);
});

router.get("/people_icon.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/people_icon.jpg", res);
});

router.get("/restaurant.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/restaurant.jpg", res);
});

router.get("/myStyle.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/myStyle.css", res);
});

router.get("/waltham_forum.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/waltham_forum.css", res);
});

router.get("/bootstrap.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/bootstrap.css", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
