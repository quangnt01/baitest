const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const hdRoute = require("./routes/hoatdong.routes");
const PORT = 8000;
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the MongoDB!");
  })
  .catch((error) => {
    console.log(`Can not connect to database, ${error}`);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/v1/hd", hdRoute);

app.listen(8000, () => {
  console.log(`Server is runing port ${PORT}`);
});
