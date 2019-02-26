const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log("server can't connect");
    }
    console.log('server connected');
    const db = client.db('TodoApp');
    // const collection = db.collection('Todos');
    // collection.insert({
    //     text : 'first todo',
    //     completed : false
    // },(err,res)=>{
    //     if (err){
    //         return console.log('unable to insert data',err);
            
    //     }
    //     console.log('inserted',res)
    // })

    const collection = db.collection('Users');
    collection.insertOne({
        name : 'khaled',
        age : 25,
        location : 'Egypt'
    },(err,res)=>{
        if (err) {
            return console.log('unable to insert data',err);
            
        }
        console.log(res.ops)
    });
    
    client.close();
})