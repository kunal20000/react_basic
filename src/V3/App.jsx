import React from "react";

import { SideEffectExOne } from "./Component/sideEffect/sideEffectExOne";
import { sideEffect } from "./Component/sideEffect/sideEffect";
import { AsyncEffect } from "./Component/sideEffect/AsyncEffect";
import { Post } from "./Component/FetchDataFromAPi/Post";
import { Albums } from "./Component/FetchDataFromAPi/Albums";

export const App = ()=>{
    return(
        <div>
            {/* <SideEffectExOne />
            <AsyncEffect />
            <Post /> */}
            <Albums />
        </div>
    )
}