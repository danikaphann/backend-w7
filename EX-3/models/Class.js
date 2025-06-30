import { sequelize } from "../db/database.js";
import { DataTypes } from "sequelize";

export const Class = sequelize.define("Class", {
    className: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    startDate: { type: DataTypes.DATE },
    endDate: { type: DataTypes.DATE },
    credits: { type: DataTypes.INTEGER },
});