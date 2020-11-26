import http from "../http-common";

const getAll = () => {
    return http.get("/clients");
};

const get = id => {
    return http.get(`/clients/${id}`);
};

const create = data => {
    return http.post("/clients", data);
};

const remove = id => {
    return http.delete(`/clients/${id}`);
};

const update = (id, data) => {
    return http.put(`/clients/${id}`, data);
};


// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
    getAll,
    get,
    create,
    remove,
    update
    //   findByTitle
};
