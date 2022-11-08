const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/coba-dong', async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});

server.get('/test', async (req, res, next) => {
  res.send('yay');
});

// Use default router
server.listen(port, () => {
  console.log('Running at' + port);
});
