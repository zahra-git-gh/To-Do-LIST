const {Router}=require('express');
const router=Router()
const {verifyToken}=require('../middlewares/authMiddlware');
const {
    getAllTodosOfOneUser,
    createTodo,
    deleteTodo,
    updateTodo
}=require('../controllers/todo.controller');
/**
 * @URL : /todo
 * @Method : GET
 * @Status : PRIVET
 * @Description : get all todos from a user
 */

router.get('/',verifyToken, getAllTodosOfOneUser)

/**
 * @URL : /todo
 * @Method : POST
 * @Status : PRIVET
 * @Description : create a todo
 */

router.post('/', verifyToken, createTodo)

/**
 * @URL : /todo/id
 * @Method : DELETE
 * @Status : PRIVET
 * @Description : delete a todo
 */

router.delete('/:id', verifyToken, deleteTodo)

/**
 * @URL : /todo/id
 * @Method : PATCH
 * @Status : PRIVET
 * @Description : update a todo
 */

router.patch('/:id', verifyToken, updateTodo)

module.exports={router}