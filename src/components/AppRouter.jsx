import { Route, Routes } from "react-router-dom";
import { publicRouters } from "../routers";

export function AppRouter(){

    return(
        <Routes>
            {publicRouters.map(({path,Component}) => 
                    <Route key = {path} path = {path} element = {<Component/>}/>
            )} 
        </Routes>
    );

}