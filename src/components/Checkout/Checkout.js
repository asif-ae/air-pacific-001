import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

const Checkout = ({cityData, setCityData}) => {
  const { city } = cityData;
  console.log(new Date().getDate())
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="container">
          <div className="text-center p-5">
            <h3>Book your flight now!</h3>
          </div>
          <div className="py-5">
            <div className="row">

              {/* Name */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="name" id="name" placeholder="John Doe" defaultValue="John Doe" disabled />
                  <label for="name">Name</label>
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" name="email" id="email"  placeholder="example@example.example"  defaultValue="example@example.example" disabled />
                  <label for="email">Email</label>
                </div>
              </div>

              {/* Departure airport */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="cityFrom" id="cityFrom" placeholder="Dhaka"  defaultValue="Dhaka" disabled />
                  <label for="cityFrom">Departure airport</label>
                </div>
              </div>

              {/* Arrival airport */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="cityTo" id="cityTo" placeholder="New York"  defaultValue={city} disabled />
                  <label for="cityTo">Arrival airport</label>
                </div>
              </div>

              {/* Departing date */}
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <select class="form-select" id="departing" name="departing" aria-label="Departing">
                    <option value="1" selected>{`${new Date().getDate()} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`}</option>
                    <option value="2">{`${new Date().getDate() + 1} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`}</option>
                    <option value="3">{`${new Date().getDate() + 2} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`}</option>
                    <option value="4">{`${new Date().getDate() + 3} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`}</option>
                    <option value="5">{`${new Date().getDate() + 4} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`}</option>
                  </select>
                  <label for="departing">Departing</label>
                </div>
              </div>

              {/* Class */}
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <select class="form-select" id="class" name="class" aria-label="Class">
                    <option value="1" selected>Economy</option>
                    <option value="2">Business</option>
                  </select>
                  <label for="class">Class</label>
                </div>
              </div>

              {/* Passenger(s) */}
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <select class="form-select" id="passenger" name="passenger" aria-label="Passenger">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <label for="passenger">Passenger(s)</label>
                </div>
              </div>

              {/* Passenger(s) */}
              <div className="col-md-6">
                <div className="pt-1 text-center">
                  <button type="button" class="btn btn-outline-primary btn-lg px-5"><FontAwesomeIcon icon={faSearch} /> Search Seat(s)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;