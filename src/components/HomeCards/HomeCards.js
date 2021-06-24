import { Fragment } from 'react';
import flightData from "../../data/flightData.json";
import "./HomeCard.css";

const HomeCards = () => {
  return (
    <Fragment>
      <div className="a">
        <div className="row m-0 p-0">
          {
            flightData.map(theData => {
              const { id, city, country, economy, business, thumbnail } = theData;
              return (
                <div className="col-lg-4 col-sm-6 col-xs-12" key={id}>
                  <div className="py-2">
                    <div className="shadow card-style">
                      <div>
                        <img src={thumbnail} alt={city} className="w-100 thumbnail" />
                      </div>
                      <div className="p-2">
                        <div className="country text-uppercase text-center" style={{letterSpacing: "5px"}}>{country}</div>
                        <div className="text-center pb-3">
                          <h3>Flights to {city}</h3>
                        </div>
                        <div className="d-flex justify-content-between px-1">
                          <div className="a"><>Economy</></div>
                          <div className="a" id="air-brand"><h5>${economy}</h5></div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between px-1">
                          <div className="a"><>Business</></div>
                          <div className="a" id="air-brand"><h5>${business}</h5></div>
                        </div>
                        <div className="text-center pt-3 pb-2">
                          <button className="btn btn-success">Book Now!</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCards;