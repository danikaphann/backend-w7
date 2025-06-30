import {Class} from "./Class.js";
import {Student} from "./Student.js";
import {AttendanceRecord} from "./AttendanceRecord.js";


// Class-Student relationship
Class.hasMany(Student);
Student.belongsTo(Class);

// Student-AttendanceRecord relationship
Student.hasMany(AttendanceRecord, { foreignKey: 'studentId' });
AttendanceRecord.belongsTo(Student, { foreignKey: 'studentId' });

// Class-AttendanceRecord relationship (optional, but common)
Class.hasMany(AttendanceRecord, { foreignKey: 'classId' });
AttendanceRecord.belongsTo(Class, { foreignKey: 'classId' });

export {Class, Student, AttendanceRecord};