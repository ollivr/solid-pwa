import { Component, createSignal } from 'solid-js';
import {Route, Routes} from "@solidjs/router";
import Home                        from "./pages/Home";

export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

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
        </Routes>
    </>
  );
};
