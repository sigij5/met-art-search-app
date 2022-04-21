import React from "react";
import { useState, useContext } from "react";
import MetContext from "../../context/met/MetContext";
import AlertContext from "../../context/alert/AlertContext";

function ArtSearch() {
  const [text, setText] = useState("");

  const { works, searchArt, clearWorks } = useContext(MetContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter a search query", "error");
    } else {
      //search works
      searchArt(text);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {works.length > 0 && (
        <div>
          <button onClick={clearWorks} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default ArtSearch;
