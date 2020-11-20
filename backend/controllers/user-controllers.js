const { Sequelize, DataTypes, Op, QueryTypes } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("db_onboarding", "root", "12345678", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

const getUserByFilter = async (req, res, next) => {
  const { name, title, tag, currPage = 1 } = req.query;
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
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    company_name: DataTypes.TEXT,
    begin_from: DataTypes.DATE,
    end_at: DataTypes.DATE,
  });

  //===================For Pagination============================
  //Each page has 5 candidates at most;
  const limit = 5;

  const countSQL = `SELECT COUNT(*) FROM users 
            WHERE user_name LIKE '%${name}%' AND title LIKE '%${title}%' AND tag LIKE '%${tag}%' `;
  let total_count = await sequelize.query(countSQL, { type: QueryTypes.SELECT });
  total_count = total_count[0]["COUNT(*)"];
  const totalPages = Math.ceil(total_count / limit );


  const candidatesSQL = `SELECT * FROM users 
  WHERE user_name LIKE '%${name}%' AND title LIKE '%${title}%' AND tag LIKE '%${tag}%'
  limit ${limit} offset ${ limit * (currPage -1 )} `;
const users = await sequelize.query(candidatesSQL, { type: QueryTypes.SELECT });

  res.json({
    totalPages: totalPages,
    totalCount: total_count,
    currPage: parseInt(currPage),
    pageLimit: limit,
    candidates: users,
  });
  next();
};

exports.getUserByFilter = getUserByFilter;
