const getContact = (req,res) => {
    res.status(200).json({message:""})
}
const updateContact = (req,res) => {
    res.status(200).json({message:`UPDATE CONTACT FOR ${req.params.id}`})
}
const postContact = (req,res) => {
    res.status(200).json({message:`CreateContact ${req.body.name}`})
}
const deleteContact = (req,res) => {
    res.status(200).json({message:`DELETE CONTACT FOR ${req.params.id}`})
}

module.exports = {getContact, updateContact, postContact, deleteContact}