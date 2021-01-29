const User = require("../models/User");

module.exports = {
    async find(request, response) {
        const findUser = await User.find();

        return response.json(findUser);
    },
    async store(request, response) {
        const { nome, codigo } = request.body;

        const user = await User.create({
            nome,
            codigo,
        });

        return response.json(user);
    },
};
