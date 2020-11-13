const Item = require('../models/item');
const Comment = require( '../models/comment' );
const { v4: uuidv4 } = require('uuid');
const gfs = require('../index')

const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override')
const fs = require('fs');



exports.getItems = async (req, res) => {
    try {
      const item = await Item.find({userId: req.query.id, approved: 'approved'});
      res.status(200).json(item);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }

exports.DeclarateItem = async (req, res) => {
    try{
        const imgArray =[]
        if(req.files.imgs) {
          for(let i=0; i< req.files.imgs.length; i++) {
            imgArray.push(`/${req.files.imgs[i].path}`)
          }
        } 
        const item = new Item ({...req.body, id:uuidv4(), img: imgArray})
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
    } catch (e) {
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

  exports.RejectedItems = async (req, res) => {
    try {
      const item = await Item.find({ userId: req.query.id, approved: ['rejected', '']});
      res.status(200).json(item);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }

  exports.ApprovingItems = async (req, res) => {
    try {
      const item = await Item.find({approved: ''});
      res.status(200).json(item);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }

  exports.BucketItems = async (req, res) => {
    try {
      const bucketItems = req.body.bucketItems.split(',')
      const item = await Item.find({id: bucketItems});
      res.status(200).json(item);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }

  exports.DeleteComment = async (req, res) => {
    try {
      const item = await Item.findOne( {id: req.body.userId})
      let index;
      item.comments.forEach((el, i) => {
        if(el.id===req.body.comment.id) {
        index=i;
        }
      })
      console.log(index)
    } catch(e) {
      res.status(500).json({ message: e });
    }
  }