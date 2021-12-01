const http=require('http');

const server=http.createServer(function (req,res) {
    if (req.url==='/') {
        res.write('Hello World!')
        res.end();
    }

    if (req.url==='/api/hw2') {
        let person={
            firstName:'Mohammad',
            lastName:'Bakhshi'
        }
        res.write(JSON.stringify(person));
        res.end();
    }
}).listen(3000);

