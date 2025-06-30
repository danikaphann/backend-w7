import { sequelize } from '../db/database.js';
import { DataTypes } from 'sequelize';

export const Author = sequelize.define('Author',
    {
        name: DataTypes.STRING,
        birthYear: DataTypes.INTEGER
    }
)
export const Book = sequelize.define('Book', 
    {
        title: DataTypes.STRING,
        publicationYear: DataTypes.INTEGER,
        pages: DataTypes.INTEGER
    }
)

Author.hasMany(Book, {foreignKey: 'AuthorId'});
Book.belongsTo(Author, {foreignKey: 'AuthorId'});