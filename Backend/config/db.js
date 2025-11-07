import mongoose from "mongoose";

const connectedDb = async()=>{
  try {
      const connect = await mongoose.connect(process.env.MONGO_URI);
      console.log(`mongodb connected : ${connect.connection.host}`)
    
  } catch (error) {
     console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

export default connectedDb