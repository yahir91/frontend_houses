import "../styles/navigation.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeToogle } from "../redux/toogle";
import { useSelector } from "react-redux";


const Navigation = ({handleFavorite, toogleFavorite}) => {
    const dispatch = useDispatch()
    const { toogle } = useSelector((state) => state.toogle);

    const toogleData = () => {
    dispatch(changeToogle(toogle? false: true))
    console.log(toogle)
    }
    return ( 
        <div className="navigation">
            <img onClick={toogleData} className='option-img' src="/imgs/options.png" alt="options"/>
            <h2>Houses</h2>
            {!toogleFavorite? <h2 onClick={handleFavorite}>Favorites</h2>: <h2 onClick={handleFavorite}>All Houses</h2> }
        </div>
     );
}
 
export default Navigation;