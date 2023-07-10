const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const cors = require('cors'); 

router.use(cors({
  origin: 'http://localhost:4200' // allow only this origin
}));
 

router.get('', function(req, res){
  Product.find({}).then(foundProducts => {
    res.json(foundProducts);
  }).catch(err => {
    res.status(500).json({error: err});
  });
});
// 商品一覧を取得するエンドポイント

router.get('', function(req, res){
  Product.find({})
    .then(foundProducts => {
      res.json(foundProducts)
    })
    .catch(err => {
      res.status(500).json({ error: err }); // エラーをJSON形式で返します
    })
})
/*
router.get('/:productId', function(req, res) {
  const productId = req.params.productId
   Product.findById(productId,function(err, foundProduct){
    res.json(foundProduct)
   })
})
*/

// 特定のIDの商品を取得するエンドポイント
router.get('/:productId', function(req, res){
  const productId = req.params.productId; // リクエストパラメータからproductIdを取得します
  Product.findById(productId)
    .then(foundProduct => {
      if (foundProduct) {
        res.json(foundProduct)
      } else {
        res.status(404).json({ error: "Product not found" }); // 商品が見つからない場合はエラーメッセージを返します
      }
    })
    .catch(err => {
      res.status(500).json({ error: err }); // エラーをJSON形式で返します
    });
})

module.exports = router
