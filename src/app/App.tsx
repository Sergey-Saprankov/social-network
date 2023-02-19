import {useAppDispatch} from "../common/hooks/appDispatch";
import "../style/index.scss";
import {Suspense, useEffect} from "react";
import {authMeTC} from "../features/auth/authSlice";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";

export const App = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authMeTC());
    }, []);
    // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    // const status = useAppSelector(state => state.app.appStatus)
    return (
        <div className="app">
            <Link to={"/"}>about</Link>
            <Link to={"/about"}>main</Link>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            {/*{status === 'loading' && <Loader />}*/}
        </div>
    );
};