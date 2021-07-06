// require your server and launch it here

const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});