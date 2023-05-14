import axios from "axios";
import { useEffect, useState } from "react";
import 'bootswatch/dist/lumen/bootstrap.css';
function SearchMovieSerie(){
    const [search,SetSearch]=useState();
    const ChangeSearch=(s)=>{
        SetSearch(s.target.value);
    }   
    useEffect(()=>{
        axios.get('https://imdb-api.com/en/API/Search/k_21r8w9uj/'+search)
        .then(res=>SetSearch(res.data.items))
    })
    return(
        <div className="container my-2">
            <form>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <input type="text" className='form-control border-dark' placeholder='search for a movie or series' value={search} onChange={ChangeSearch}/>
                    </div>
                    <div className="col-2">
                        <button className='btn btn-outline-success form-control'>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SearchMovieSerie;