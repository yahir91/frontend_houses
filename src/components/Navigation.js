import "../styles/navigation.css";


const Navigation = () => {
    const toogleData = () => {
    
    }
    return ( 
        <div className="navigation">
            <img onClick={toogleData} className='option-img' src="/imgs/options.png" alt="options"/>
            <h2>Houses</h2>
            <h2>Favorites</h2>
        </div>
     );
}
 
export default Navigation;