const express = require('express');

const todoController = require('../controllers/todo');

var router = express.Router();

router.get('/todo', todoController.listTaskGet);
router.post('/todo', todoController.addTaskPost);
router.patch('/todo/:uuid', todoController.updateStatusTaskPatch);
router.delete('/todo/:uuid', todoController.removeTaskDelete);

module.exports = router;