// const asyncHandler = require('express-async-handler');
// // const User = require('../models/User');
// const generateToken = require('../utils/generateToken');

// // @desc    Auth user & get token
// // @route   POST /api/users/login
// // @access  Public
// const authUser = asyncHandler(async (req, res) => {
//   const { mobile, password } = req.body;

//   const user = await User.findOne({ mobile });

//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       mobile: user.mobile,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(401);
//     throw new Error('Invalid mobile or password');
//   }
// });

// // @desc    Register a new user
// // @route   POST /api/users
// // @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, mobile, password } = req.body;

//   const userExists = await User.findOne({ mobile });

//   if (userExists) {
//     res.status(400);
//     throw new Error('User already exists');
//   }

//   const user = await User.create({
//     name,
//     mobile,
//     password,
//   });

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       mobile: user.mobile,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error('Invalid user data');
//   }
// });

// module.exports = { authUser, registerUser };
