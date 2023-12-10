import React from 'react'
import Form from 'react-bootstrap/Form';
import { FaBiohazard, FaEyeDropper, FaFillDrip, FaFlask, FaGripfire, FaLeaf, FaPlusCircle, FaTint } from 'react-icons/fa';
import { chemicalDetails } from '../Products';
import { Link } from 'react-router-dom';
const Products = () => {

    return (
        <div>
            <section className='container d-flex mt-5'>
                <Form.Control style={{ fontSize: 16 }} size="lg" type="text" placeholder="Search a product by name, CAS number or category" />
                <button className='btn-button-subscribe'> Search </button>
            </section >
            <section>
                <div className='section-4 container mt-5'>
                    <h3>Featured Products</h3>
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
                </div>
            </section>
            <section className='container text-center mb-5'>
                <div class="heading-container ">
                    <div class="heading-line">
                        <div class="line"></div>
                        <div class="heading-text">Product List</div>
                        <div class="line"></div>
                    </div>
                </div>
                <div className="row gy-5 gx-5 ">
                    {chemicalDetails.map(el => (
                        <div className="col-4 p-item">
                            <Link  style={{ textDecoration: 'none',  color: '#39758b' }} to={`/products/${el.id}`}>
                                {el.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Products