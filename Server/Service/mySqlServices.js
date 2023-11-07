
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("interview_task", "root", "", {
  host: "localhost",
  dialect:
    "mysql"
});
let db;
let connection = async () => {
  try {
    // User
    db = {};
    db.sequelize = sequelize;

    await sequelize.authenticate();
    db.User = require("../Models/Users")(db.sequelize)
    db.Profile=require("../Models/Profile")(db.sequelize)

  db.  Profile.belongsTo(db.User, { foreignKey: 'user_id' });
  db.  User.hasOne(db.Profile, { foreignKey: 'user_id' });
 await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connection();
module.exports = db;
