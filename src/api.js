const { protocol, hostname, port } = window.location;
console.log('protocol: ', protocol);
console.log('hostname: ', hostname);
console.log('port: ', port);

const API_HOST_test = `${protocol}://${hostname}:${port}`;
console.log('API_HOST_test: ', API_HOST_test);
const API_HOST = 'http://localhost:3000';
const API_URI = `${API_HOST}/api`;

export const apiCategories = () => `${API_URI}/categories`;
export const apiImageURI = image => `${API_URI}/img/${image}`;

const API_PRODUCTS = `${API_URI}/products`;
export const apiProductsCategoryURI = category =>
    `${API_PRODUCTS}/category/${category}`;
export const apiProductsListURI = list =>
    `${API_PRODUCTS}/list?list=${list}`;
