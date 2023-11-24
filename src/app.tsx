import type {Component, JSX} from 'solid-js';
import {Route, Routes}                from "@solidjs/router";
import Home                        from "./pages/Home";
import Login                          from "./pages/Login";
import Register                       from "./pages/Register";
import {homeData}                     from "./pages/home.data";

export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export type IconProps = { path: JSX.Element, outline?: boolean | undefined, mini?: boolean | undefined };

export const App: Component = () => {

  return (
    <>
        <Routes>
            <Route
                path="/"
                component={Home}
                data={homeData}
            />
            <Route
                path="/login"
                component={Login}
            />
            <Route
                path="/register"
                component={Register}
            />
        </Routes>
    </>
  );
};
