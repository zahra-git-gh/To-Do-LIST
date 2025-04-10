const {
    deleteDirectory,
    updateDirectory,
    postDirectory,
    getAllDirectoryOfOneUser
}=require('../controllers/directory.controllers');
const {verifyToken}=require('../middlewares/authMiddlware');
const router=require('express').Router();

/**
 * @URL : /directory
 * @Method : GET
 * @Status : PRIVET
 * @Description : get all directory from a user
 */

router.get('/', verifyToken ,getAllDirectoryOfOneUser);


/**
 * @URL : /directory
 * @Method : POST
 * @Status : PRIVET
 * @Description : post a directory from a user
 */

router.post('/', verifyToken, postDirectory);


/**
 * @URL : /directory
 * @Method : UPDATE
 * @Status : PRIVET
 * @Description : update a directory from a user
 */

router.patch('/:id', verifyToken, updateDirectory);
/**
 * @URL : /directory
 * @Method : DELETE
 * @Status : PRIVET
 * @Description : delete a directory from a user
 */

router.delete('/:id', verifyToken, deleteDirectory);

module.exports={router}