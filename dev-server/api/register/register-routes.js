import express from 'express';
const router = express.Router();

router.post('/task',(req, res)=>{
    res.send('post.register - register')
})

export default router;
