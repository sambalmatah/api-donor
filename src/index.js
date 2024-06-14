// PANGGIL SOURCE

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const userRouters = require("./routers/users.js");
const userDetailRouter = require("./routers/user-detail.js");
const transactionRoutes = require("./routers/donor-transactions.js");
const transactionDetailRoutes = require("./routers/donor-transaction-details.js");
const historyContributorRoutes = require('./routers/history-contributor.js');
const historySubmittedRoutes = require("./routers/history-submitted.js");
const verifyProfile = require('./routers/verify-profile.js');
const loginRoutes = require("./routers/login.js");
const logMiddleware = require("./middleware/logs.js");
const upload = require("./middleware/multer.js");

// Membuat variable fungsi express

const app = express();

// EKSEKUSI API

app.use(logMiddleware);
app.use(express.json()); // mengizinkan request body berupa json


app.use("/users", userRouters);

app.use("/user-details", userDetailRouter);

app.use("/transactions", transactionRoutes);

app.use("/transaction-details", transactionDetailRoutes);

app.use("/login", loginRoutes);

app.use("/profile", verifyProfile);

app.use("/history-contributor", historyContributorRoutes);

app.use("/history-submitted", historySubmittedRoutes);


app.use("/assets", express.static("public/profiles")); // mengizinkan get data gambar ke dalam folder

app.post("/upload", upload.single("photo"), (request, response) => {
  //fungsi upload gambar
  response.json({
    message: "Upload berhasil",
  });
});

app.use((error, request, response, next) => {
  response.json({
    message: error.message,
  });
});

// Membuka Portal 4000 (harus ada)
app.listen(PORT, () => {
  console.log(`menjalankan server ${PORT}`);
});
