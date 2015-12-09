require("babel/register")({ only: /src/ });

var app = require("./app");

app.listen(process.env.PORT || 3000, function() {
  console.info("✅  Node server started at http://localhost:3000/");
});


