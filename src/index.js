import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";
import cors from "cors"; // importa el middleware cors
const app = express();

app.use(cors()); // utiliza el middleware cors

app.get('/', (req,res) => {res.json({message: "Server is running"})});

app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema: schema
}));

app.listen(4000, ()=> console.log('Server on port 4000'));