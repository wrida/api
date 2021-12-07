const express = require('express')
const router = express.Router()
const User = require('../models/User')

// create user
router.post('/adduser',(req, res)=>{
User.create(req.body).then(data=>res.json(data))
.catch(err=>res.status(500).json(err))
})
// get users
router.get('/getuser/:name',(req, res)=>{
User.find({name:req.params.name})
.then(data=>res.json(data))
.catch(err=>res.status(500).json(err))
})
// edit user
router.put("/findbyId/:id", (req, res) => {
User.updateOne({ _id: req.params.id }, req.body, { new: true })
      .then((data) => res.json(data))
      .catch((err) => res.send(err));
})
delete user
router.delete("/api/delete/:id", (req, res) => {
User.findByIdAndRemove(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.send(err));
})
module.exports = router