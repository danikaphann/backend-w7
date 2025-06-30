import {sequelize} from './db/database.js';
import express, { json } from "express";
import cors from "cors";
import {Author, Book} from "./model/user.js";
import { router } from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(json());

app.use('/api', router);

try{
    const result = await sequelize.sync();
    console.log(result);

    const author = await Author.bulkCreate([
    {name : 'Kim Ang', birthYear: 1995},
    {name: 'Ronan', birthYear: 1990},
    {name: 'Hok Tim', birthYear: 2015}
]);
    console.log('Authors created:', author);

}catch (error) {
    console.error('Unable to connect to the database:', error);
}




const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});