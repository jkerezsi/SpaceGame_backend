/* eslint-disable no-console */
const PORT = 3012;
const server = require('./src');

try {
  server.connectToDatabase();
  server.app.on('close', () => {
    server.disconnectFromDatabase();
  });
  server.app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`); // eslint-disable-line
  });
} catch (error) {
  console.log(error.message);
}
