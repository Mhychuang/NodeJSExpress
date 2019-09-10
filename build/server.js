import express from "express";
const app = express();

app.get("/", (req, res, next) => {
    res.send("Pure JS Version 22")
});

app.get("/tours", (req, res, next) => {
    res.send("Get a list of tours...")
});

app.post("/tours", (req, res, next) => {
    res.send("Tour booking API")
});


//app.listen(process.env.PORT | 8091, () => console.log("Server started..."));
app.listen(process.env.PORT | 8091, function () {
    return console.log("Server started 0891...");
  });

