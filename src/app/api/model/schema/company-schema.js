var mongoose = require('mongoose');
var CompanySchema = mongoose.Schema;

  var companySchema = new CompanySchema({
    
    company:  String,
    sector: String,
    rating:   String,
    address: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean
    
  });

  module.exports = companySchema;