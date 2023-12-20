import express from "express";
const router = express.Router();
import {createQuiz, getQuizes, getQuizeById, updateQuiz, deleteQuiz } from "../controllers/quizController.js";

router.route('/').post(createQuiz);
router.route('/').get(getQuizes);
router.route('/:id').get(getQuizeById);
router.route('/:id').patch(updateQuiz);
router.route('/:id').delete(deleteQuiz);

export default router;

