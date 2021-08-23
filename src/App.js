import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import onlySingleReducer from "./store/reducers/onlySingleReducer";

import CardList from "./components/cardList/CardList";
import FilterList from "./components/filterList/FilterList";
import Loader from "./components/loaderIndicator/LoaderIndicator";
import HeaderSearch from "./components/headerSearch/HeaderSearch";

const rootReducer = combineReducers({
  onlySingleReducer: onlySingleReducer,
});

//if there were multiple reducers this would have been useful.

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderSearch></HeaderSearch>

        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <FilterList />
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10">
              <CardList />
            </main>
          </div>
        </div>

        <Loader />
      </div>
    </Provider>
  );
}

export default App;
