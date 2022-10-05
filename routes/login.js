var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  if( req.session.login){
    res.redirect('/home')
  }else{
    res.render('login', {loginError:req.session.loginError})  
    req.session.loginError=false
  }
});


const emailDb="sidharth@gmail.com"
const passwordDb= "1234"


router.post('/login', (req,res) => {
  const { email, password } = req.body
if (email == emailDb && password == passwordDb){
  req.session.login =true
  res.redirect('/home')
}else{
  req.session.loginError = true
  res.redirect('/')
}
})

router.get('/logout', (req,res) => {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
