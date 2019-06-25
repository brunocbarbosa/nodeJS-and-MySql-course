var app = require('./config/server');
//sem o ejs usa send em vez de render

app.listen(3000, function(){
    console.log('Server ON');
});