const express = require('express');
const router = express.Router();
var db = require('../../db')

/* GET api listing. */
router.get('/login', (req, res) => {
  res.send('api works');
});

router.get('/get',(req,res) => {
    db.query("SELECT * FROM login WHERE id=1",function(err,rows,fields){
        if(rows && rows.length)
            return res.status(200).send(rows);
        else
            return res.status(200).send({message:'User Not Found'});
    })
})

module.exports = router;