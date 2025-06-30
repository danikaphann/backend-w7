import {Author, Book } from "../model/user.js"

export const getAllBook = async (req, res) => {
    try{
        const books = await Book.findAll();
        res.status(200).json(books);
    }catch(err){
        console.log("error fetching books:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAllBooksByAuthor = async (req, res) => {
    try {
        const books = await Book.findAll(
            
            {
                include: [{
                    model: Author,
                    attributes: ['name']
                }],
                where: {AuthorId: req.params.authorId}
            }
        );
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const createBookForAuthor = async (req, res) => {
    // const { title, publicationYear, pages, authorId } = req.body;

    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const getAuthorWithBooks = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.authorId, {
            include: Book
        });
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(200).json(author);
    } catch (error) {
        console.error('Error fetching author with books:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}