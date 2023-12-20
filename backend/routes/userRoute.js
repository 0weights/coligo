import express from "express";
import {loginUser, logoutUser, isAuthenticated,  getAnnouncementsByUserId, getQuizsByUserId } from "../controllers/userController.js";

const router = express.Router();

router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/authentication').get(isAuthenticated);
router.route('/announcements/:userId').get(getAnnouncementsByUserId);
router.route('/quizes/:userId').get(getQuizsByUserId);

export default router;

