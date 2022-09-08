const {connect} = require("mongoose");

// connection to db

async function dbconnect(){
try {
    await connect("mongodb://localhost:27017/", {
        dbName:"shop"
    })

    console.log("Database connected successfully");

} catch (error) {
    console.log(error);
    process.exit(1)
}

}

module.exports = {dbconnect};
