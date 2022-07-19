import express from 'express';

import { getYogaPosesFromSource, saveYogaPoseToDb, getPoseInfo } from '../controllers/yoga.js';

const router = express.Router();

router.get('/load',getYogaPosesFromSource);
router.post('/save',saveYogaPoseToDb);
router.get('/info', getPoseInfo)
// router.get('/categories',getPostsBySubgenre); //not sure if i want to keep this name
// router.get('/',getPosts);
// router.get('/:id', getPost)
// router.get('/user/:username',getPostsByUsername);

// router.post('/',auth,createPost);
// router.patch('/:id',auth,updatePost);
// router.delete('/:id',auth,deletePost);
// router.patch('/:id/likePost',auth,likePost);


// router.post('/:id/commentPost',auth, commentPost); 
// router.patch('/:id/commentPost', auth, deleteComment);
// router.patch('/:id/commentPost/like', auth, likeComment);
// router.patch('/:id/commentPost/reply', auth, replyComment);
// router.patch('/:id/commentPost/likeReply', auth, likeReply);
// router.patch('/:id/commentPost/deleteReply',auth, deleteReply);

export default router;