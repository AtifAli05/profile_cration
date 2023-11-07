const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4096;
const dotenv = require("dotenv").config();
const verifyToken = require("./middlewares/validationTokenHandler.js");
const bodyParser = require("body-parser");
const path = require("path");
const Profilerouter = require("./Routes/ProfileRoutes.js");
const router = require("./controllers/ProfileInformation.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Add CORS middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));


app.use("/user", require("./Routes/UserRoutes"));
app.use("",router)
app.listen(PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
