const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (newUserDetails) => {

    // check if email is already used
    const emailUsed = await User.findOne({email: newUserDetails.email});

    if (emailUsed) {
        throw new Error('Email is already registered')
    }
    
    // check if passwords match
    if (newUserDetails.password !== newUserDetails.rePassword) {
        throw new Error('Password mismatch')
    }

    // hash password
    newUserDetails.password = await bcrypt.hash(newUserDetails.password, 10)

    // create the new user
    const newUser = await User.create({...newUserDetails});

    return newUser
}

exports.login = async (userDetails) = {

}

exports.generateToken = async (newUser) => {
    
    const payload = {
        _id: newUser._id,
        email: newUser.email
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
}