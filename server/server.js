var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("./db/mongoose.js");
var { Todo } = require("./models/todo");
var { User } = require("./models/users");

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    allTodos => {
      res.send({ allTodos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log("server start up");
});
