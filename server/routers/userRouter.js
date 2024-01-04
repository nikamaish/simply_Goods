const express = require('express');
const router = express.Router();
const session = require('express-session');
const cookieSession = require('cookie-session');
const Customer = require('../models/userModel');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
require('dotenv').config();
const jwt = require('jsonwebtoken');


const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex');
  };


  
// what is generateRandomString is that it is a function that generates a random string of a given length. So we are going to use this function to generate a random string that we are going to use as the session key. So what is a session key is that it is a string that is used to sign the session ID cookie. So what is a session ID cookie is that it is a cookie that is used to store the session ID. So what is a session ID is that it is a unique identifier that is used to identify the session. So what is a session is that it is a place where we can store data that we want to persist across requests. So what is a request is that it is a message that is sent from the client to the server.

  
const sessionKey = generateRandomString(32); // You can adjust the length based on your security requirements
// here we are generating a random string of length 32 and we are storing it in a variable called sessionKey
// but sessionKey is used where? bcz i dont see it being used anywhere else in the code
// in secret key, we are storing the session key that we generated in the previous step

// console.log(sessionKey);



router.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        // secure: true,
        // when we hoste the app on heroku, we need to set secure to true
        httpOnly: true,
        // what is httpOnly is that it is a security feature that prevents client side JavaScript from accessing the cookie. So if you are using React or Angular or Vue or any other front end framework, you will not be able to access the cookie from the front end. So this is a security feature that prevents cross-site scripting attacks.

        sameSite: 'none',
        // sameSite is a security feature that prevents the browser from sending the cookie along with cross-site requests. So if you are on a website and that website is trying to make a request to your server, the browser will not send the cookie along with that request. So this is a security feature that prevents cross-site request forgery attacks.

        // but then how server store user credentials if we set sameSite to none? 
        // it is done by using a different cookie called csrf token. So what we do is that we set the sameSite to none and then we set another cookie called csrf token and we set the sameSite to strict for that cookie. So what happens is that the browser will send the csrf token cookie along with cross-site requests but it will not send the session cookie along with cross-site requests. So this is how we can store user credentials in the session and still prevent cross-site request forgery attacks.

        maxAge: 24 * 60 * 60 * 1000, // 1 day
        // what is maxAge is that it is the time in milliseconds that the cookie will expire after
      },
    })
  );
  

  router.post('/register', async (req, res) => {
    try {
      const { fullname, email, password, passwordConfirm } = req.body;
  
      if (!fullname || !email || !password || !passwordConfirm) {
        return res.status(400).json({ errorMessage: 'Please enter all required fields.' });
      }

      if (password.length < 6)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter a password of at least 6 characters.' });

    if (password !== passwordConfirm) {
      return res
        .status(400)
        .json({ errorMessage: 'Please enter the same password twice.' });
    }

  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newCustomer = new Customer({
        fullname,
        email,
        passwordHash
      });
  
      const savedCustomer = await newCustomer.save();
  
    //   req.session.user = { _id: savedCustomer._id, fullname: savedCustomer.fullname, email: savedCustomer.email };
  
    const token = jwt.sign({
      user:savedCustomer._id
  },process.env.JWT_SECRET);

  console.log(token);  
  res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV === 'production',
    sameSite:"none"
});

  
  req.session.user = savedCustomer._id;
// what we did over here is that we are storing the user id in the session and how it is different than above is that we are not storing the whole user object in the session, we are just storing the user id in the session and we are going to use that user id to fetch the user object from the database whenever we need it. So this is a more secure way of storing the user in the session.

      res.status(201).json({message: 'Customer registered successfully',savedCustomer});
    } 
    
    
    catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
  






  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ errorMessage: 'Please enter both email and password.' });
      }
  
      const existingCustomer = await Customer.findOne({ email });
  
      if (!existingCustomer){
        return res.status(401).json({errorMessage:"Wrong email or password"});
      }

      const passwordCorrect = await bcrypt.compare(password, existingCustomer.passwordHash);

      if(!passwordCorrect){
        return res.status(401).json({errorMessage:"Wrong email or password"})
      }

      req.session.user = { _id: existingCustomer._id, fullname: existingCustomer.fullname, email: existingCustomer.email };
    //   why we need to do it different bcz in register we only save the user id in the session but in login we are saving the whole user object in the session. So this is how we can store the user in the session.
    // because we are going to use the user object in the session to display the user's name and email in the navbar. So this is why we need to store the whole user object in the session.
    // it means when i login then then my name will be there in navbar and when i logout then my name will not be there in navbar is it right? yes

    const token = jwt.sign({
      user:existingCustomer._id
  },process.env.JWT_SECRET);

  res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV === 'production',
    sameSite:"none"
});
  
res.status(200).json({ message: "Customer logged in successfully", user: { id: existingCustomer._id, email: existingCustomer.email } });
    }
    
    
    catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
  





  router.get('/logout', (req, res) => {

    try {
      req.session = null; // Clear the session data

      res.cookie('token', '', {
          httpOnly: true,
          expires: new Date(0),
          domain: 'localhost', // Adjust as needed, especially if using subdomains
      }).send();

      res.status(200).json({ message: 'Logout successful' });
      console.log('User session cleared');
  }
  
  
  catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
  

module.exports = router; 