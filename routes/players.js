const express = require('express');
const conn = require('../config/db');
const router = express.Router();

// all user
router.get('/players', (req, res, next)=>{
    let sql = "select * from players";
    conn.query(sql, function(err, result){
        if(err) throw err;
        res.status(200).json(result);
    });
});

// add user
router.post('/player/add', (req, res, next)=>{
    const values = [
        // "full name",
        // "Full club"
        req.body.name,
        req.body.club
    ];
    let sql = "insert into players (name, club) values(?)";
    conn.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Inserted..");
        res.redirect('/api/players');
    })
});

// update user
router.put('/player/update/:id', (req, res, next)=>{
    const {name, club}= req.body;
    
    // N:B: Most sensitive update query in quation(` vs ' vs ")
    let sql = `update players set name='${name}', club='${club}' where id=?`;
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log("Updated..");
        res.redirect('/api/players');
    })
});

// delete user
router.delete('/player/delete/:id', (req, res, next)=>{
    let sql = "delete from players where id=?";
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log("deleted..");
        res.redirect('/api/players');
    })
});

/*
Demo
router.post('/player/add', (req, res, next)=>{
    let sql = "insert into players (name, club) values('New name', 'New club')";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("Inserted..");
    })
    res.status(200).json({"Message": "Success"});
});
*/

module.exports = router;