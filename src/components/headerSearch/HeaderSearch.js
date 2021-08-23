import { React, useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";

import {
  updateFilteredResults,
  criteriaChanged,
} from "../../store/actions/onlySingleActions";

export default function HeaderSearch() {
  const actionDispatcher = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      console.log("searchTerm==", searchTerm);
      actionDispatcher(criteriaChanged("SEARCH", searchTerm));
      actionDispatcher(updateFilteredResults());
    }
  }, [searchTerm]);

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
        Filtered Apparels
      </div>

      <input
        type="text"
        className="form-control form-control-dark w-100"
        placeholder="Search"
        id="searchTermField"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
}
