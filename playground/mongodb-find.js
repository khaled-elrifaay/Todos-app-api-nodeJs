const MongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log("server can't connect");
    }
    console.log('server connected');
    const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id : new objectID('5c697f34f4c96148b8110db3')
    // }).toArray().then((docs)=>{
    //          console.log('docs');
    //          console.log(docs)
        
    // }, (err)=>{
    // console.log("can't find data",err);
    // });  
    db.collection('Todos').find().count().then((docs)=>{
             console.log('docs count');
             console.log(docs)
        
    }, (err)=>{
    console.log("can't find data",err);
    });   
//    client.close();
})