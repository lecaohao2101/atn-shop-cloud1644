var express = require('express');
var router = express.Router();
var display_product = require('../models/product_table');
var crud = require('../models/crud');
var session;

/* GET users listing. */
//để áp dụng vào chức năng liệt kê các user, cũng như thực hiện chức năng tìm kiếm
router.get('/', async function(req, res, next) {
  session = req.session;
  if(session.user_id){
    let username = session.user_id;
    let shop_id = session.shop_id;
    let table = await display_product(shop_id,session);
    res.render('users', { title: 'welcome to user', 
                          name: username, 
                          table_string: table})
  }
  else{
    res.redirect('/login');
  }
});
//dùng để gửi dữ liệu từ client thêm vào dữ liệu của server để thực hiện chức năng tạo mới một user
router.post('/crud', async function(req, res, next) {
  console.log(req.body);
  let results = await crud(req.body,session);
  //refresh the page
  let table = await display_product(session.shop_id,session);
  res.render('users', { title: 'welcome to ATN', 
                        name: session.user_id, 
                        table_string: table})
});

module.exports = router;
