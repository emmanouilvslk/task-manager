require("../db/mongoose");
const Task = require("../models/task");

// Task.findByIdAndDelete("60c0657651570a33c0b2f5a9")
//     .then((task) => {
//         console.log(task + " is deleted.");
//         return Task.countDocuments({ completed: false });
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((e) => {
//         console.log("Error", e);
//     });

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments();
    return count;
};

deleteTaskAndCount("60c05f0faf91f61574fa3e05")
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
        console.log("Error", e);
    });
