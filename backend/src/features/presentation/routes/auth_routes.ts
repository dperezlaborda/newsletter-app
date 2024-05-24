import express from 'express';


export const AuthRoutes = express.Router();

//todo: implement authentication
AuthRoutes.post('/login', (req, res) => {
  res.send('Login route');
});