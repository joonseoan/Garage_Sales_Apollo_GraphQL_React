
export const fetchProductList = (productList) => {
   console.log(productList)
    return {
        type: 'FETCH_PRODUCT_LIST',
        payload: productList
    };
}