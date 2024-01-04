const express = require('express');
const router = express.Router()
router.route('/').get((req,res) => {
    res.status(200).json({message:""})
}) 
router.route('/').post((req,res) => {
    res.status(200).json({message:`CreateContact ${req.body}`})
}) 
router.route('/:id').put((req,res) => {
    res.status(200).json({message:`UPDATE CONTACT FOR ${req.params.id}`})
}) 
router.route('/:id').delete((req,res) => {
    res.status(200).json({message:`DELETE CONTACT FOR ${req.params.id}`})
}) 

module.exports = router