const {Router} = require('express')
const {getUser,saveUser,updateUser,deleteUser} = require('../controllers/UserController')
const router = Router()

router.get('/',getUser)
router.post('/save',saveUser)
router.post('/update',updateUser)
router.post('/delete',deleteUser)

module.exports = router