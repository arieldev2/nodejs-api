const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/post-db', {
    useNewUrlParser: true
})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));





module.exports = mongoose;