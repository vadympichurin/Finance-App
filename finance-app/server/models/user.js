const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let Cost = require('./costs');

// let cost = {
//     name: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         required: true,
//     }
// }

let userSchema = new Schema({
    login: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePicture: {type: Buffer},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
