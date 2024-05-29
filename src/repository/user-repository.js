const { usersinfo } = require('../models/index')

// console.log("module get us ", mod);

class userRepository {
    async createUser(data) {
        try {
            const user = await usersinfo.create(data);
            return user;
        }
        catch (error) {
            console.log("Problem in user repository ", error);
        }
    }
}

module.exports = userRepository



