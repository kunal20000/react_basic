import { userstatus } from "./conditionals/userStatus";

import { conditionalsEx2 } from "./conditionals/conditionalsEx2";
import Searchbar from "./component/SearchBar";
export const App =()=>{
    return(
        <>
        <userstatus />
        <conditionalsEx2 />
        <Searchbar />
        
        </>
    )
}