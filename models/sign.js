const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
    },
    
    password: {
        type: String,
        required: true,
    }
});


signupSchema.plugin(passportLocalMongoose, {
    usernameField: 'username',
});


module.exports = mongoose.model('Signup', signupSchema);