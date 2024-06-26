import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../config/api";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${apiUrl}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="flex" role="search" onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 p-2 rounded-l-md"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="bg-primary text-white p-2 rounded-r-md"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
