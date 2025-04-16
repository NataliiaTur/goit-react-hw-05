import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (value.trim() === "") {
      alert("Please enter search term!");
    }
    onSearch(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        name="query"
        placeholder="Enter the name of the movie..."
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
