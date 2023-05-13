import 'bootswatch/dist/lumen/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Top250.css'
function Top250Data(){
    const [movie,Setmovie]=useState(null);
    useEffect(()=>{
        axios.get('https://imdb-api.com/en/API/Top250Movies/k_21r8w9uj')
        .then(response => Setmovie(response.data.items))      
    },[]);
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='text-center text-success'>Top 250 Movies</h1>
                </div>
            </div>
            <div className="row">
                {movie && movie.map((x) => <CardMovie movie={x} />)}
            </div>
        </div>
    )
}
function CardMovie(props){
    return(
        <div className="col-4">
            <div className="card text-center border-dark my-2">
            <div className="card-img-top">
                <img src={props.movie.image} className='rounded imgTop250'/>
            </div>
            <div className="card-body">
                <div className="card-title">
                    <h1 className='badge bg-secondary rank'>{props.movie.rank}</h1>
                    <h5 className='card-title'>{props.movie.title}</h5>
                    <h6>{props.movie.fullTitle}</h6>
                </div>
                <div className="card-text">
                    <p className='card-text'>{props.movie.crew}</p>
                </div>
            </div>
            <div className="card-footer border-dark">
                <h4 className='badge bg-success form-control border-dark'>{props.movie.imDbRating}</h4>
            </div>
        </div>
    </div>
    )
}
export default Top250Data;