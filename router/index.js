const express = require('express');
const { createData, updataData, getAllData,
                     getSingalData, deleteData } = require('../controllers/studentData');
const { userRegistration, userLogin } = require('../controllers/outhData');
const mytoken = require('../middleware/jwt');
const router = express.Router();

//student 
router.get('/',mytoken,getAllData)
router.get('/:id',getSingalData)
router.post('/',mytoken,createData)
router.patch('/:id',mytoken,updataData)
router.delete('/:id',mytoken,deleteData)

//registration
router.post('/registration',userRegistration)
router.post('/login',userLogin)

module.exports=router