import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  console.log(JSON.stringify(product)+ " kaydedildi.")
  let fakeProduct={
    //"id": "",
    "categoryId": 1,
    "productName": "Changxxxx",
    "quantityPerUnit": "xx24 - 12 oz bottles",
    "unitPrice": "2111",
    "unitsInStock": 1711
  }
  return fetch("htpp://localhost:3000/products/" + (product.id || ""), {
    method: fakeProduct.id ? "PUT" : "POST", //localhost api çalışma kuralı
    headers: { "content-type": "application/json" },
    body: JSON.stringify(fakeProduct),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  //action ı devreye sok
  return function (dispatch) {
    return saveProductApi(product).then((savedProduct) => {
      product.id
        ? dispatch(updateProductSuccess(savedProduct))
        : dispatch(createProductSuccess(savedProduct));
    }).catch(error=>{
      throw error;
    });
  };
}

export function getProducts(catId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (catId) {
      url = url + "?categoryId=" + catId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}


export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error =await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.log("Bir hata oluştu:"+JSON.stringify(error))
  throw error;
}