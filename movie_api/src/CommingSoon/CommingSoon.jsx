import 'bootswatch/dist/lumen/bootstrap.css';
import './CommingSoon.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function CommingSoon(){
    const [CommingSoon,SetComming]=useState(null);
    useEffect(()=>{
        axios.get('https://imdb-api.com/en/API/ComingSoon/k_12345678')
        .then(res=>SetComming(res.data.items));
    },[])
    return(
        <div className="container my-2">
            <div className="row">
                <div className="col">
                    <h1 className='text-center text-danger'><div className='badge bg-danger'>200</div> Comming Soon</h1>
                </div>
            </div>
            <div className="row">
                {CommingSoon && CommingSoon.map((x)=>{
                    <CardCommingSoon Comming={x}/>
                })}
            </div>
        </div>
    )
}
function CardCommingSoon(props){
    const [ShowModal,SetShowModal]=useState(false);
    const handleButtonClick=()=>{
        SetShowModal(true);
    }
    const closeModal=()=>{
        SetShowModal(false);
    }
    return(
        <div className="col-4">
                    <div className="card border-dark justify-content-center">
                        <div className="card-img-top">
                            <img src={props.Comming.image} className='imgCommingSoon'/>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className='table table-hover table-striped table-bordered'>
                            <tr><th>Title</th><td>{props.Comming.title}</td></tr>
                            <tr><th>Full Title</th><td>{props.Comming.fullTitle}</td></tr>
                            <tr><th>Year</th><td>{props.Comming.year}</td></tr>
                        </table>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary form-control" onClick={handleButtonClick}>
                                    Show Details
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={closeModal} className='btn btn-danger form-control'>Close</button>
                            </div>
                        </div>
                        {ShowModal && (
                            <div className="Modal my-1">
                                <div className="modal-content">
                                    <table className='table table-hovered table-striped table-bordered border-danger'>
                                        <tr><th>Genres</th><td>{props.Comming.genres}</td></tr>
                                        <tr><th>Starts</th><td>{props.Comming.stars}</td></tr>
                                    </table>
                                </div>
                            </div>
                        )}
                        {ShowModal && (
                            <div className="modal-overlay" onClick={closeModal}></div>
                        )}
                    </div>
                </div>
    )
}
export default CommingSoon;