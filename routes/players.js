const express = require('express');
const conn = require('../config/db');
const router = express.Router();

// all user
router.get('/players', (req, res, next)=>{
    let sql = "select * from players";
    conn.query(sql, function(err, result){
        if(err) throw err;
        res.render('index', {players: result});
    });
});

// add user
router.get('/player/add', (req, res, next)=>{
    res.render('add.ejs');
});
router.post('/player/add', (req, res, next)=>{
    const values = [
        req.body.name,
        req.body.club
    ];
    let sql = "insert into players (name, club) values(?)";
    conn.query(sql, [values], function(err, result){
        if(err) throw err;
        res.redirect('/api/players');
    })
});

// find user
router.get('/player/update/:id', (req, res, next)=>{
    const {name, club}= req.body;
    let sql = `select id, name, club from players where id=?`;
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        res.render('edit', {player: result[0]});
    })
});

// update user
router.put('/player/update/:id', (req, res, next)=>{
    const {name, club}= req.body;
    let sql = `update players set name='${name}', club='${club}' where id=?`;
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        res.redirect('/api/players');
    })
});

// delete user <from></from>
router.delete('/player/delete/:id', (req, res, next)=>{
    let sql = "delete from players where id=?";
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        res.redirect('/api/players');
    })
});

// delete user from <a href=""></a>
router.get('/player/delete2/:id', (req, res, next)=>{
    let sql = "delete from players where id=?";
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        res.redirect('/api/players');
    })
});

module.exports = router;