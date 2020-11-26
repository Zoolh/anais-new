import http from "../http-common";

const getAll = () => {
    return http.get("/prestations");
};

const get = id => {
    return http.get(`/prestations/${id}`);
};

const create = data => {
    console.log(data)
    return http.post("/prestations", data);
};

// TODO : implements method below if needed :

// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
    getAll,
    get,
    create
    //   update,
    //   remove,
    //   removeAll,
    //   findByTitle
};
