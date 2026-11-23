import { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./App.css";
import BookList from "./BookList/BookList";
import Cart from "./Cart/Cart";
import Filters from "./Filters/Filters";
import { Spin } from "antd";

const books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 1200,
    },
    {
        id: 2,
        title: "The Shining",
        author: "Stephen King",
        genre: "Horror",
        price: 950,
    },
    {
        id: 3,
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        genre: "Fiction",
        price: 1100,
    },
    {
        id: 4,
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genre: "Fantasy",
        price: 1500,
    },
    {
        id: 5,
        title: "Central Park",
        author: "Guillaume Musso",
        genre: "Thriller",
        price: 850,
    },
    {
        id: 6,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Finance",
        price: 1000,
    },
    {
        id: 7,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        price: 950,
    },
    {
        id: 8,
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Detective",
        price: 800,
    },
    {
        id: 9,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopia",
        price: 700,
    },
    {
        id: 10,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        genre: "Fiction",
        price: 650,
    },
    {
        id: 11,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: "Classic",
        price: 900,
    },
    {
        id: 12,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Thriller",
        price: 1050,
    },
];

function App() {
  const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesGenre = genre === "All" || book.genre === genre;
        return matchesSearch && matchesGenre;
    });

  function addToCart(book) {
        setCart([...cart, book]);
    }
    function removeFromCart(id) {
        setCart(cart.filter((book) => book.id !== id));
    }
    return (
        <div>
            <Header cart={cart} />

            <p>Find your next favorite book</p>

            {loading ? (
                <div className="loading">
                    <Spin size="large" />
                    <p>Loading books...</p>
                </div>
            ) : (
                <>
                    <Filters
                        search={search}
                        setSearch={setSearch}
                        genre={genre}
                        setGenre={setGenre}
                    />

                    <BookList
                        books={filteredBooks}
                        onAdd={addToCart}
                    />

                    <Cart
                        cart={cart}
                        onRemove={removeFromCart}
                    />
                </>
            )}
        </div>
    );
}

export default App;