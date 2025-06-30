import {Router} from 'express';
import { markAttendance, getAttendanceByDate, getAttendanceByClass, getAttendanceSummary } from '../controllers/controller.js';

export const router = Router();

router.post('/attendance', markAttendance);
router.get('/attendance', getAttendanceByDate);
router.get('/class/:id/attendance', getAttendanceByClass);
router.get('/students/:id/attendance', getAttendanceSummary);