import React from "react";

import { SideEffectExOne } from "./Component/sideEffect/sideEffectExOne";
import { sideEffect } from "./Component/sideEffect/sideEffect";
import { AsyncEffect } from "./Component/sideEffect/AsyncEffect";
import { Post } from "./Component/FetchDataFromAPi/Post";
import { Albums } from "./Component/FetchDataFromAPi/Albums";
import { CommentsWithLoader } from "./Component/FetchDataFromAPi/CommentsWithLoader";
import { ClassCompExOne } from "./Component/ClassBasedComponent/ClassCompExOne";
import LifecycleOne from "./Component/ClassBasedComponent/Lifecycle/LifecycleOne";

export const App = ()=>{
    return(
        <div>
            {/* <SideEffectExOne />
            <AsyncEffect />
            <Post /> */}
            {/* <Albums /> */}
            {/* <CommentsWithLoader /> */}
            {/* <ClassCompExOne username={'kunal'} batch={'stark'}/> */}
            <LifecycleOne />
        </div>
    )
}