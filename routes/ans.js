const express = require('express') ;

const bodyparser = require('body-parser');



const router = express.Router() ;


 router.post('/:title',(req,res)=>{

    let ans = req.query.ans
    let title = req.params.title ;
    
    
    let sql='INSERT INTO ans (title,ans) VALUES (?,?)'
    
    mysqlConnection.query(sql,[title,ans],(err,rows)=>{
        if(err)
         console.log(err)
         else
         res.send('Added your ans')
    })
    
    }) 
  router.get('/:title',(req,res)=>{

    
    let posttitle = req.params.posttitle ;
    
    
    let sql='SELECT * FROM ans WHERE title=? '
    
    mysqlConnection.query(sql,[title],(err,rows)=>{
        if(err)
         console.log(err)
         else
         
         res.send(rows)
    })
    
    }) 

    module.exports=router ;