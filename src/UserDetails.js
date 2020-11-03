import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MapWithAMarker from "./Map";

const UserDetails = ({ user }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={user.id}>
            {user.name}-Click to see details
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={user.id}>
          <Card.Body>
            <div>
              <span style={{ fontWeight: "bold" }}>ID: </span>
              {user.id}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Full Name: </span>
              {user.name}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Phone: </span>
              {user.phone}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Email: </span>
              {user.email}
              <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
                website:{" "}
              </span>
              {user.website}
            </div>
            <div style={{ display: "flex" }}>
              <label
                for="Addresse"
                style={{ fontWeight: "bold", marginRight: "5px" }}
              >
                Adress
              </label>
              <textarea
                readOnly
                name="Adress"
                cols={50}
                style={{ resize: "none" }}
                type="textarea"
                placeholder={`${user.address.street} ${user.address.suite} ${user.address.city}-${user.address.zipcode}`}
              ></textarea>
            </div>
            <MapWithAMarker
              marker={{ lat: user.address.geo.lat, lng: user.address.geo.lng }}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCncFD8yCCvdMX0KsVaVGnIO6odwzPBdf0&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};
export default UserDetails;
