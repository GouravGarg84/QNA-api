const express = require('express') ;
const router = express.Router() ;

const bodyparser = require('body-parser');



router.post('/',(req,res)=>
{
    
    let username = req.query.username ;
    let password = req.query.password ;
    let id = req.query.id ;

    let sql = 'INSERT INTO signupdata (username,password,id) VALUE(?,?,?)' ;
    mysqlConnection.query(sql, [username,password,id], (err, rows, fields) => {
                if (!err)
                 
                        
                 res.send('added data ');
                    
                else
                    console.log(err);
})
})

module.exports=router ;