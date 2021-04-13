const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Minecraft Server")
})

// creating a web server :: 3000
app.listen(3000, () => {
    console.log("Starting the server")
})