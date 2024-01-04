const express = require('express');
const dotenv = require("dotenv").config()
const contactRouter = require('./routes/contactRoutes')
const app= express();
app.use('/api/contacts', contactRouter )
const port = process.env.PORT || 3000

// app.get('/api/contacts', (req,res) => {
//     res.status(200).json({message:""})
// })

app.listen(port, () => {
    console.log(`server run successfully ${port}`)
})