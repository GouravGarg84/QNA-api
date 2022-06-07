const express = require('express') ;

const router = express.Router() ;
const bodyparser = require('body-parser');



router.post('/', (req, res) => {  
   
      if(err) {
        res.sendStatus(403);
        res.send(err) ;
      } else {
        let title = req.query.title ;
        let ques = req.query.ques ;
        
        
      let sql = 'INSERT INTO ques (title,ques) VALUE(?,?)' ;
      mysqlConnection.query(sql, [title,post], (err, rows, fields) => {
                  if (!err)
                   
                          
                   res.send('Ques Posted ');
                      
                  else
                      console.log(err);
  })
  
        
  
        
      }
    });
 

  
  module.exports=router ;
