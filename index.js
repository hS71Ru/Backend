const http=require('http');

function dataControl(res,req){
  req.write("hey, hi harsh");
  req.end();
}

http.createServer(dataControl).listen(4000);

