const http=require('http');

const fs=require('fs');

http.createServer(function(req,res)
{
  if (req.url==='/home' && req.method==='GET') {
    fs.readFile('./webContent/index.html','utf-8',function (err,page) {
      if(err)
      {
        res.end('Something went wrong...')
      }
      else{
        res.end(page);
      }
    })
  }
  else if(req.url==='/style' && req.method==='GET')
  {
    fs.readFile('./webContent/style.css','utf-8',function (err,style) {
      if(err)
      {
        res.end('Something went wrong...')
      }
      else{
        res.end(style);
      }
    })
  }
  else if(req.url==='/my_jquery_functions' && req.method==='GET')
  {
    fs.readFile('./webContent/my_jquery_functions.js','utf-8',function (err,behavior) {
      if(err)
      {
        res.end('Something went wrong...')
      }
      else{
        res.end(behavior);
      }
    })
  }

 
}).listen(3500);


