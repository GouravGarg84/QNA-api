const express = require('express') ;

const router = express.Router() ;



router.post('/',(req,res)=>
{
  let username= req.query.username ;
  let password= req.query.password ;
    console.log(username) ;
    mysqlConnection.query("select * from signupdata where Username=? and Password=?",[username,password],function(error,results,fields)
    {
        if(results.length>0)
        {
            
           console.log(" you are signed in")
        }
        else{
            console.log(err)
        }
       
    })
})

   module.exports=router ;