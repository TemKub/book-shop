import { Button } from "antd";
import styles from "./Cart.module.css";

function Cart({ cart, onRemove }) {
    const total = cart.reduce((sum, book) => sum + book.price, 0);

    return (
        <div className={styles.cart}>
            <h2>Shopping Cart 🛒</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((book) => (
                        <div key={book.id} className={styles.cartItem}>
                            <span>{book.title}</span>
                            <span>{book.price} som</span>
                            <Button danger onClick={() => onRemove(book.id)}>
                                Remove
                            </Button>
                        </div>
                    ))}
                    <h3>Total: {total} som</h3>
                </>
            )}
        </div>
    );
}

export default Cart;