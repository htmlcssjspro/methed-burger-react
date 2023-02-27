const { protocol, host } = window.location;

const API_HOST = `${protocol}//${host}`;
const API_URI = `${API_HOST}/api`;

export const apiCategories = () => `${API_URI}/categories`;
export const apiImageURI = image => `${API_URI}/img/${image}`;

const API_PRODUCTS = `${API_URI}/products`;
export const apiProductsCategoryURI = category =>
    `${API_PRODUCTS}/category/${category}`;
export const apiProductsListURI = list =>
    `${API_PRODUCTS}/list?list=${list}`;
