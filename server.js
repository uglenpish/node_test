const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

const db = require("./models");

db.sequelize.sync().then(() => {
  console.log("drop table")
});

app.get("/", (req, res) => {
  res.json({message: "db.sequelize"});
});

// require("./routes/turorial.routes")(app);
require("./routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})