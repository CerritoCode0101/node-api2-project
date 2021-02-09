// require your server and launch it here
const server = require("./api/server");

const PORT = 1234;

server.listen(PORT, () => {
    console.log('\n*** Server Running on http://localhost:1234 ***\n');
});