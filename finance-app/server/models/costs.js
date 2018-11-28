const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let costSchema = new Schema ({
    id: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
})

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;