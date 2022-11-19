import {
    BrowserRouter,
    Routes as Switch,
    Route, Navigate,
} from "react-router-dom";
import {Dashboard, Login, NotFound} from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path= "*"  element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    )
}