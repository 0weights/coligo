import mongoose, { mongo } from "mongoose";

// LOGIC //
// choosing ref over emb in announcement & quiz knowing that it will lower the performance
// but the cost updating in any of the collections will be very high if choosing embedding
// also the size of the documents will be very big specially in announcement cause teachers
// will do alot of them comparing to quizes. 
const announcementSchema = mongoose.Schema({
  text: {
    type     : String,
    required : true
  }, 
  teacher : {
    type     : mongoose.Schema.Types.ObjectId,
    ref      : "User",
    required : true
  },
  course : {
    type     : mongoose.Schema.Types.ObjectId,
    ref      : "Course",
    required : true
  },
  students: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref  : "User"
    }
  ],
}, {
  timestamps : true
})

// sppeding up queries
announcementSchema.index({ teacher: 1, course: 1 });

const Announcement = mongoose.model("Announcement", announcementSchema);

export default Announcement;

