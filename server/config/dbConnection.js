import mongoose from 'mongoose';

mongoose.set('strictQuery', false);            // To avoid DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.

const connectionToDB = async () => {
    try{
        const {connection} = await mongoose.connect(
            process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
        )
        if(connection){
            console.log(`Connected to MongoDB: ${connection.host} ${connection.name}`)
        }
    }
    catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectionToDB