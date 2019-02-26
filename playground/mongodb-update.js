const MongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log("server can't connect");
    }
    console.log('server connected');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id : new objectID('5c697f34f4c96148b8110db3')
    },{
        $set : {
            completed : true
        }
    }, {
        returnOriginal : true
    }).then(res=>{
        console.log("res",res)
    },(err =>{
        console.log("error",err)
    }))

//    client.close();
})