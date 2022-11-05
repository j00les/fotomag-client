const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const ngrok = require('ngrok');

server.use(middlewares);

server.use(jsonServer.bodyParser);

const midtransClient = require('midtrans-client');

server.post('/pay', async (req, res, next) => {
  try {
    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-JbrhEhGAfzWMT_Gvh4f15Cti',
    });

    let parameter = {
      transaction_details: {
        order_id: '299',
        gross_amount: 10000,
      },

      customer_details: {
        first_name: 'budiw',
        last_name: 'pratama',
        email: 'budi.pra@example.com',
        phone: '08111222333',
      },
    };

    const transactionToken = await snap.createTransaction(parameter);
    res.status(201).json(transactionToken);
  } catch (err) {
    console.log(err);
  }
});

server.post('/coba-file', async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
