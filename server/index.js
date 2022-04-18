const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())

app.get("/", async (req, res) => {
  res.send("hello world")
})

app.post("/api/register", async (req, res) => {
  res.send({ status: "200", message: "success", data: {} })
})


app.listen(1337, () => {
  console.log("Server started at 1337");
})