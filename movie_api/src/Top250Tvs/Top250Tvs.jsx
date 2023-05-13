import axios from 'axios';
import 'bootswatch/dist/lumen/bootstrap.css'
import { useEffect, useState } from 'react';
import './Top250Tvs.css';
function Top250Tvs(){
    const [tv,setTv]=useState(null);
    useEffect(()=>{
        axios.get('https://imdb-api.com/en/API/Top250TVs/k_21r8w9uj')
        .then(res=>setTv(res.data.items))
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='text-primary text-center'>Top 250 Tvs</h1>
                </div>
                <div className="row">
                    {tv && tv.map((x)=>
                        <CardTvs tv={x}/>
                    )}
                </div>
            </div>
        </div>
    )
}
function CardTvs(props){
    var progressVal=props.tv.imDbRating*100;
    var myStyle={
        width:`${progressVal}px`
    }
    return(
        <div className="col-4">
            <div className="card text-center">
                <div className="card-img-top">
                    <img src={props.tv.image} className='imgTv'/>
                </div>
                <div className="card-body">
                    <tr><td>Title:</td><td>{props.tv.title}</td></tr>
                    <tr><td>FullTitle:</td><td>{props.tv.fullTitle}</td></tr>
                    <tr><td>Year:</td><td className='badge bg-success'>{props.tv.year}</td></tr>
                    <tr><td>Crew:</td><td className='badge bg-secondary'>{props.tv.crew}</td></tr>
                </div>
                <div className="card-footer">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={myStyle}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top250Tvs;