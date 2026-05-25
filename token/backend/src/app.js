const e = require("express");
const authRouter = require("./routes/auth.route.js");
const homeRouter = require("./routes/home.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = e();
app.use(e.json());
app.use(cookieParser());
app.use(e.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/home", homeRouter);
app.use(cors({ origin: "http://localhost:5173", credentials: true ,methods: ["GET", "POST", "PUT", "DELETE"]}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;