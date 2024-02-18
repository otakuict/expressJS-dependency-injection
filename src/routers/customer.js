import express from "express";
var router = express.Router();

router.route("/").get(getCustomer);

export function getCustomer(req, res) {
  try {
    const response = {
      id: 1,
      name: "Jhon",
      age: 50,
      city: "Bangkok",
    };

    res.json({ msg: response });
  } catch (error) {
    throw error;
  }
}

export default router;
