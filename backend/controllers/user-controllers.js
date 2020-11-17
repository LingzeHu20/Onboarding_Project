
const getUserByFilter = async (req, res, next) => {
    //   let users;
    const { title, tag } = req.query;
    console.log(title);
    console.log(tag);
    try {

        // users = await User.find({}, '-password');
    } catch (err) {
        // const error = new HttpError(
        //   'Fetching users failed, please try again later.',
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