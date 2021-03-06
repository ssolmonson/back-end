const mongoose = require('mongoose')
const Answer = require('./answer')
const answerSchema = Answer.schema

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  possibleAnswers: [{
    type: String,
    required: true
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  response: [ answerSchema ]
},
{
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
