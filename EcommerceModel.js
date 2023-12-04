const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  description: { 
    type: String,
    required: true,
   
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
});

const apiModel = mongoose.model('Api', apiSchema);

module.exports = apiModel;
