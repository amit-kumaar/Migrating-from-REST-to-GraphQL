import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import { buildSchema } from "graphql";

//Build my schema
const schema = buildSchema(`
    type Query{
       hello: String
     }
  `);

  //The root provided resolve function
const root = {
  hello: ()=>{
    return 'Hello world!;'
  },
};
  

const app = express();
const port = 3000;

//serving static files
app.use(express.static('public'))

//serve GraphiQL playground
app.get('/graphql', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

//set up graphql endpoint
app.post('/graphql', createHandler({ schema, rootValue: root }));

app.listen(port, () => console.log(`Your server is running on port ${port}/graphql`));
