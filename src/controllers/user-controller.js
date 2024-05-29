const { UserService } = require('../service/index')
const userService = new UserService();
console.log("user service is ", userService);
const createUser = async (req, res) => {
    try {
        console.log(req.body, ' is the request sent');
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            USER: user
        })
    } catch (error) {
        return res.status(500).json({
            err: error,
            sucess: false
        })
    }
}

module.exports = { createUser };