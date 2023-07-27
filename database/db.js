const mongoose = require('mongoose');
const db = process.env.DATABASE;

mongoose.connect(db)
.then(()=>{
    console.log('your connection is successful')
}).catch((err)=>{
    console.log(`your connection is error ${err}`)
})