import { Router } from "express";

const router = Router();

router.get('/test',(req,res) => {
    res.send('hello world');
});

router.post('/sendData',(req,res) => {
    const user = req.body
    console.log(user.name)
    console.log(user.usia);
})
export default router;