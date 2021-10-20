const Users = require("../../models/user")

module.exports = {
    users: async () => {
        try {
            const usersFetched = await Users.find()
            return usersFetched.map(user => {
                return {
                    ...user._doc,
                    _id: user.id,
                }
            })
        } catch (error) {
            throw error
        }
    },

    createUsers: async args => {
        try {
            const { first_name, last_name, email, gender, ip_address } = args.user
            const user = new Users({
                first_name,
                last_name,
                email,
                gender,
                ip_address
            })
            const newUser = await user.save()
            return { ...newUser._doc, _id: newUser.id }
        } catch (error) {
            throw error
        }
    },
}