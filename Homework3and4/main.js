const http=require('http');

http.createServer(function(req,res)
{
    if (req.url==='/') {
        res.write('Hello Web Application');
        res.end();
    }
    else if (req.url==='/about') {
        res.write('About Me');
        res.end();
    }
    else if (req.url==='/call') {
        res.write('Call Me');
        res.end();
    }
    else if (req.url==='/address') {
        res.write('My Address');
        res.end();
    }
    else if (req.url==='/phone') {
        res.write('My Phonenumber');
        res.end();
    }
    else{
        res.write('Not Found');
        res.end();
    }
console.log(req.url);
}).listen(3000);