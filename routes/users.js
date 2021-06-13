var express = require('express');
var router = express.Router();
const usersR = require('../repositories/users');

/* GET users listing. */
router.get('/',async function(req, res) {
  res.send(
    await usersR.getUsers(parseInt(req.query.offset), parseInt(req.query.limit)))
})

//get all users 
router.get('/all', async function(req, res){
	   res.send(await usersR.getAllUsers())
})

// get user by id 
router.get('/:id', async function(req, res){
	return res.send(await usersR.getUser(req.params.id))
})

// post user 
router.post('/', async function(req, res){
  
  const {username,email,password,role} = req.body;
  if (!username || !email) {
    res.status(400).json({message: "des champs sont invalides"})
  }else {
    let user = {
      username,
      email,
      password,
      role,
      createdAt : new Date(),
      updatedAt : new Date()
    };
    res.send(await usersR.addUser(user));
  }
  
})

//put user 
router.post('/:id', async function(req,res){
  let id = req.params.id;
  let user = usersR.getUser(id);
  
  if (!user){
    res.status(404).jsonp({ error: `invalide "username" ` })
  }else {
    res.send(await usersR.updateUser(id,req.body));
  }
	
})

//delete user 
router.delete('/:id', async function(req,res){
  let id = req.params.id;
  res.send(await usersR.deleteUser(id));
})

module.exports = router;
