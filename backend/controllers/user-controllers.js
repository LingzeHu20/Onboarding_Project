const { Sequelize, DataTypes, Op, QueryTypes } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("db_onboarding", "root", "12345678", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

const getUserByFilter = async (req, res, next) => {
  //   let users;
  const { name } = req.query;

  console.log(req.query);

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  const User = sequelize.define("user", {
    user_name: DataTypes.TEXT,
    title: DataTypes.TEXT,
    tag: DataTypes.TEXT,
  });

//   const jane = await User.create({
//     user_name: "Jacky Cheung",
//     title: "Full-stack Engineer",
//     tag: "MERN",
//   });

  const sql = `SELECT * FROM users WHERE user_name LIKE '%${name}%'`;
  const users = await sequelize.query(sql, { type: QueryTypes.SELECT });
  console.log(users);

  res.json({
    result: users,
  });
  next();
};

exports.getUserByFilter = getUserByFilter;
