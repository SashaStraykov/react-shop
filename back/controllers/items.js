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



// const formidable = require('formidable');
// const { type } = require('os');
// const e = require('express');



// const storage = multer.diskStorage({

//   destination: (req, res, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
//   }
// })

// const upload = multer({
//   storage,  
//   limits: {fieldSize: 2*1024*1024},
//   fileFilter: (req, res, cb) => {
//     const ext = path.extname(file.originalname);  
//     if(ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
//       res.status(415).json({message: 'require format of jpeg'})
//     }
//     cb(null, true)
//   }
// }).single('file')

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
        const imgArray =[]
        for(let i=0; i< req.files.imgs.length; i++) {
          imgArray.push(`/${req.files.imgs[i].path}`)
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
      // finalItems.forEach(el=> {
      //   el.img.forEach( (el, i)=> {
      //     el = fs.createReadStream(el)
      //     console.log(el)
      //   } )
      // })
      // const b = await gfs.gfs.files.find().toArray();

      // finalItems.forEach(item=> {

      //   item.img.forEach((el, i)=> {
      //     b.forEach(file=> {
      //       if(file.filename===el) {
      //         const readstream = gfs.gfs.createReadStream(file)
      //         console.log(readstream)
      //       }
      //     })
      //      gfs.gfs.files.find().toArray((err, files) => {
      //       files.forEach(file=> {
      //         if(el==file._id.valueOf()) {
      //           console.log('file', file)
      //          a.push(file)
      //          finalItems.img.splice(i, 1, file)
      //         }
      //       })

      //         });
      //   })

      // })


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