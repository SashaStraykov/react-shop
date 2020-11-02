const Item = require('../models/item');
const Comment = require( '../models/comment' );
const { v4: uuidv4 } = require('uuid');

exports.getItems = async (req, res) => {
    try {
      const item = await Item.find();
      res.json(item);
    } catch (e) {
      res.json({ message: e });
    }
  }

exports.DeclarateItem = async (req, res) => {
    try{
        console.log(req.files)
        console.log(req.body)
        const item = new Item ({...req.body, id:uuidv4()})
        await item.save()
        res.status(201).json({message:'item declarated'})
    } catch(e) {  
        res.status(500).json({message: e})
    }
}

exports.DeleteItem = async(req,res)=> {

    try {
      const {id} = req.body
      const deletedItem = await Item.findOne({id: id})
      await deletedItem.remove();
      res.status(200).json({message:'Item has deleted '})
    } catch (e) {
      res.status(500).json({message: e})
    }
  }

  exports.AddComment = async ( req, res ) => {
    try { 
      const { itemId } = req.body;
      console.log('itemId ', itemId)
      const comment = new Comment({...req.body, id: uuidv4()})
      console.log(comment)
      await Item.findOneAndUpdate( { id: itemId}, { 
        $push: {
          comments: comment
        }
      })
      res.status(200).json({message:'Comment added '})
    } catch( e ) {
      res.status(500).json({message: e})
    }
  }

  exports.AddStatement = async ( req, res ) => {
    try { 
      const { itemId, approved } = req.body;
      await Item.findOneAndUpdate( { id: itemId}, { 
        $set: {
          approved: approved
        }
      })
      res.status(200).json({message:'Item approved '})
    } catch( e ) {
      res.status(500).json({message: e})
    }
  }

  exports.CategoryItems = async (req, res) => {

    const categoryItems = req.params.category;
      try {
      const item = await Item.find({idCategory: categoryItems});
      res.status(200).json(item);
      } catch (e) {
      res.status(500).json({ message: e });
    }
  }

  exports.FinalItem = async(req, res) => {
   const itemId = req.params.itemid;
    try {
      const item = await Item.findOne({id: itemId});
      res.status(200).json(item);
      } catch (e) {
      res.status(500).json({ message: e });
    }
  }