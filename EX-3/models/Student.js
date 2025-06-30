import { sequelize } from "../db/database.js";
import { DataTypes } from "sequelize";


export const Student = sequelize.define("Student", {
    name: {type: DataTypes.STRING},
    age: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, validate: {isEmail:true}},
    major: {type:DataTypes.STRING},
    gender: {type:DataTypes.ENUM, values: ["Male", "Female", "Other"]},
})