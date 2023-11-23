import {Component, createSignal, JSX} from 'solid-js';
import {Route, Routes}                from "@solidjs/router";
import Home                        from "./pages/Home";
import Login                          from "./pages/Login";
import Register                       from "./pages/Register";

export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export type IconProps = { path: JSX.Element, outline?: boolean | undefined, mini?: boolean | undefined };


export const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = (by = 1) => setCount(count() + by);
  const decrement = (by = 1) => setCount(count() - by);

  return (
    <>
        <Routes>
            <Route
                path="/"
                component={Home}
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
