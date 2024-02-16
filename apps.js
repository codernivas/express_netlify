const express = require("express")
const app = express()

app.get("/", (req, res, next) => {
  console.log(req.url)
  console.log(req.method)
  res.send("i am ")
})
app.post("/", (req, res, next) => {})
app.delete("/", (req, res, next) => {})
app.listen(6006, () => {
  console.log("server started on  6006")
})
