import http from "../http-common";

const getAll = () => {
    return http.get("/formules/getAll");
};

const get = id => {
    return http.get(`/formules/${id}`);
};

const create = data => {
    return http.post("/formules", data);
};

const remove = id => {
    return http.delete(`/formules/${id}`);
};

const update = (id, data) => {
    return http.put(`/formules/${id}`, data);
};

const addPresta = data => {
    return http.post("/formules/add-presta", data);
};

const removePresta = id => {
    return http.delete(`/formules/remove-presta/${id}`);
};




// TODO : implements method below if needed :

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
    getAll,
    get,
    create,
    remove,
    update,
    addPresta,
    removePresta
    //   removeAll,
    //   findByTitle
};
