const auth = require("json-server-auth");
const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router('db.json');

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  accounts: 640
});

app.use(rules);
app.use(auth);
app.use(router);
app.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});