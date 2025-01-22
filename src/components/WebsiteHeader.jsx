import ThemeToggler from "./ThemeToggler";
import "../css/websiteHeader.css";
import "../css/themeToggler.css";


export default function WebsiteHeader () { 
    return ( 
    <div className='website-header__container'> 
        <div className='website-header__text'> 
            <h1 className='website-header__text__title'> MetExp : the Met museum explorer </h1>
            <p className='website-header__text__descr'>
                Add here a description laurem ipsum. 
                <br/> 
                For exp a bit from the readme :
                Welcome to **theMetGyalariee**, a React-based project designed to serve as both a study exercise and portfolio showcase. This digital gallery highlights the potential of modern web development technologies while offering an engaging platform to display artistic content.
            </p>
        </div>
        {/* <ThemeToggler/> */}
 
    </div> 
    )
}