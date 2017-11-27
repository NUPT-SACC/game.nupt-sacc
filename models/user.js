let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

let UserSchema = new Schema({
    stuid:      {type: String, required: true, index: {unique: true}},
    username:   {type: String, required: true},
    avatar:     {type: String, required: true},
    password:   {type: String, required: true},
    email:      {type: String, required: true,index: {unique: true}},
    phone:      {type: String, required: true},
    auth:       {type: String, default: 'user'},
    activation: {type: Boolean, default: false}
});

// 每次保存操作对密码进行加密
UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')){
        return next();
    }
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

// 内建比较密码是否相同
UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
