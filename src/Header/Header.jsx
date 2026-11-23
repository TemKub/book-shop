import { Badge } from "antd";
import styles from "./Header.module.css";

function Header({ cart }) {
    return (
        <header className={styles.header}>
            <h1>BOOK SHOP 📚</h1>

            <Badge count={cart.length} showZero>
                <div className={styles.cartIcon}>🛒</div>
            </Badge>
        </header>
    );
}

export default Header;