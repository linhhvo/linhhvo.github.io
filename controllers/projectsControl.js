const Project = require('../models/Project');

// Retrieve projects from database
exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find().sort({priority: 1});

        return res.status(200).json({
            success: true,
            data: projects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};