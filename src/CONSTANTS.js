

export const searchQueryInProductName = (productDesc, searchTerm) => {
  if (productDesc.indexOf(searchTerm) !== -1) {
    return true;
  } else {
    let searchTermArray = searchTerm.split(" ");
    let productDescArray = productDesc.split(" ");

    for (let x of searchTermArray) {
      if (productDescArray.indexOf(x) !== -1) {
        return true;
      }
    }
  }

  return false;
};
