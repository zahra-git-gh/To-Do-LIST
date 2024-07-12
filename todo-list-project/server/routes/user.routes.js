const {Router}=require('express');
const router=Router()
const {
    getUser,
    getOneUser,
    registerNewUser,
    verifyUser,
    loginUser,
    updateUser
}=require('../controllers/user.controllers');
const { verifyToken } = require('../middlewares/authMiddlware');
/**
 * @URL : /user/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all users data
 */
router.get('/', verifyToken ,getUser);

/**
 * @URL : /user/id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get a user data
 */
router.get('/:id', getOneUser);

/**
 * @URL : /user/
 * @Method : POST
 * @Status : PUBLIC
 * @Description : post a user data/ register user
 */
router.post('/', registerNewUser);

/**
 * @URL : /user/verify/userid/token
 * @Method : GET
 * @Status : PUBLIC
 * @Description : user verify email
 */

router.get('/verify/:userId/:token', verifyUser);

/**
 * @URL : /user/login
 * @Method : POST
 * @Status : PUBLIC
 * @Description : login user
 */

router.post('/login', loginUser)


/**
 * @URL : /user
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : edit name of user
 */

router.patch('/', verifyToken ,updateUser)


module.exports={router}