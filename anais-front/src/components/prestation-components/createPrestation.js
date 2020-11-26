import React, { useState } from "react";
import PrestationDataService from "../../services/prestation-services";

const CreatePrestation = () => {
    const initialPrestationState = {
        id: null,
        libelle: "",
        description: "",
        tarif: null,
        duree: null
    };
    const [prestation, setPrestation] = useState(initialPrestationState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPrestation({ ...prestation, [name]: value });
    };

    const savePrestation = () => {
        var data = {
            libelle: prestation.libelle,
            description: prestation.description,
            tarif: prestation.tarif,
            duree: prestation.duree
        };

        PrestationDataService.create(data)
            .then(response => {
                setPrestation({
                    id: response.data.id,
                    libelle: response.data.libelle,
                    description: response.data.description,
                    tarif: response.data.tarif,
                    duree: response.data.duree
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newPrestation = () => {
        setPrestation(initialPrestationState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Enregistré avec succès!</h4>
                    <button className="btn btn-success" onClick={newPrestation}>
                        Ajouter
        </button>
                </div>
            ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="libelle">Libelle</label>
                            <input
                                type="text"
                                className="form-control"
                                id="libelle"
                                required
                                value={prestation.libelle}
                                onChange={handleInputChange}
                                name="libelle"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={prestation.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duree">Durée</label>
                            <input
                                type="integer"
                                className="form-control"
                                id="duree"
                                required
                                value={prestation.duree}
                                onChange={handleInputChange}
                                name="duree"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tarif">Tarif</label>
                            <input
                                type="integer"
                                className="form-control"
                                id="tarif"
                                required
                                value={prestation.tarif}
                                onChange={handleInputChange}
                                name="tarif"
                            />
                        </div>

                        <button onClick={savePrestation} className="btn btn-success">
                            Enregistrer
        </button>
                    </div>
                )}
        </div>
    );
};

export default CreatePrestation;
