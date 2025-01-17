```javascript
//Correct usage of $inc and $setOnInsert operators to handle non-existent field
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: -1 }, $setOnInsert: { sequence: 0 } } );
```