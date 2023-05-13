import 'bootswatch/dist/lumen/bootstrap.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Top250Movies from "./Top250Movies/Top250Data";
import Top250TV from "./Top250Tvs/Top250Tvs";
import './menu.css';
function Menu(){
    return(
        <Router>
            <div className="row my-2">
                <div className="col-2">
                    <ul class="nav flex-column sticky-top my-5 mx-1">
                        <li class="nav-item btn btn-success border-dark py-3">
                            <Link to="/Top250Movies" className='text-light'>Top 250 Movies</Link>
                        </li>
                        <li class="nav-item my-2 btn btn-success border-dark py-3">
                            <Link to="/Top250TV" className='text-light'>Top 250 Tvs</Link>
                        </li>
                        <li class="nav-item my-2 btn btn-success border-dark py-3">
                            <Link to="/MostPopularMovies" className='text-light'>Popular Movies</Link>
                        </li>
                        <li class="nav-item my-2 btn btn-success border-dark py-3">
                            <Link to="/MostPopularTvs" className='text-light'>Popular TVs</Link>
                        </li>
                        <li class="nav-item my-2 btn btn-success border-dark py-3">
                            <Link to="/CommingSoon" className='text-light'>Coming Soon</Link>
                        </li>
                        <li class="nav-item my-2 btn btn-success border-dark py-3">
                            <Link to="/Trailler" className='text-light'>Trailer</Link>
                        </li>
                        <li class="nav-item my-2 btn btn-success border-dark py-3">
                            <Link to="/Faq" className='text-light'>FAQ</Link>
                        </li>
                    </ul>
            </div>
                <div className="col">
                <Routes>
                    <Route path="Top250Movies" element={<Top250Movies/>}/>
                    <Route path="Top250TV" element={<Top250TV/>}/>
                </Routes>
            </div>
            </div>
        </Router>
    )
}
export default Menu;