const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");
const { Store, Risk, Performance } = require("./models");

app.use(
  cors({
    origin: "*",
  })
);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`Server is listening at http://localhost:${3000}`);
  });
});

app.get("/store", async (req, res) => {
  try {
    const store = await Store.findAll();
    console.log("Fetched store:", store);

    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }

    console.log("Store:", store);
    return res.status(200).json({ store });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/risk", async (req, res) => {
  try {
    const risk = await Risk.findAll();
    console.log("Fetched risk:", risk);

    if (!risk) {
      return res.status(404).json({ error: "Risk not found" });
    }

    console.log("Risk:", risk);
    return res.status(200).json({ risk });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/performance", async (req, res) => {
  try {
    const performance = await Performance.findAll();
    console.log("Fetched performance:", performance);

    if (!performance) {
      return res.status(404).json({ error: "Performance not found" });
    }

    console.log("Performance:", performance);
    return res.status(200).json({ performance });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
