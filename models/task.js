// add mangoose
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
	{
		name:
		{
			type: String,
			required: 'Name is required',
			trim: true
		},
		complete: {
			type: Boolean,
			default: false
		},
		priority: Number
	})
// make this public
module.exports = mongoose.model(name:'Task',taskSchema)
