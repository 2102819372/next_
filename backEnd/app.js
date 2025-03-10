const exporess = require("express");
const app = exporess();
const port = 8848;
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/img",(req,res)=>{

})
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
