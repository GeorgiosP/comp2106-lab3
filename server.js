var connect = require('connect'),
    url = require('url');

var app = connect();

var calculator = function(req, res, next) {

  var qs = url.parse(req.url, true).query;
  var operation = qs.method;
  var x = parseInt(qs.x);
  var y = parseInt(qs.y);

  if (operation === 'add') {
    res.end(x + ' + ' + y + ' = ' + (x + y));
  } else if (operation === 'subtract'){
    res.end(x + ' - ' + y + ' = ' + (x - y));
  } else if (operation === 'divide') {
    res.end(x + ' / ' + y + ' = ' + (x / y));
  } else if (operation === 'multiply') {
    res.end(x + ' * ' + y + ' = ' + (x * y));
  } else {
    res.end('Invalid Operator')
  }

}

app.use('/lab3', calculator);

app.listen(3000);
console.log('Listening on port 3000');
