import express from "express";
const router = express.Router();
import {
  createAnnouncement,
  getAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteQAnnouncement
} from "../controllers/announcementController.js";

router.route('/').post(createAnnouncement);
router.route('/').get(getAnnouncements);
router.route('/:id').get(getAnnouncementById);
router.route('/:id').patch(updateAnnouncement);
router.route('/:id').delete(deleteQAnnouncement);

export default router;

