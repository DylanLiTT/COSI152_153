"use strict";

exports.showHouseForRent = (req, res) => {
  res.render("houseForRent");
};

exports.showRestaurantOpenNow = (req, res) => {
  res.render("restaurant");
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  let formData = req.body
  res.render("thanks",{formData:formData});
};
