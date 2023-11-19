const cors = require('cors');

module.exports = (app) => {
    app.use(cors());

    app.route("/users")
        .get(app.api.users.get)
        .post(app.api.users.save);

    app.route("/categories")
        .get(app.api.categories.get)
        .post(app.api.categories.save);

    app.route("/names")
        .get(app.api.names.get) 
        .post(app.api.names.save);

    app.route("/names/:id")
        .delete(app.api.names.remove);
};
