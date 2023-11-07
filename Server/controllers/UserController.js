const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../Service/mySqlServices");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body, "body");
  if (!name || !email || !password) {
    res.status(400).json({ message: "All fields are mandatory" });
    return;
  }

  try {
    let userAvailable = await db.User.findOne({ where: { email } });
    if (userAvailable) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await db.User.create({
      name,
      email,
      password: hashedPassword,
      deleted:null
    });

    if (user) {
      res.status(201).json({ user });
      console.log("Successfully created user");
    } else {
      res.status(400).json({ message: "Error in creating user" });
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {

  const { email, password } = req.body;
  console.log(email, password, "b65656d5");

  if (!email || !password) {
    res.status(400).json({ message: "All inputs required" });
    return;
  }

  try {
    let user = await db.User.findOne({ where: { email } });
    console.log(user.password , password,"useruser11");
// console.log(user, process.env.ACCESS_TOKEN,"rtrtrtrtr")

// let a ='1234'
// let hashed = await bcrypt.hash(a,10)
// let compared = await bcrypt.compare(a,hashed)
// console.log(compared)
let iscompare=await bcrypt.compare(password, user.password)
console.log(iscompare,"iscompare")
    if (user && iscompare) {
      const accessToken = jwt.sign(
        {
          name: user.name,
          email: user.email,
          id: user.id,
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: "10h" }
      );
      console.log("Successfully logged in");

      res.status(200).json({
        accessToken,
        user,
        message: "Successfully logged in",
      });
    } else {
      res.status(404).json({ message: "Invalid email or password" });
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};











module.exports = {
  registerUser,
  loginUser,
};
