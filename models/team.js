let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let teamSchema = new Schema({
    teamName:      {type: String, required: true,index: {unique: true}},
    event:         {type: String, required: true},
    leader:        {type: Object, required: true},
    members:       {type: Array, default: []},
    eventEnd:      {type: Date, required: true},
    privateKey:    {type: String},
    maxNum:        {type: Number, required: true}
});

module.exports = mongoose.model('Team', teamSchema);
