const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "017888888" },
  { id: 2, name: "banana", email: "banana@gmail.com", phone: "017888888" },
  { id: 3, name: "popy", email: "popy@gmail.com", phone: "017888888" },
  { id: 4, name: "rabana", email: "rabana@gmail.com", phone: "017888888" },
  { id: 5, name: "vabana", email: "vabana@gmail.com", phone: "017888888" },
  { id: 6, name: "jabana", email: "jabana@gmail.com", phone: "017888888" },
  { id: 7, name: "eabana", email: "eabana@gmail.com", phone: "017888888" },
];
app.get("/", (req, res) => {
  res.send("Htui jghhh init!");
});
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search =req.query.name.toLowerCase();
    const matched =users.filter(user=>user.name.toLowerCase().includes(search))
    res.send(matched)
  }
   else {
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.post("/user", (req, res) => {
  const user = req.body;
  const id = users.length + 1;
  user.id = id;
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
