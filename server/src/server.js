const express = require("express")
const graphqlHTTP = require("express-graphql").graphqlHTTP
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")

const app = express()
app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const uri = "mongodb://localhost:27017/userinfo"
mongoose
    .connect(uri, options)
    .then(() => {
        console.log("db connected")
            return app.listen(3000, console.log("Server is running at port 3000"))
        }
    )
    .catch(error => {
        throw error
    })