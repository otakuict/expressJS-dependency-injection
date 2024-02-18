import express from "express";
import customer from "./customer.js";

var router = express.Router();
router.use("/customer", customer);
export default router;
