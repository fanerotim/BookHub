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
    
    if (newUserDetails.password !== newUserDetails.rePassword) {
        throw new Error('Password mismatch')
    }

    // hash password
    newUserDetails.password = await bcrypt.hash(newUserDetails.password, 10)

    // create the new user
    const newUser = await User.create({...newUserDetails});

    return newUser
}

exports.login = async (loginDetails) => {
    // check if user exists in the db and throw an error if it does not
    const user = await User.findOne({email: loginDetails.email});

    if (!user) {
        throw new Error('Login failed. Please check your login details and try again.')
    }

    // check if provided password matches the one in the db and throw an error if it does not
    const hasPasswordMatched = await bcrypt.compare(loginDetails.password, user.password);
 
    if (!hasPasswordMatched) {
        throw new Error('Incorrect password. Please try again.')
    }

    return user;
}

exports.generateToken = async (userDetails) => {
    
    const payload = {
        _id: userDetails._id,
        email: userDetails.email
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
}

exports.getUser = async (id) => {
    const user = await User
    .findById(id, {password: 0})
    .populate('likedBooks')
    .populate('addedBooks')

    if (!user) {
        throw Error('Could not find this user in our database')
    }

    return user;
}

