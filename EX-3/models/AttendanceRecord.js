import { sequelize } from "../db/database.js";
import { DataTypes } from "sequelize";

export const AttendanceRecord = sequelize.define("AttendanceRecord", {
    status: { type: DataTypes.ENUM, values: ["Present", "Absent", "Late"] },
    remark: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    checkInTime: { type: DataTypes.TIME },
    checkOutTime: { type: DataTypes.TIME },
});