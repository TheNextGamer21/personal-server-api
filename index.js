const express = require('express')
const app = express()
const PORT = 80

app.use(express.json())
app.disable('x-powered-by')

app.get("/", (req, res) => {
    // if (!req.headers.authorization) {
    //     res.status(403).send({message: "Authorization Failed, Access Denied!"})
    //     return
    // }
    res.status(200)
    res.header({
        server: "nodejs"
    })
    res.send({
        maintanence: "true",
        version: "1.0.0"
    })
})


app.listen(PORT)