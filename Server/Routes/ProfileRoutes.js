const express = require('express');
const Profilerouter = express.Router();
const profiledata=require("../controllers/ProfileInformation")
Profilerouter.post("/postDatawithImage",profiledata)
module.exports=Profilerouter