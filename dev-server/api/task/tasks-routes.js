import express from "express";
const router = express.Router();
router.post('/task',(req, res)=>{
    res.send("post.task -- creating a task")
});
router.get('/task',(req,res)=>{    
    res.send('get.task -- get all task')
});
router.get('/task/:id',(req,res)=>{
    res.send('get.task -- get task by id')
})
router.put('/task',(red,res)=>{
    res.send('put.task -- update all tasks')
});
router.delete('/task',(req,res)=>{
    res.send('delete.task -- Delete all task')
});

export default router;
//module.exports = router
