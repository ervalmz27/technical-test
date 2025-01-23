import { App } from "./core/app";
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = new App();
app.listen(Number(PORT));
