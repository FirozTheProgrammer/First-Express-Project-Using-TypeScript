import mongoose from "mongoose";

import app from "./app";
import config from "./app/config";

// getting-started.js

// mongdo username: firozhasan1542
// mongodb pass: EMns7zvpUqThFfpl

async function main() {


  try{  
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
    
  }catch(error){
console.log(error);
  }

}
