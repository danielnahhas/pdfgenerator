const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");
const { Store } = require("./models");

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
