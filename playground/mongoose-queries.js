const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/users');

var id = "5c7511bc20ddc22a0ef8b732";


if(!ObjectId.isValid(id)){
    console.log("this id is not correct");
}

User.findById(id).then((res) => {
    if(!res){
        console.log("no user find");
    }
    console.log("your result is :",JSON.stringify(res,undefined,2))
}).catch(e => {
    console.log("error in searching :")
})