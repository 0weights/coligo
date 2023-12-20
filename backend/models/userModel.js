import mongoose, { mongo } from 'mongoose';

const userSchema = mongoose.Schema({
  role: {
    type     : String, 
    required : true
  }, 
  name : {
    type     : String, 
    required : true
  },
  userProfilePicture : {type : String},
  announcements: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref  : "Announcement",
    }
  ],
  courses : [
    {
      type : mongoose.Schema.Types.ObjectId, 
      ref  : "Course",
    }
  ], 
  quizes: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref  : "Quiz",
    }
  ],
},{
  time : true
})

const User = mongoose.model("User", userSchema);

export default User;

