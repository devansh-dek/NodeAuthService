const { UserRepository } = require('../repository/index')
const userRepository = new UserRepository();
class userService {
    async createUser(data) {
        try {
            const user = await userRepository.createUser(data);
            return user;
        }
        catch (error) {
            console.log("Error in service layer", error);
        }
    }
}
module.exports = userService