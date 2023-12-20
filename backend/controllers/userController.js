import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";


// @desc  : login
// @route : post /api/users/login
const loginUser = asyncHandler(async(req, res)=>{
  let user = await User.findOne({role : "student"}).select('name');
  req.session.user = { id: user._id, name: user.name };
  res.status(200).json({ success: true , user : user});
})

// @desc  : logout
// @route : post /api/users/logout
const logoutUser = asyncHandler(async(req, res)=>{
  req.session.destroy();
  res.status(200).json({ success: true});
})

// @desc  : checking if user is authenticated or not
// @route : get /api/users/authentication
const isAuthenticated = asyncHandler(async(req, res)=>{
  if (req.session.user) {
    res.json({ authenticated: true, user: req.session.user });
  } else {
    res.json({ authenticated: false, user: null });
  }
})


// @desc  : Getting annoucements for a spacific users from multiple collections
// @route : GET /api/user/annoucements/:userId
const getAnnouncementsByUserId = asyncHandler(async(req, res)=>{
  let userId = req.params.userId;
  console.log(userId);

  // unfortunately the query is slow 
  // even when applying indexing on teacher & course, limit and lean
  // toke ~700 ms
  let userAnnouncements = await User.findById(userId)
                                    .select('announcements')
                                    .populate({
                                      path : 'announcements',
                                      select : 'text teacher course',
                                      populate :[
                                          {path : "teacher" ,select : "name"},
                                          {path : "course",select : "title"}
                                        ]
                                    }).limit(5);

  res.status(200).json(userAnnouncements);
})

// @desc  : Getting quizes for a spacific users from multiple collections
// @route : GET /api/user/quizes/:userId
const getQuizsByUserId = asyncHandler(async(req, res)=>{
  let userId = req.params.userId;
  let userQuizes = await User.findById(userId)
                                    .select('quizes')
                                    .populate({
                                      path : 'quizes',
                                      select : 'course tittle topic dueto',
                                      populate : {
                                        path : 'course',
                                        select: 'title'
                                      }

                                    }).limit(5);

  res.status(200).json(userQuizes);
})

export {getAnnouncementsByUserId, getQuizsByUserId, loginUser, logoutUser, isAuthenticated}