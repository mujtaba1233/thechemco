// src/components/Home.js
import React from 'react';
import { FaFillDrip, FaGripfire, FaEyeDropper, FaFlask, FaTint, FaBiohazard, FaLeaf, FaPlusCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <section className='common-section'>
        <div className='container'>
          <div className='col-6'>
            <p>
              Global Chemical <br />
              Supplier & Distributor
            </p>
            <p className='content'>
              <span style={{ fontStyle: 'italic' }}> Your bridge to global<br /> bonds in chemistry.</span>
              <br /> <br />
              Top-ranked international <br /> supplier & distributor of <br /> chemicals, solvents & <br /> intermediates worldwide
            </p>
          </div>
        </div>
      </section>
      <div className='section-3 text-center pt-4 pb-1'>
        <h3>
          Chemical Solutions at Your Fingertips
        </h3>
        <p className='mt-2'>SEARCH BY PRODUCT, SKU, OR KEYWORD</p>
      </div>
      <div className='section-4 container text-center mt-5'>
        <h3>Our Products</h3>
        <p>
          We partner with manufacturers both domestically and internationally to provide cost-effective alternatives focusing on the needs of businesses of all sizes.
        </p>
        <div className='row'>
          <div className='col-3 d-flex flex-column justify-content-space-around'>
            <FaFillDrip size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>C.A.S.E</p>
          </div>
          <div className='col-3  d-flex flex-column justify-content-space-around '>
            <FaGripfire size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>Flame Retardants</p>
          </div>
          <div className='col-3 d-flex flex-column justify-content-space-around'>
            <FaFlask size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>Silanes</p>
          </div>
          <div className='col-3 d-flex flex-column justify-content-space-around'>
            <FaEyeDropper size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>Acid</p>
          </div>
          <div className='col-3 d-flex flex-column justify-content-space-around'>
            <FaTint size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>Water Treatment</p>
          </div>
          <div className='col-3 d-flex flex-column justify-content-space-around'>
            <FaBiohazard size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>Intermediates</p>
          </div>
          <div className='col-3 d-flex flex-column justify-content-space-around'>
            <FaLeaf size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>Fertilizer/Crop <br /> Nutrition</p>
          </div>
          <div className='col-3 d-flex flex-column justify-content-space-around'>
            <FaPlusCircle size={54} color="white" />
            <p style={{ marginTop: 20, color: 'white' }}>Polymer Additives</p>
          </div>
        </div>
        <button className='btn btn-button'>SEE ALL PRODUCTS</button>
      </div>

      <section>
        <div className='row mt-5'>
          <div className='col-6 gx-0'>
            <img className='img-fluid w-100' src='https://thechemco.com/wp-content/uploads/2023/07/AdobeStock_290837503_Scaled-1024x682-1.png' />
          </div>
          <div className='col-6 gx-0'>
            <img className='img-fluid' src='https://thechemco.com/wp-content/uploads/2023/07/AdobeStock_312877949_scaled-1-1024x682-1.png'></img>
          </div>
        </div>
      </section>
      <section className='section-5'>
        <div className='container'>
          <h3 className='text-white text-center fs-2 pb-4'> Our Podcasts</h3>
          <div className='row'>
            <div className='col-6'>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6y1fcHUOHZI?si=GeCA18P7FoN13Ioj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='col-6'>
              <h2 className='text-white fw-bold'>
                The View From
                Jamestown
              </h2>
              <p className='text-white fs-5'>
                A monthly podcast featuring The Chemical Company’s View from Jamestown content, from the eyes of TCC President Robb Roach, GM of Sales AJ Petrarca, LatAm Operations Manager Javier Ferndandez, Marketing Manager Ben Sawicki, and more.
              </p>
              <button className='btn btn-outline-light btn-lg'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h3>
                Stay Connected
              </h3>
              <p>
                Sign up to receive The View from Jamestown – TCC’s monthly industry newsletter
              </p>
            </div>
            <div className='col-6'>
              <input placeholder='Email' />
              <button className='btn btn-button-subscribe'> Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
