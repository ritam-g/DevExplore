const e = require("express");
const authRouter = require("./routes/auth.route.js");
const homeRouter = require("./routes/home.route.js");
const cookieParser = require("cookie-parser");
const app = e();
app.use(e.json());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/home", homeRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;