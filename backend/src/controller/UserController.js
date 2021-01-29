const User = require("../models/User");

module.exports = {
    async find(request, response) {
        const findUser = await User.find();

        return response.json(findUser);
    },
    async store(request, response) {
        const { nome, codigo, origem } = request.body;

        User.findOne(request.body, async (error, findUser) => {
            let user;

            if (findUser) {
                user = findUser;
            } else {
                user = await User.create({
                    nome,
                    codigo,
                    origem,
                });
            }
            return response.json(user);
        });
    },
};
