import wadeImage from '../assets/wade.jpg'

export default function Nav(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={wadeImage} alt="wade" className='nav--image'/>
            <div className="toggler">
                <div className='toggler-slider' onClick={props.handleClick}>
                    <div className='toggler-slider-circle'></div>
                </div>
            </div>
        </nav>
    )
}