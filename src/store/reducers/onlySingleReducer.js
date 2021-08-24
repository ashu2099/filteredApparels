import {
  SET_LOADER_STATE,
  SET_PRODUCT_DATA,
  CRITERIA_CHANGED,
  FILTER_RESULTS,
} from "../actions/onlySingleActions";

import { searchQueryInProductName } from "../../CONSTANTS";

const initialState = {
  showLoader: false,
  listOfResults: [],
  productCategories: [],
  productBrands: [],
  FILTERS: { BRAND: [], CATEGORY: [], SEARCH: "" },
};

export default function OnlySingleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER_STATE: {
      return { ...state, showLoader: action.showLoader };
    }

    case SET_PRODUCT_DATA: {
      return {
        ...state,
        productData: action.data,
        allProducts: action.data.products,
        listOfResults: action.data.products,
        sortOptions: action.data.sortOptions,
        productCategories: [
          ...new Set(action.data.products.map((x) => x.category)),
        ],
        productBrands: [...new Set(action.data.products.map((x) => x.brand))],
        productGenders: [...new Set(action.data.products.map((x) => x.gender))],
      };
    }

    case CRITERIA_CHANGED: {
      let newFilters = { ...state.FILTERS };

      newFilters[action.data.filterId] = action.data.filterValue;

      return { ...state, FILTERS: newFilters };
    }

    case FILTER_RESULTS: {
      let checkBrands = Object.values(state.FILTERS.BRAND).indexOf(true) !== -1;
      let checkCategories =
        Object.values(state.FILTERS.CATEGORY).indexOf(true) !== -1;

      let filteredProducts = state.allProducts.filter((x) => {
        if (!!state.FILTERS.GENDER && state.FILTERS.GENDER !== x.gender) {
          return false;
        }

        if (checkBrands && !state.FILTERS.BRAND[x.brand]) {
          return false;
        }

        if (checkCategories && !state.FILTERS.CATEGORY[x.category]) {
          return false;
        }

        if (
          !searchQueryInProductName(
            x.productName.toLowerCase(),
            state.FILTERS.SEARCH
          )
        ) {
          return false;
        }

        return true;
      });

      return { ...state, listOfResults: filteredProducts };
    }

    default:
      return state;
  }
}
