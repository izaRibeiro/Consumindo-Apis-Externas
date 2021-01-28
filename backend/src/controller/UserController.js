const User = require("../models/User");

module.exports = {
    async find(request, response) {
        const findUser = await User.find();

        return response.json(findUser);
    },
    async store(request, response) {
        const { nome, email } = request.body;

        const user = await User.create({
            nome,
            email,
        });

        return response.json(user);
    },
};
