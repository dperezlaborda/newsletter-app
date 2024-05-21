import express from 'express';


export const AuthRoutes = express.Router();

AuthRoutes.post('/login', (req, res) => {
  res.send('Login route');
});