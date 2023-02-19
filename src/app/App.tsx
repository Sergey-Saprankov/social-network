import {useAppDispatch} from "../common/hooks/appDispatch";
import "../style/index.scss";
import {Suspense, useContext, useEffect, useState} from "react";
import {authMeTC} from "../features/auth/authSlice";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {Loader} from "../common/components/Loader/Loader";
import {Theme, ThemeContext} from "../style/theme/ThemeContext";
import {useTheme} from "../style/theme/useTheme";


export const App = () => {
    const dispatch = useAppDispatch();
    const {theme, toggleTheme} = useTheme()
    useEffect(() => {
        dispatch(authMeTC());
    }, []);
    // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    // const status = useAppSelector(state => state.app.appStatus)
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={"/"}>main</Link>
            <Link to={"/about"}>about</Link>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            {/*{status === 'loading' && <Loader />}*/}
        </div>
    );
};