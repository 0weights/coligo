import mongoose from 'mongoose';
import connectToDb from './config/dp.js';
import User from './models/userModel.js';   
import Course from './models/courseModel.js';
import Quiz from './models/quizModel.js';
import Announcement from './models/announcementModel.js';

//  I COULD DO IT BETTER WITH FACKER BUT DUE TO LACK OF TIME AND PRIORITIES
//  IT HAS TO BE DONE IN THIS NAIVE WAY

const users = [
  {
    role: "teacher", 
    name : "sayed",
    userProfilePicture : "",
    announcements: [],
    courses : [], 
    quizes: [],
  },
  {
    role: "student", 
    name : "mohamed",
    userProfilePicture : "",
    announcements: [],
    courses : [], 
    quizes: [],
  },
  {
    role: "student", 
    name : "ahmed",
    userProfilePicture : "",
    announcements: [],
    courses : [], 
    quizes: [],
  }
]

const seedDb = async () => {
  try{
    await connectToDb();
    await User.deleteMany();
    await Course.deleteMany();
    await Quiz.deleteMany();
    await Announcement.deleteMany();

    let createdUsers = await User.insertMany(users);

    let createdCourse = await Course.create( {
      teacher : createdUsers[0],
      students: [createdUsers[1], createdUsers[2]],
      title: "English", 
      rating : 4,
      price : 200
    });


    let createdQuiz = await Quiz.create({
      teacher : createdUsers[0],
      course : createdCourse,
      students: [createdUsers[1], createdUsers[2]],
      tittle : "English Quiz #1",
      topic: "Lesson 1", 
      dueto : new Date()
    });

    let createdAnnouncemet = await Announcement.create({
      text : "hello everyone hope you good luck with your quiz",
      teacher : createdUsers[0],
      course  : createdCourse, 
      students: [createdUsers[1], createdUsers[2]],
    });

    for(let i = 0 ; i < 3 ; i++){      
      await User.updateOne({ _id: createdUsers[i] }, { courses: [createdCourse] });
      await User.updateOne({ _id: createdUsers[i] }, { announcements: [createdAnnouncemet] });
      await User.updateOne({ _id: createdUsers[i] }, { quizes: [createdQuiz] });

    }

    console.log("seeding completed");
  }
  catch(error){
    console.log(error.message);
  }
}

export default seedDb;