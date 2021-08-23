import { React, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchProductData,
  showLoader,
} from "../../store/actions/onlySingleActions";

import "./CardList.css";
import CardThumbnail from "../cardThumbnail/CardThumbnail";

export default function CardList() {
  const actionDispatcher = useDispatch();

  const listOfResults = useSelector(
    (state) => state.onlySingleReducer.listOfResults
  );

  useEffect(() => {
    actionDispatcher(showLoader(true));

    actionDispatcher(fetchProductData())
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        actionDispatcher(showLoader(false));
      });
  }, []);

  return (
    <div className="row my-4">
      {listOfResults.map((x) => (
        <CardThumbnail key={x.productId} cardDetails={x} />
      ))}

      {listOfResults.length === 0 && (
        <div className="my-5 py-5">
          <h1 className="fw-light my-5 py-5 text-muted text-center">
            No Results matched your criteria, please refine your filters!
          </h1>
        </div>
      )}
    </div>
  );
}
