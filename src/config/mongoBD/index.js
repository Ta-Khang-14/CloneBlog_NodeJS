const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://cloneblog:khang1122@cloneblogs.ardmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully');
    } catch(err) {
        console.log(err)
        console.log('Connect failure');
        process.exit(1);
    }   
}

module.exports = connect;

