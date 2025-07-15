const mongoose = require('mongoose');

main()
    .then(() => {
    console.log("Connection Succesful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({  //isse schema bnara hu
    name : String,
    emaail : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);   //isse collection bnara hu