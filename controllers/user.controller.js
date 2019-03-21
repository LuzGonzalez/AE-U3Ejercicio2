const status = require('http-status');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

let _user;

const getAll = (req, res) => {
    _user.find({})
        .then(users => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: users
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error!!!",
                detail: error
            });
        });
}

const create = (req, res) => {
    const user = req.body;
    console.log(req);
    _user.create(user)
        .then(data => {
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                msg: "Saved!!!",
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                msg: "No se pudo insertar!!!",
                detail: error
            });
        });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    User.remove({ _id: id })
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Se eliminó!!!",
                detail: data
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "No se eliminó!!!",
                detail: error
            });
        });
}

//consultar por id
const getById = (req, res) => {
    const id = req.params.id;
    User.findOne({ _id: id })
        .then(user => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: user
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Éxito",
                detail: error
            });
        });
}

//Enviar email

const sendMail = (req,res)=>{
    const id = req.params.id;
    _user.findOne({ _id: id })
      .then(users=>{
       try{
           const msg = {
               to:users.email,
               from: 'luzalgonzalezro@ittepic.edu.mx',
               subject:'Jornada Académica 2019' ,
               dynamic_template_data:{
                   name: users.name,
                   qr: users._id,
               },
               template_id:'d-a6ffa9917bd24941b5d4b0adb25e7d45'  
             };
             sgMail.send(msg);
             res.status(200);
          res.json({
              code:200,
              msg:"Consulta exitosa",
              detail:users
          });
          }
          catch(ex){
           
       }
          
      })
      .catch(error=>{
          res.status(400);
          res.json({
              code:400,
              msg:"Error",
              detail:error
          });
      });
}


module.exports = (User) => {
    _user = User;
    return ({
        getAll, create, deleteUser, getById,sendMail
    });
}