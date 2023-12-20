import mongoose, { mongo } from "mongoose";

const courseSchema = mongoose.Schema({
  // need to recorrect title -> tittle
  title: {
    type     : String,
    required : true
  }, 
  rating : Number,
  price  : Number,
  teacher : {
    type     : mongoose.Schema.Types.ObjectId,
    ref      : "Teacher",
    required : true
  },
  students: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref  : "User"
    }
  ],
  quizes : [{
    type : mongoose.Schema.Types.ObjectId,
    ref  : "Quiz"
  }]
}, {
  timestamps : true
})

const Course = mongoose.model("Course", courseSchema);

export default Course;