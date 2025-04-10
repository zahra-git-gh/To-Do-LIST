require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/connectDB.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const {userModal}=require('./models/user.model.js');
app.use("/user", require("./routes/user.routes.js").router);
app.use("/todo", require("./routes/todo.routes.js").router);
app.use("/directory", require("./routes/directory.routes.js").router);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`your server run on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
