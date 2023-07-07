const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const SampleDb = require('./sample-db')

const productRoutes = require('./routes/products')


mongoose.connect(config.DB_URI,{
  //userNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const sampleDb = new SampleDb()
    sampleDb.initDb()
  }
)

const app = express()

app.use('/api/v1/products', productRoutes)

app.get('/products', function(req, res){
  res.json({'success' : true})
})

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
  console.log('I am running!')
})


//mongodb+srv://test:testtest@cluster1.hw2yl9x.mongodb.net/?retryWrites=true&w=majority