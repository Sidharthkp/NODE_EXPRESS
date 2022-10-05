var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:'Galaxy F13',
      discription:"SM-E135FLBG",
      price:"From ₹10999.00",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e135flbgins/gallery/in-galaxy-f13-sm-e135flbgins-532859063?$1300_1038_PNG$"

    },
    {
      name:'Galaxy M53',
      discription:"SM-M536BZGF",
      price:"From ₹23999.00",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bzgfinu/gallery/in-galaxy-m53-5g-sm-m536-421705-sm-m536bzgfinu-532184979?$1300_1038_PNG$"

    },
    {
      name:'Galaxy M33',
      discription:"SM-M336BZBR",
      price:"From ₹10999.00",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m336bzbrins/gallery/in-galaxy-m33-5g-8gb-ram-sm-m336bzbrins-531842017?$1300_1038_PNG$"

    },
    {
      name:'Galaxy M13',
      discription:"SM-M135FZNQ ",
      price:"From ₹10499.00",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m135fznqins/gallery/in-galaxy-m13-sm-m135-sm-m135fznqins-533230983?$1300_1038_PNG$"

    }
  ]
 if (req.session.login){
  res.render('index',{products})
 }else{
  res.redirect('/')
 }
});

module.exports = router;
