import express, {json} from 'express';
import cors from 'cors';
import { sequelize } from './db/database.js';
import { router } from './routes/Attendanceroutes.js';

const app = express();
app.use(cors());
app.use(json());
app.use('/api', router);


try {
    // Sync the database
    await sequelize.sync({ force: true });
    console.log("Database synced successfully");
} catch (error) {
    console.error("Error syncing database:", error);
}


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});