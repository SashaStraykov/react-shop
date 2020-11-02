const Category = require('../models/category');

exports.getCategories = async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (e) {
      res.json({ message: e });
    }
  }