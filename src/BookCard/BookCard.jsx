import { Card, Button } from "antd";
import styles from "./BookCard.module.css";

function BookCard({ book, onAdd }) {
    return (
        <Card className={styles.card} title={book.title}>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Price: {book.price} som</p>

            <Button type="primary" onClick={onAdd}>
                Add to Cart
            </Button>
        </Card>
    );
}

export default BookCard;