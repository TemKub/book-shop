import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.css";

function BookList({ books, onAdd }) {
    return (
        <div className={styles.bookList}>
            {books.map((book) => (
                <BookCard key={book.id} book={book} onAdd={() => onAdd(book)}/>
            ))}
        </div>
    );
}

export default BookList;