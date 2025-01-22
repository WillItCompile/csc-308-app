// backend.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;
const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  const findUserByNameAndID = (name,id) => {
    return users["users_list"].filter(
      (user) => user["name"] == name && user["id"] == id
    );
  };
  
  const findUserByName = (name) => {
    return users["users_list"].filter(
      (user) => user["name"] === name
    );
  };

  app.get("/users", (req, res) => {
    const name = req.query.name;
    const id = req.query["id"];
    if (name != undefined && id != undefined) {
      let result = findUserByNameAndID(name,id);
      result = { users_list: result };
      res.send(result);
    } else if (name != undefined){
        let result = findUserByName(name);
        result = { users_list: result };
        res.send(result);
    }
    else{
        res.send(users);

    }
  });

  const findUserById = (id) =>
    users["users_list"].find((user) => user["id"] === id);
  
  app.get("/users/:id", (req, res) => {
    const id = req.params["id"]; 
    let result = findUserById(id);
    if (result === undefined) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(result);
    }
  });
  

app.get("/users", (req, res) => {
    res.send(users);
  });  

  const addUser = (user) => {
    users["users_list"].push(user);
    return user;
  };
  
  app.post("/users", (req, res) => {
    req.body.id = Math.floor(Math.random()*1000000);
    const userToAdd = req.body;
    addUser(userToAdd);
    res.send(201).json(userToAdd);
  });

  const removeUser = (userId) => {
    const userIndex = users["users_list"].findIndex((user) => user.id === userId);
    return users["users_list"].splice(userIndex,1)[0];
  };
  
  app.delete("/users/:id", (req, res) => {
    const userToRemove = req.params.id;
    removeUser(userToRemove);
    res.send(204);
  });

  

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});