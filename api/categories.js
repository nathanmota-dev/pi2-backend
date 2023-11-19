module.exports = (app) => {

    const get = async (req, res) => {

        const categories = await app.database("categories").select("*");

        return res.json(categories);
    }

    const save = async (req, res) => {

        const category = { ...req.body };

        if (!category.name) {
            return res.status(400).json({ error: "Nome é um atributo obrigatório" });
        }

        const categoryExists = await
            app.database("categories")
                .where({ name: category.name })
                .first();

        if (categoryExists) {
            return res.status(400).json({ error: "Já existe uma categoria com esse nome" });
        }

        app.database("categories")
            .insert(category)
            .then((_) => res.status(204).send())
            .catch((err) => res.status(500).json(err));

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