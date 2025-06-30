import { Class, Student, AttendanceRecord } from "../models/index.js";
import { sequelize } from "../db/database.js";
import { Op } from "sequelize";

export const markAttendance = async (req, res) => {
    try {
        const { studentId, classId, date, status } = req.body;
        const record = await AttendanceRecord.create({
            studentId,
            classId,
            date,
            status: status || "Present"
        });
        res.status(201).json({ message: "Attendance marked successfully", record });
    } catch (err) {
        res.status(500).json({ message: "Error marking attendance", error: err.message });
    }
};

export const getAttendanceByDate = async (req, res) => {
    try {
        const { studentId, date } = req.query;
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 1);
        const records = await AttendanceRecord.findAll({
            where: { studentId, date:{
                [Op.gte]: start,
                [Op.lt]: end
            } },
            include: [{ model: Student, attributes: ['name', 'email'] }]
        });
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ message: "Error fetching attendance", error: err.message });
    }
};

export const getAttendanceByClass = async (req, res) => {
    try {
        const classId = req.params.id;

        const records = await AttendanceRecord.findAll({
            where: { classId },
            include: [{ model: Student, attributes: ['name', 'email'] }]
        });
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ message: "Error fetching attendance", error: err.message });
    }
};

export const getAttendanceSummary = async (req, res) => {
    try {
        const studentId = req.params.id;
        const summary = await AttendanceRecord.findAll({
            where: { studentId },
            attributes: [
                'status',
                [sequelize.fn('COUNT', sequelize.col('status')), 'count']
            ],
            group: ['status']
        });
        res.status(200).json(summary);
    } catch (err) {
        res.status(500).json({ message: "Error fetching attendance summary", error: err.message });
    }
};