const e = require("express");
const authRouter = require("./routes/auth.route.js");
const app = e();
app.use(e.json());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;