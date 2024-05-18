import app from "./app";

const port = process.env.PORT || 8081;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
  console.log(`Server running on 
  http://${host}:${port}!`);
});
