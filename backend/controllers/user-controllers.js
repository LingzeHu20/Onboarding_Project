const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('db_onboarding', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const getUserByFilter = async (req, res, next) => {
    //   let users;
    const { title, tag } = req.query;
    console.log(title);
    console.log(tag);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    const User = sequelize.define("user", {
        user_name: DataTypes.TEXT,
        title: DataTypes.TEXT,
        tag: DataTypes.TEXT,
    });

    // (async () => {
    //     await sequelize.sync({ force: true });
    //     // Code here
    //   })();

    const jane = await User.create({ 
        user_name: "Jane", 
        title: "Software", 
        tag: "React", 
        // createdAt: sequelize.literal('CURRENT_TIMESTAMP'), 
        // updatedAt: sequelize.literal('CURRENT_TIMESTAMP'), 
    });
    console.log(jane instanceof User); // true
    console.log(jane.id); // "Jane"

    const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));


    try {

        // users = await User.find({}, '-password');
    } catch (err) {
        // const error = new HttpError(
        //   'Fetching users failed, please try aain later.',
        //   500
        // );
        return next(err);
    }
    res.json({
        result: req.query,
    })
    next();
    //res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

exports.getUserByFilter = getUserByFilter;