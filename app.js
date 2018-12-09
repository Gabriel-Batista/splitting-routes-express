const app = require("express")(); //Why must we invoke it?
const routes = require("./routes");

app.use("/", routes);

app.listen(3000, () =>  {
  console.log("Server is now listening on port 3000")
})
