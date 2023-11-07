const { Sequelize, DataTypes } = require('sequelize');
const db = require("../Service/mySqlServices");

const ProfileMOdal = (sequelize) => {
  const Profile = sequelize.define(
    'profile',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Designation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING, // You can adjust the data type based on how you store images (e.g., file path, URL, or base64)
        allowNull: true, // You can change to false if it's required
      },
    },
    {
      tableName: 'profile', // Define the table name
      timestamps: true, // Include timestamps (created_at and updated_at)
      createdAt: 'created_at', // Specify the column name for created_at
      updatedAt: 'updated_at', // Specify the column name for updated_at
    }
  );
// 
  return Profile;
};

module.exports = ProfileMOdal;
