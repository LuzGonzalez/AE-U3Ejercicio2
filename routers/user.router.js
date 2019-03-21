const userRouter = require('express').Router();

module.exports = (wagner) => {

    const userCtrl = wagner.invoke((User)=>
        require('../controllers/user.controller')(User));    

    userRouter.post("/", (req, res) => {
        userCtrl.create(req, res);
    });

    userRouter.get("/", (req, res) => {
        userCtrl.getAll(req,res);
    });

    userRouter.get("/:id", (req, res) => {
        userCtrl.getById(req, res);
    });

    userRouter.delete("/:id", (req, res) => {
        userCtrl.deleteUser(req, res);
    });

    userRouter.get("/enviarMail/:id",(req,res)=>{
        userCtrl.sendMail(req,res);
        
    });



    return userRouter;
}