const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://poojab3252:bVBHIS6X4Hcd4254@contactdemo.mfqbnis.mongodb.net/?retryWrites=true&w=majority';

async function connectToDatabase() {

  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('DB connected')
      const collectionName = 'contactList';
      const collection = mongoose.connection.db.collection(collectionName);

      // Use MongoDB query methods to fetch data
      return collection.find({}).toArray();
    })
    .then(documents => {
      global.contactList = documents;  
    })
    .catch(err => {
      console.error('Error:', err);
    });

}
module.exports = connectToDatabase;