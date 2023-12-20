import asyncHandler from "../middleware/asyncHandler.js";
import Announcement from "../models/announcementModel.js";

// @desc Create a announcemente
// @route Post api/announcementes
const createAnnouncement = asyncHandler(async(req, res)=>{
  let announcement = await Announcement.create({
    text    : req.body.text,
    teacher : req.body.teacher,
    course  : req.body.course,
    // todo figuring out how to create a announcement wihtou updating the student table
    // cause we need to make this function do one thing
    students: []
  });
  res.status(200).json({
    message : 'document created'
  });
})


// @desc Fetch All announcementes 
// @route Get api/announcementes 
const getAnnouncements = asyncHandler(async(req, res)=>{
  let announcements = await Announcement.find({});
  res.status(200).json(announcements);
})

// @desc Fetch a announcemente
// @route Get api/announcementes/:id 
const getAnnouncementById = asyncHandler(async(req, res)=>{
  let announcement = await Announcement.findById(req.params.id);
  res.status(200).json(announcement);
})

// @desc Update a announcemente
// @route Patch api/announcementes/:id
const updateAnnouncement = asyncHandler(async(req, res)=>{

  let announcementId = req.params.id;
  let announcementUpdatedData = req.body;

  await Announcement.findByIdAndUpdate(announcementId, announcementUpdatedData)
  res.status(200).json({
    message : 'document updated'
  });
})

// @desc Delete a announcemente
// @route Delete api/announcementes/:id
const deleteQAnnouncement = asyncHandler(async(req, res)=>{
  await Announcement.deleteOne({_id : req.params.id});
  res.status(200).json({
    message : 'document deleted'
  });
})

export {
    createAnnouncement,
    getAnnouncements,
    getAnnouncementById,
    updateAnnouncement,
    deleteQAnnouncement
  }

