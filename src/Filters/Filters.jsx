import { Input, Select } from "antd";
import styles from "./Filters.module.css";

function Filters({ search, setSearch, genre, setGenre }) {
    return (
        <div className={styles.filters}>
            <Input
                placeholder="Search books..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <Select
                value={genre}
                onChange={(value) => setGenre(value)}
                options={[
                    { value: "All", label: "All Genres" },
                    { value: "Fantasy", label: "Fantasy" },
                    { value: "Horror", label: "Horror" },
                    { value: "Fiction", label: "Fiction" },
                    { value: "Thriller", label: "Thriller" },
                    { value: "Finance", label: "Finance" },
                    { value: "Detective", label: "Detective" },
                    { value: "Dystopia", label: "Dystopia" },
                    { value: "Classic", label: "Classic" },
                ]}
            />
        </div>
    );
}

export default Filters;