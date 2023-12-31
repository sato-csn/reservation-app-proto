const Product = require('./model/product')

class SampleDb {

  constructor() {
    this.product = [{ coverImage: './assets/img/phone-cover.jpg',
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    heding1:'サンプルテキスト1',
    heding2:'サンプルテキスト2',
    heding3:'サンプルテキスト3',
    headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
    headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
    headingtext3: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'

  },
  {
    coverImage: './assets/img/phone-cover.jpg',
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    heding1:'サンプルテキスト1',
    heding2:'サンプルテキスト2',
    heding3:'サンプルテキスト3',
    headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
    headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
    headingtext3: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'

  },
  {
    coverImage: './assets/img/phone-cover.jpg',
    name: 'Phone Standard',
    price: 299,
    description: '',
    heding1:'サンプルテキスト1',
    heding2:'サンプルテキスト2',
    heding3:'サンプルテキスト3',
    headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
    headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
    headingtext3: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
  },
  {
    coverImage: './assets/img/phone-cover.jpg',
    name: 'Phone Special',
    price: 999,
    description: '',
    heding1:'サンプルテキスト1',
    heding2:'サンプルテキスト2',
    heding3:'サンプルテキスト3',
    headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
    headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
    headingtext3: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'

  }
]
}

 async initDb() {
  await this.cleanDb()
  this.pushProductsToDb()
 }

 async cleanDb() {
  await Product.deleteMany({})
 }

  pushProductsToDb() {
    this.product.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
}

module.exports = SampleDb