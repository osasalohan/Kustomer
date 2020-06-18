const express = require('express');
const router = express.Router({ mergeParams: true });
const { addProject, getProject, deleteProject } = require('../handlers/projects');

router.post('/', addProject);
router.get('/:project_id', getProject);
router.delete('/:project_id', deleteProject);

module.exports = router;