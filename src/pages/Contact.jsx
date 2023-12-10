import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
      <div className='container text-center mt-4'>
        <h3>Contact The Chemical Company Today</h3>

        <div className="row mt-3">
          <div className="col-4">
            <p className='title'>
              CALL US
            </p>
            <p>
              We’re here to help!
              (+92) 303-4179851
            </p>

          </div>
          <div className="col-4">
            <p className='title'>
              MAILING ADDRESS
            </p>
            <p>
              44 Southwest Avenue
              Jamestown RI 02835
              United States
            </p>
          </div>
          <div className="col-4">
            <p className='title'>JOIN OUR TEAM</p>
            <p>
              Please visit our Careers page to submit application information.
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Phone" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Company name</Form.Label>
            <Form.Control type="text" placeholder="Company Name" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product You're Interested In</Form.Label>
            <Form.Control type="text" placeholder="Enter a product name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tell us more</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>


          <Button className='btn-button-subscribe' >
            Submit
          </Button>
        </Form>
      </div>
    </>

  );
};

export default Contact;