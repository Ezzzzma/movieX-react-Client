let API_HOST = "";

if (process.env.REACT_APP_ENV === "development") {
  API_HOST = "http://localhost:5500";
}

if (process.env.REACT_APP_ENV === "production") {
  API_HOST = "https://lit-waters-49720.herokuapp.com";
}
console.log(API_HOST);

export { API_HOST };
