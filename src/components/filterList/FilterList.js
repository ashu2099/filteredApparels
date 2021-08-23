import { React, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  criteriaChanged,
  updateFilteredResults,
} from "../../store/actions/onlySingleActions";

import "./FilterList.css";

export default function FilterList() {
  const actionDispatcher = useDispatch(null);
  const productGenders = useSelector(
    (state) => state.onlySingleReducer.productGenders
  );

  const productBrands = useSelector(
    (state) => state.onlySingleReducer.productBrands
  );

  const productCategories = useSelector(
    (state) => state.onlySingleReducer.productCategories
  );

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedBrands, setSelectedBrands] = useState({});

  useEffect(() => {
    if (selectedCategories && Object.keys(selectedCategories).length > 0) {
      console.log(selectedCategories);
      actionDispatcher(criteriaChanged("CATEGORY", selectedCategories));
      actionDispatcher(updateFilteredResults());
    }
  }, [selectedCategories]);

  useEffect(() => {
    if (selectedBrands && Object.keys(selectedBrands).length > 0) {
      console.log(selectedBrands);
      actionDispatcher(criteriaChanged("BRAND", selectedBrands));
      actionDispatcher(updateFilteredResults());
    }
  }, [selectedBrands]);

  useEffect(() => {
    if (!!selectedGender) {
      console.log(selectedGender);
      actionDispatcher(criteriaChanged("GENDER", selectedGender));
      actionDispatcher(updateFilteredResults());
    }
  }, [selectedGender]);

  return (
    <div className="px-3">
      <h1 className="fw-light mt-4 mb-1 text-muted text-uppercase">Filters:</h1>

      <h6 className="mt-4 mb-1 text-muted text-uppercase">Gender:</h6>

      {productGenders?.map((x) => (
        <div className="form-check" key={x}>
          <input
            className="form-check-input"
            type="radio"
            id={"radio" + x}
            name="genderRadio"
            value={x}
            onChange={(e) => {
              setSelectedGender(x);
            }}
            checked={x === selectedGender}
          />
          <label className="form-check-label" htmlFor={"radio" + x}>
            {x}
          </label>
        </div>
      ))}

      <h6 className="mt-4 mb-1 text-muted text-uppercase">Category:</h6>

      {productCategories.map((x) => (
        <div className="form-check" key={x}>
          <input
            className="form-check-input"
            type="checkbox"
            id={"check" + x}
            name="categoryCheck"
            value={selectedCategories[x]}
            onChange={(e) => {
              setSelectedCategories((prev) => {
                let newObj = { ...prev };
                newObj[x] = !newObj[x];
                return newObj;
              });
            }}
          />
          <label className="form-check-label" htmlFor={"check" + x}>
            {x}
          </label>
        </div>
      ))}

      <h6 className="mt-4 mb-1 text-muted text-uppercase">Brands:</h6>

      {productBrands.map((x) => (
        <div className="form-check" key={x}>
          <input
            className="form-check-input"
            type="checkbox"
            id={"check" + x}
            name="brandCheck"
            value={selectedBrands[x]}
            onChange={(e) => {
              setSelectedBrands((prev) => {
                let newObj = { ...prev };
                newObj[x] = !newObj[x];
                return newObj;
              });
            }}
          />
          <label className="form-check-label" htmlFor={"check" + x}>
            {x}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
}
