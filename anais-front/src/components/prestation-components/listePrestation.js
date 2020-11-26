import React, { useState, useEffect } from "react";
import PrestationDataService from "../../services/prestation-services";
import { Link } from "react-router-dom";

const ListePrestation = () => {
  const [prestations, setPrestations] = useState([]);
  const [currentPrestation, setCurrentPrestation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrievePrestations();
  }, []);

  // const onChangeSearchTitle = e => {
  //   const searchTitle = e.target.value;
  //   setSearchTitle(searchTitle);
  // };

  const retrievePrestations = () => {
    PrestationDataService.getAll()
      .then(response => {
        setPrestations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePrestations();
    setCurrentPrestation(null);
    setCurrentIndex(-1);
  };

  const setActivePrestation = (prestation, index) => {
    setCurrentPrestation(prestation);
    setCurrentIndex(index);
  };

  // const removeAllPrestations = () => {
  //   PrestationDataService.removeAll()
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // const findByTitle = () => {
  //   PrestationDataService.findByTitle(searchTitle)
  //     .then(response => {
  //       setTutorials(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="list row">
    

      <div className="col-md-6">
        <h4>Liste des prestations</h4>

        <ul className="list-group">
          {prestations &&
            prestations.map((prestation, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePrestation(prestation, index)}
                key={index}
              >
                {prestation.libelle}
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentPrestation ? (
          <div>
            <h4>Prestation</h4>
            <div>
              <label>
                <strong>Libelle:</strong>
              </label>{" "}
              {currentPrestation.libelle}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentPrestation.description}
            </div>
         
          </div>
        ) : (
          <div>
            <br />
            <p>Clique sur une prestation</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListePrestation;
