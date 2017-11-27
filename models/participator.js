let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let ParticipatorSchema = new Schema({
    teamId:     {type: String, required: true, index: {unique: true}},
    teamName:   {type: String, required: true},
    ojAccount:  {type: String},
    ojPassword: {type: String},
    submit:     {type: Boolean, default: false},
    answers:    {type: Array, default: []},
    result:     {type: Number, default: 0}
});

module.exports = mongoose.model('Participator', ParticipatorSchema);
