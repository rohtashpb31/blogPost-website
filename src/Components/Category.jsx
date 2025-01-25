import { useState } from "react";
import { Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Footerblog from "./Footerblog";
import { Link } from "react-router-dom";

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p variant="primary" className="catea" onClick={handleShow}>
        CATEGORYS
      </p>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="me-5">CATEGORYS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bodyoff">
          <Link to={'/categeores'} onClick={()=>{
            handleClose(false)
          }}> NATURE</Link> 
          <Link to={'/categeores'}  onClick={()=>{
            handleClose(false)
          }}>THECNOLOGY</Link>
          <Link to={'/categeores'} onClick={()=>{
            handleClose(false)
          }}>TRAVEL</Link>
          <Link to={'/categeores'}>BOOKS</Link>
          <Link to={'/categeores'} onClick={()=>{
            handleClose(false)
          }}>LIFESTYLE</Link>
          <Link to={'/categeores'} onClick={()=>{
            handleClose(false)
          }}> HEALTH</Link>
          <Link to={'/categeores'} onClick={()=>{
            handleClose(false)
          }}>BUSINESS & CARRIER</Link>
          <Footerblog/>
        </Offcanvas.Body>
      </Offcanvas>
     
    </>
  );
}
