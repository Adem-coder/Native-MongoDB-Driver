const mongoose = require('mongoose');

// connection URL
mongoose.connect('mongodb://localhost:27017/frui', {useNewUrlParser: true, useUnifiedTopology: true});

