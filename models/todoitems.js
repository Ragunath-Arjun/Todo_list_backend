const mongoose = require("mongoose");

const TodoItemSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
  },
  { collection: "Todos" }
);

module.exports = mongoose.model("todo", TodoItemSchema);
