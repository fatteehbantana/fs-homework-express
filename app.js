const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const { sequelize } = require("./src/models");
sequelize.sync({ force: true });

app.get("/", (req, res) => {
    return res.json({
        name: "Fatteeh Bantana",
        role: "Fullstack Developer",
    });
});

app.listen(port, () => {
    console.log("This is from http://localhost:" + port);
});