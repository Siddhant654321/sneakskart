import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

export default mongoose.model("Category", CategorySchema);