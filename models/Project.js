const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please enter project name.']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Please enter description.']
    },
    skill: Array,
    sourceCode: String,
    demo: String,
    report: String,
    category: String,
    priority: Number
});