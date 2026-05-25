require("dotenv").config();
const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");
const PORT = process.env.PORT || 3000;
app.listen(PORT,async () => {
    await connectDB();
  console.log(`Server is running on port ${PORT}`);
});