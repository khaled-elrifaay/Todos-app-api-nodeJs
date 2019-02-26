const MongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log("server can't connect");
    }
    console.log('server connected');
    const db = client.db('TodoApp');
    //     deleteMany
    // db.collection('Todos').deleteMany({text : 'eat launch'}).then(res=>{
    //     console.log("deletd",res);
    // });

    //     insert data

    // db.collection('Todos').insertOne({text:'khaled bango',completed : true}).then(res=>{
    //     console.log("inserted",res);
        
    // })
    //     delete one

    // db.collection('Todos').deleteOne({text:'andrew'}).then(res=>{
    //     console.log("delete",res);
        
    // });

    //     find one and delete
    // db.collection('Todos').findOneAndDelete({completed : true}).then(res=>{
    //         console.log("result found and delet",res);
    // });



//    client.close();
})