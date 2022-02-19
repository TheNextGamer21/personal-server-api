function root (app) {
    app.get("/", (req, res) => res.status(200).header({server: "nodejs"}).json({maintanence: "true", version: "1.0.0"}))
}

module.exports = root