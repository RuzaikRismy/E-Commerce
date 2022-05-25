require("dotenv").config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();  //This will run connectDB function 

const importData = async () => {
    try {
        await Product.deleteMany({});
        
        await Product.insertMany(productsData);

        console.log("Data import successfully");

        process.exit();
    } catch (error) {
        console.error("Error with data imports",error);
        // process.exist(1);
    }
}
// to run importData function below
importData();