```javascript
//Incorrect usage of $inc operator in update query
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: -1 } } );
```