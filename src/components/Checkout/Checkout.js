import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

const Checkout = ({cityData, setCityData}) => {

  // Days
  const dayOne = `${new Date().getDate()} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`;
  const dayTwo = `${new Date().getDate() + 1} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`;
  const dayThree = `${new Date().getDate() + 2} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`;
  const dayFour = `${new Date().getDate() + 3} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`;
  const dayFive = `${new Date().getDate() + 4} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`;


  
  const { city } = cityData;
  console.log(new Date().getDate())

  let importantData = {
    arrival: city,
    departing: dayOne,
    class: 'Economy',
    // passenger: '1',
  };

  // Required Functions
  const changeHandler = (event) => {
    console.log(event.target.name, event.target.value);
    importantData.departing = event.target.name === "departing" && event.target.value;
    importantData.class = event.target.name === "class" && event.target.value;
    // importantData.passenger = event.target.name === "passenger" && event.target.value;
    console.log(importantData)
  }




  const onSubmit = async (data) => {
    const cityData = await importantData;
    const serverURL = await 'http://localhost:4242/addticket';
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cityData)
    })
    .then(res => {
      console.log('server side respose:', res);
    });
  }
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
                  <input type="email" className="form-control" name="email" id="email"  placeholder="example@example.example" defaultValue="example@example.example" disabled />
                  <label for="email">Email</label>
                </div>
              </div>

              {/* Departure airport */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="cityFrom" id="cityFrom" placeholder="Dhaka" defaultValue="Dhaka" disabled />
                  <label for="cityFrom">Departure airport</label>
                </div>
              </div>

              {/* Arrival airport */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="cityTo" id="cityTo" placeholder="New York" defaultValue={city} disabled />
                  <label for="cityTo">Arrival airport</label>
                </div>
              </div>

              {/* Departing date */}
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <select class="form-select" id="departing" name="departing" aria-label="Departing" onChange={changeHandler}>
                    <option value={dayOne} selected>{dayOne}</option>
                    <option value={dayTwo}>{dayTwo}</option>
                    <option value={dayThree}>{dayThree}</option>
                    <option value={dayFour}>{dayFour}</option>
                    <option value={dayFive}>{dayFour}</option>
                  </select>
                  <label for="departing">Departing</label>
                </div>
              </div>

              {/* Class */}
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <select class="form-select" id="class" name="class" aria-label="Class" onChange={changeHandler}>
                    <option value="Economy" selected>Economy</option>
                    <option value="Business">Business</option>
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
                  <button type="button" class="btn btn-outline-primary btn-lg px-5" onClick={onSubmit}><FontAwesomeIcon icon={faSearch} /> Search Seat(s)</button>
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