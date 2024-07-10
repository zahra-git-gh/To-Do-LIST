const {Router}=require('express');
const router=Router()
const {
    getAllUsers,
    getOneUser,
    registerNewUser,
    verifyUser,
    loginUser
}=require('../controllers/user.controllers');
/**
 * @URL : /user/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all users data
 */
router.get('/', getAllUsers);

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
 * @URL : /user/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : user verify email
 */

router.get('/verify/:userId/:token', verifyUser);

/**
 * @URL : /user/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : login user
 */

router.post('/login', loginUser)