const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
},
{ tiemstamps: true}
)

module.exports = mongoose.model('data', dataSchema)