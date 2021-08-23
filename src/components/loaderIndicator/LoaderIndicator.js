import { useSelector } from "react-redux";

import "./LoaderIndicator.css";

export default function LoaderIndicator() {
  const isLoading = useSelector((state) => state.onlySingleReducer.showLoader);

  return (
    !!isLoading && (
      <div className="loader-parent">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
}
