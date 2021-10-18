const express = require("express");
require("./db/mongoose"); //we dont want to grab anything from that file,it will connect that way to the db.
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//     res.status(503).send("Currently updating.Try again soon:).");
// });

// automatically parse incoming json data to an object so we can
// access that in our req handlers
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
