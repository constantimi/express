import { createApp } from "./createApp";

const app = createApp();

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
