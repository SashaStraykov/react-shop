const Item = require('../models/item');
const Comment = require( '../models/comment' );
const { v4: uuidv4 } = require('uuid');

exports.getItems = async (req, res) => {
    try {
      const item = await Item.find();
      res.status(200).json(item);
    } catch (e) {
      res.status(500).json({ message: e });
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

exports.DeleteItem = async (req,res)=> {
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
      const comment = new Comment({...req.body, id: uuidv4()})
      await Item.findOneAndUpdate( { id: itemId}, { 
        $push: {
          comments: comment
        }
      })
      res.status(201).json({message:'Comment added '})
    } catch( e ) {
      res.status(501).json({message: e})
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
      res.status(201).json({message:'Item approved '})
    } catch( e ) {
      res.status(501).json({message: e})
    }
  }

  exports.CategoryItems = async (req, res) => {
      try {

        const search = req.query.searchmatch;
        const postsPerPage = req.query.postsperpage;
        const currentPage = req.query.currentpage;
        const categoryItems = req.params.category;

      const lastPost = +postsPerPage* +currentPage;
      const firstPost = +lastPost- +postsPerPage;
      const item = await Item.find({idCategory: categoryItems});
      const totalApprovedItems = item.filter(el=>el.approved==='approved');
      const totalEndItems  = totalApprovedItems.filter(el=>el.title.toLowerCase().indexOf(search.toLowerCase()) > -1)

      const finalItems = totalEndItems.slice(firstPost, lastPost)
      
      const sentData = {
        finalItems,
         totalAmount: totalEndItems.length
      }
      res.status(200).json(sentData);
      } catch (e) {
      res.status(500).json({ message: e });
    }
  }

  exports.FinalItem = async (req, res) => {

    try {
      const itemId = req.params.itemid;
      const item = await Item.findOne({id: itemId});
      res.status(200).json(item);
      } catch (e) {
      res.status(500).json({ message: e });
    }
  }