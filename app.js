const app = require("express")();
const routes = require("./routes");

app.use("/", routes);

app.listen(3000, () =>  {
  console.log("Server is now listening on port 3000")
})
