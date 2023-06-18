
export const SET_LOADER_STATE = "SET_LOADER_STATE";
export const SET_PRODUCT_DATA = "SET_PRODUCT_DATA";
export const UPDATE_PRODUCT_RESULTS = "UPDATE_PRODUCT_RESULTS";
export const CRITERIA_CHANGED = "CRITERIA_CHANGED";
export const FILTER_RESULTS = "FILTER_RESULTS";


export const showLoader = (value) => {
  return { type: SET_LOADER_STATE, showLoader: value };
};

export const fetchProductData = () => {
  return (dispatch) => {
    return fetch('/WebProjectBuilds/FilteredApparels/apparelData.json', {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((rsData) => {
        dispatch({
          type: SET_PRODUCT_DATA,
          data: rsData,
        });
      });
  };
};

export const criteriaChanged = (id, value) => {
  return {
    type: CRITERIA_CHANGED,
    data: { filterId: id, filterValue: value },
  };
};

export const updateFilteredResults = () => {
  return {
    type: FILTER_RESULTS,
  };
};

