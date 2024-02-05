'use strict';
const { randomUUID } = require('crypto');
const ApiTodo = {
    listTaskGet: (req, res, next) => {
        console.log('# Controller ApiTodo.listTaskGet');
        try {
            if (!req.session.hasOwnProperty('task')) {
                req.session.task = []
            }
          return res.status(200).json(req.session.task)
        } catch (err) {
          console.error('# Error Controller ApiTodo.listTaskGet:', err);
          return res.status(500).json(err)
        }
    },
    addTaskPost: (req, res, next) => {
        console.log('# Controller ApiTodo.AddTaskPost');
        try {
            const task = req.session.task;
            const taskName = req.body.name;
            const newTask = {
                id: randomUUID(),
                name: taskName,
                status: 1 // 1 working, 2 complete
            }
            task.push(newTask)
            return res.status(201).json(newTask)
        } catch (err) {
          console.error('# Error Controller ApiTodo.AddTaskPost:', err);
          return res.status(500).json(err)
        }
    },
    removeTaskDelete: (req, res, next) => {
        console.log('# Controller ApiTodo.removeTaskDelete');
        try {
            const task = req.session.task;
            const uuidTask = req.params.uuid
            const removeTask = task.filter(item => item.id != uuidTask)
            req.session.task = removeTask
            return res.status(200).json(req.session.task)
        } catch (err) {
          console.error('# Error Controller ApiTodo.removeTaskDelete:', err);
          return res.status(500).json(err)
        }
    },
    updateStatusTaskPatch: (req, res, next) => {
        console.log('# Controller ApiTodo.updateStatusTaskPatch');
        try {
            const task = req.session.task;
            const uuidTask = req.params.uuid
            const currentTask = task.filter(item => item.id === uuidTask)
            currentTask[0].status = 2
            return res.status(200).json(req.session.task)
        } catch (err) {
          console.error('# Error Controller ApiTodo.updateStatusTaskPatch:', err);
          return res.status(500).json(err)
        }
    }
}

module.exports = ApiTodo;