require('dotenv').config()
const port = process.env.PORT;
const app = require("./app")

app.listen(port, () => {
    console.log(`Fruit Api listening on port ${port}`);
});