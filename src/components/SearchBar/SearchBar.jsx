import React from "react";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");
const SearchBar = ({ submit, onSubmit }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button
          type="submit"
          onClick={(e) => onSubmit(e.target.value)}
          value={submit}
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
