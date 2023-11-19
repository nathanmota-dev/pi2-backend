module.exports = (app) => {

    const get = async (req, res) => {
        const names = await app.database("nomes").select("*");
        return res.json(names);
    }

    const save = async (req, res) => {
        const name = { ...req.body };

        if (!name.nome || !name.data) {
            return res.status(400).json({ error: "Nome e data são atributos obrigatórios" });
        }

        try {
            const [id] = await app.database("nomes").insert(name);
            res.status(201).json({ id }); // Retornando o ID gerado
        } catch (err) {
            res.status(500).json(err);
        }
    }

    const remove = async (req, res) => {
        const { id } = req.params;

        console.log('ID recebido para remoção:', id);

        app.database("nomes")
            .where({ id })
            .del()
            .then((result) => {
                if (result) {
                    console.log('Nome removido com sucesso');
                    res.status(204).send();
                } else {
                    console.log('Nome não encontrado');
                    res.status(404).json({ error: "Nome não encontrado" });
                }
            })
            .catch((err) => {
                console.error('Erro ao remover nome:', err);
                res.status(500).json(err);
            });
    }

    const update = async (req, res) => {
        const { id } = req.params;
        const updatedName = { ...req.body };

        app.database("nomes")
            .where({ id })
            .update(updatedName)
            .then((result) => {
                if (result) {
                    res.status(204).send();
                } else {
                    res.status(404).json({ error: "Nome não encontrado" });
                }
            })
            .catch((err) => res.status(500).json(err));
    }

    const getById = async (req, res) => {
        const { id } = req.params;

        const name = await app.database("nomes").where({ id }).first();

        if (name) {
            res.json(name);
        } else {
            res.status(404).json({ error: "Nome não encontrado" });
        }
    }

    return { get, save, remove, update, getById };
}
