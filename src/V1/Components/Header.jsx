import { Icon } from "./IconList";

import {logo} from './Logo';
import SearchBar from './SearchBar';


export const Header = ()=>{
    return(
        <div className="header-container">
             <logo/>
             <SearchBar/>
             <Icon/>
        </div>
    )
};




// combines or wraps multiple components
// gives a specific functionality of header