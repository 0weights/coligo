import Quiz from "../models/quizModel.js"
import asyncHandler from "../middleware/asyncHandler.js";

// @desc Create a Quize
// @route Post api/quizes
const createQuiz = asyncHandler(async(req, res)=>{

  // let students = await User.find({course: courseId});
  let quize = await Quiz.create({
    tittle  : req.body.tittle,
    topic   : req.body.topic, 
    dueto   : req.body.dueto,
    teacher : req.body.teacher,
    course  : req.body.course,
    // will be updated if the student toke the quiz 
    students: []
  });
  
  res.status(200).json({
    message : 'document created'
  });
})


// @desc Fetch All Quizes 
// @route Get api/quizes 
const getQuizes = asyncHandler(async(req, res)=>{
  let quizes = await Quiz.find({});
  res.status(200).json(quizes);
})

// @desc Fetch a Quize
// @route Get api/quizes/:id 
const getQuizeById = asyncHandler(async(req, res)=>{
  let quize = await Quiz.findById(req.params.id);
  res.status(200).json(quize);
})

// @desc Update a Quize
// @route Patch api/quizes/:id
const updateQuiz = asyncHandler(async(req, res)=>{

  let quizId = req.params.id;
  let quizUpdatedData = req.body;

  await Quiz.findByIdAndUpdate(quizId, quizUpdatedData)
  res.status(200).json({
    message : 'document updated'
  });
})

// @desc delete a Quize
// @route Delete api/quizes/:id
const deleteQuiz = asyncHandler(async(req, res)=>{
  await Quiz.deleteOne({_id : req.params.id});
  res.status(200).json({
    message : 'document deleted'
  });
})

export {createQuiz, getQuizes, getQuizeById, updateQuiz, deleteQuiz}

