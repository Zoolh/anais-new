import http from "../http-common";

const getAll = () => {
    return http.get("/commandes");
};

const get = id => {
    return http.get(`/commandes/${id}`);
};

const create = data => {
    return http.post("/commandes", data);
};

const remove = id => {
    return http.delete(`/commandes/${id}`);
};

const update = (id, data) => {
    return http.put(`/commandes/${id}`, data);
};

const getAllByClientId = () => {
    return http.get(`/commandes/${id_client}`);
};

const addPresta = data => {
    return http.post("/commandes/add-presta", data);
};

const removePresta = id => {
    return http.delete(`/commandes/remove-presta/${id}`);
};

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
    getAll,
    get,
    create,
    remove,
    update,
    getAllByClientId,
    addPresta,
    removePresta
    //   findByTitle
};
