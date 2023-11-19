module.exports = (app) => {

    const get = (req, res) => {

        const users = [

            {
                id: 1,
                name: "John",
                email: "john@gmail.com"
            },
            {
                id: 2,
                name: "Peter",
                email: "peter@gmail.com"
            },
            {
                id: 3,
                name: "Mary",
                email: "mary@gmail.com"
            }
        ];

        return res.json(users);
    }

    const save = (req, res) => {

        const user = { ...req.body };

        return res.json(user);
    }

    const remove = async (req, res) => {
        const { id } = req.params;

        app.database("users")
            .where({ id })
            .del()
            .then((result) => {
                if (result) {
                    res.status(204).send();
                } else {
                    res.status(404).json({ error: "Usuário não encontrado" });
                }
            })
            .catch((err) => res.status(500).json(err));
    }

    const update = async (req, res) => {
        const { id } = req.params;
        const updatedUser = { ...req.body };

        app.database("users")
            .where({ id })
            .update(updatedUser)
            .then((result) => {
                if (result) {
                    res.status(204).send();
                } else {
                    res.status(404).json({ error: "Usuário não encontrado" });
                }
            })
            .catch((err) => res.status(500).json(err));
    }

    const getById = async (req, res) => {
        const { id } = req.params;

        const user = await app.database("users").where({ id }).first();

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "Usuário não encontrado" });
        }
    }

    return { get, save, remove, update, getById }

}

