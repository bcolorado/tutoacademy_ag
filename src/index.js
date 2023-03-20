import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";
const app = express();

app.get('/', (req,res) => {res.json({message: "Server is running"})});


app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema: schema
}));

app.listen(4000, ()=> console.log('Server on port 4000'));