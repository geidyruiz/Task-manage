//link to the express package
var express = require('express');
//instanciestes a new express route to handle http request
var router = express.Router();

//Reference the task model
const Task = require('../models/task')

/* GET Task Index view. */
//use the task model to fetch a lists of task and pass these to view for display
//if en error occurs, the error parameter will filled
//if not, the task parameter will be filled with the query result

router.get('/', function (req, res, next) {

    Task.find((err, tasks) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('tasks/index',
                {
                    tasks: tasks
                })
        }
    })
})

//GET task add view
router.get('/add', (req, res, next) => {
    res.render('tasks/add')
})
//POST tasks / add for submission
router.post('/add', (req, res, next) => {
    //use Mongoose to try to save a new object
    Task.create({
        name: req.body.name,
        priority: req.body.priority
    }, (err, tasks) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/tasks')
        }
    })
})
//GET task/delete/ - colon in the path represents a URL parameter
router.get('/delete/:_id', (req, res, next) => {
    //store the selected id in a local variable
    var _id = req.params._id;
    //Use Mongoose to delete the selected document from the DB
    Task.remove({ _id: _id }, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/tasks')
        }

    })  
})
//GET task/ edit/.. populate edit for with my existing task values
//GET task/delete/ - colon in the path represents a URL parameter
router.get('/edit/:_id', (req, res, next) => {
    //store the selected id in a local variable
    var _id = req.params._id;
    //use this selected id to look up the matching document
    Task.findById(_id,(err, tasks) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('tasks/edit',
                {
                    tasks: tasks
                })
        }
    })
})







//express this file as public
module.exports = router;