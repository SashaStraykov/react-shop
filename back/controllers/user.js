const User = require('../models/user');
const Item = require('../models/item');
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');

exports.registration = async (req, res) => {
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array(),
          message: 'uncorrect registration data'
        })
      }
      const {login, password }=req.body;
      const candidate = await User.findOne({login: login})
      if( candidate) {
       return   res.status(400).json({message: 'Such login has already declarated'})
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ ...req.body, password: hashedPassword, id: uuidv4(), }) 
      console.log(user);
        
      await  user.save();
  
      res.status(201).json({message:'User has declarated'})
  
    } catch(e) {
      res.status(500).json({message: e})
    }
}

exports.authorization = async (req, res) => {
      try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
          return res.status(400).json({errors:errors.array(),
             message: 'uncorrect authorization data'
          })
        }
            const {login, password } = req.body;
            const regUser = await User.findOne({login: login})
            if( !regUser ) {
             return   res.status(400).json( { message: 'Such user is not found' } )
            }
            const isMatch = await bcrypt.compare(password, regUser.password)
            if( !isMatch ) {
              res.status(400).json( { message: 'Uncorreect password' } )
            }
        
        const userDeclaratedItems = await Item.find({userId: regUser.id})
        const userItems = userDeclaratedItems.map(el=>el.id)
    
        const token = jwt.sign(
          {userID: regUser.id},
          process.env.JWT_SECRET,
          {expiresIn: '1h'}
        )
    
        const finalUser= {
          id: regUser.id,
          login: regUser.login,
          role: regUser.role,
          userItems: userItems,
          token: token,
          typs: regUser.typs
        }
        res.json(finalUser)
      } catch(e) {
        res.status(500).json({message:e})
      }
    }

  exports.checkUser = async (req, res) => {
        try{
          const userToken = req.headers.authorization.split(' ')[1];
          const decoded =   jwt.verify(userToken, process.env.JWT_SECRET);
          const user = await User.findOne({id: decoded.userID});
          res.status(200).json(user)
        } catch(e) {
          res.status(511).json({message: e})
        }
  } 