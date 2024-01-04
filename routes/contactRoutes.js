const express = require('express');
const router = express.Router()
const {getContact, postContact, deleteContact, updateContact} = require("../controllers/contactControllers")

router.route('/').get(getContact).post(postContact) 
router.route('/:id').put(updateContact) .delete(deleteContact) 

module.exports = router