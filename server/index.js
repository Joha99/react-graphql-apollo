const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 6969;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");

app.use(cors());

// create graphql server
// single endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // visualize queries
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
