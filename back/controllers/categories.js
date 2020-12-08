const Category = require('../models/category');
const https = require('https')

exports.getCategories = async (req, res) => {
    try {
      console.log(111)
      const category = await Category.find();
      res.status(200).json(category);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  } 