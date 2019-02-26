var express = require("express");
var bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
var mongoose = require("./db/mongoose.js");
var { Todo } = require("./models/todo");
var { User } = require("./models/users");
const port = process.env.PORT || 3000;
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

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  var messageError = {
    message: "invalid todo id"
  };
  if (!ObjectID.isValid(id)) {
    console.log("the id is invalid");
    res.send(messageError);
  }
  Todo.findById(id).then(
    todoid => {
      console.log("result of search is :", todoid);
      res.send({ todoid });
    },
    e => {
      console.log("there is no todo find");
      res.status(400).send(e);
    }
  );
});

app.delete(
  "/todos/:id",
  (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.send("invalid id");
    }
    Todo.findByIdAndDelete(id).then(
      deletedTodo => {
          if(!deletedTodo){
              let deletedMessage = {
                  message : "no todo find"
              }
              return res.status(404).send(deletedMessage);
          }
        return res.send({ deletedTodo });
      },
      e => {
        return res.status(400).send("didn't find todo");
      }
    );
  },
  e => {
    return res.send("error");
  }
);

app.listen(port, () => {
  console.log(` server started at port : ${port}`);
});
