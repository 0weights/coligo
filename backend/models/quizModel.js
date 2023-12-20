import mongoose, { mongo } from "mongoose";

const quizSchema = mongoose.Schema({
  tittle: {
    type     : String,
    required : true
  }, 
  topic: {
    type     : String,
    required : true
  }, 
  dueto : {
    type     : Date, 
    required : true
  },
  price  : Number,
  teacher : {
    type     : mongoose.Schema.Types.ObjectId,
    ref      : "Teacher",
    required : true
  },
  course : {
    type : mongoose.Schema.Types.ObjectId,
    ref  : "Course"
  },
  students: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref  : "User"
    }
  ]
}, {
  timestamps : true
})

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;

