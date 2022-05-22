const express = require('express');

const app = express();
const cors = require('cors');
const router = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use('/', router);

/*

app.get('/manufactorers', (req, res) => {
    pool.query('SELECT * FROM manufactorer', (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.get('/suppliers', (req, res) => {
    pool.query('SELECT * FROM supplier', (error, result) => {
        if (error) throw error;
        res.send(result.rows);
    });
});

app.get('/orders', (req, res) => {
    pool.query('SELECT * FROM orders', (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.get('/customers', (req, res) => {
    pool.query('SELECT * FROM customer', (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.post('/registration', async (req, res) => {
    const {surname, name, login, pass} = req.body;
    try {
        const user = await pool.query('SELECT * FROM customer WHERE culogin = $1', [login]);
        if(user.rows.length !== 0){
            res.status(400).json({message:'This user is exist!'}); 
        }
        await pool.query('INSERT INTO customer (cusurname, cuname, culogin, cupass) values ($1, $2, $3, $4)', [surname, name, login, pass]); 
        res.status(201).json({message:'User added'}); 
        
    } catch (error) {
        res.status(500).json({message:'Error'}); 
    }
});

app.post('/logIn', async (req, res) => {
    const {login, pass} = req.body;
    try {
        const user = await pool.query('SELECT * FROM customer WHERE culogin = $1', [login]);
        if(user.rows.length === 0){
            res.status(400).json({message:"This user doesn't exist!"}); 
        }
        if(user.rows[0].cupass === pass){
            res.status(200).json({message:'code is done'}); 
        }else {
            res.status(400).json({message:'Not right password'});
        }   
    } catch (error) {
        res.status(500).json({message:'Error'}); 
    }
});

app.delete('/customers', async (req, res) => {
    const {customerId} = req.body;
    try {
        const user = await pool.query('DELETE FROM customer WHERE cuid = $1', [customerId]);
        if(user.rows.length === 0){
            res.status(200).json({message:'user has been deleted'}); 
        }else {
            res.status(400).json({message:'Something wrong!'});
        }  
    } catch (error) {
        res.status(500).json({message:'Error'}); 
    }
});

app.put('/customers', async (req, res) => {
    const {customerId, surname, name, login, pass} = req.body;
    try {
        const user = await pool.query('UPDATE customer SET cusurname=$2 , cuname=$3, culogin=$4, cupass=$5  WHERE cuid=$1;', [customerId, surname, name, login, pass]);
        if(user.rows.length === 0){
            res.status(200).json({message:'user has been updated'}); 
        }else {
            res.status(400).json({message:'Something wrong!'});
        } 
    } catch (error) {
        res.status(500).json({message:'Error'}); 
    }
});

app.delete('/suppliers', async (req, res) => {
    const {supId} = req.body;
    try {
        const user = await pool.query('DELETE FROM supplier WHERE sid = $1', [supId]);
        if(user.rows.length === 0){
            res.status(200).json({message:'user has been deleted'}); 
        }else {
            res.status(400).json({message:'Something wrong!'});
        }  
    } catch (error) {
        res.status(500).json({message:'Error'}); 
    }
});

app.put('/suppliers', async (req, res) => {
    const {supId, name, phone, mail} = req.body;
    try {
        const user = await pool.query('UPDATE supplier SET sname=$2 , sphone=$3, semail=$4  WHERE sid=$1;', [supId, name, phone, mail]);
        if(user.rows.length === 0){
            res.status(200).json({message:'Supplier has been updated'}); 
        }else {
            res.status(400).json({message:'Something wrong!'});
        } 
    } catch (error) {
        res.status(500).json({message:'Error'}); 
    }
});

app.post('/suppliers', async (req, res) => {
    const {name, phone, mail, category, manuf} = req.body;
    try {
        await pool.query('INSERT INTO supplier (sname, sphone, semail, scategoryId, smanufactorerId) values ($1, $2, $3, $4, $5)', [name, phone, mail, category, manuf]); 
        res.status(201).json({message:'Supplier added'}); 
    } catch (error) {
        res.status(500).json({message:'Error'}); 
    }
}); */

module.exports = app;
