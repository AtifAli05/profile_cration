const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../Service/mySqlServices");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/postDatawithImage", upload.single("image"), async (req, res) => {
  console.log(req.body, "fdfsdfsdfsdfsdfsdfs");
  const { name, email, Designation, age,user_id } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const profile = await db.Profile.create({
      name,
      email:"adasd@gmail.com",
      Designation,
      age,
      image,
      user_id,
    });

    res.json({ message: "Profile created successfully", profile });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.post('/getProfileData', async (req, res) => {
    const { user_id } = req.body; // Extract user_id from the request body
  
    if (!user_id) {
      return res.status(400).json({ message: 'user_id is required in the request body' });
    }
  
    try {
      // Retrieve profile data for the specified user_id from the database
      const profiles = await db.Profile.findAll({
        where: { user_id },
      });
  
      res.json({ message: 'Profile data retrieved successfully', profiles });
    } catch (error) {
      console.error('Error retrieving profile data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

  router.post('/updateUserData', async (req, res) => {
    const { user_id, name, email, Designation, age } = req.body; // Extract fields from the request body
  
    if (!user_id) {
      return res.status(400).json({ message: 'user_id is required in the request body' });
    }
  
    try {
      // Check if the user with the provided user_id exists
      const existingUser = await db.User.findOne({
        where: { user_id },
      });
  
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update the user's data with the provided values
      const updatedUser = await existingUser.update({
        name,
        email,
        Designation,
        age,
      });
  
      res.json({ message: 'User data updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }})
module.exports = router;
