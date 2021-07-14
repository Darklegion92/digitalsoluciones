import { Router } from 'express'
import { deletePhotos, deletePost, deleteUser, getUserPhotos, getUserPosts, getUsers, patchPhotos, patchPost, patchUser } from '../controllers/user.controller'

const router = Router()


router.get('/', getUsers)
router.get('/photos/:id', getUserPhotos)
router.get('/posts', getUserPosts)

router
    .patch('/:id', patchUser)
    .patch('/photos/:id', patchPhotos)
    .patch('/posts/:id', patchPost)

router
    .delete('/:id', deleteUser)
    .delete('/photos/:id', deletePhotos)
    .delete('/posts/:id', deletePost)


export default router