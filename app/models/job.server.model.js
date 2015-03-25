'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Job Schema
 */
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	employer: {
		type: Schema.ObjectId,
		ref: 'User'
		required: 'Employer is mandatory'
	}
	start: {
		type: Date,
		default: Date.now
	},
	end: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	requirements: [Schema.Types.ObjectId]
});

mongoose.model('Job', JobSchema);
