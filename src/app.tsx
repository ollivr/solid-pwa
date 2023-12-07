import {type Component, createResource, type JSX, Suspense} from 'solid-js';
import {Route, Routes, useParams}                           from "@solidjs/router";
import Home                                                 from "./pages/Home";
import Login                                                from "./pages/Login";
import Register                                             from "./pages/Register";
import {homeData}                                           from "./pages/home.data";
import {Layout}                                             from './components/Layout';

export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export type IconProps = { path: JSX.Element, outline?: boolean | undefined, mini?: boolean | undefined };

async function fetchData() {
    const response = await fetch(`/data.json`);
    console.log(response.body)
    return await response.json();
}

export const App: Component = () => {

    const params = useParams();
    const [data] = createResource(params, fetchData);

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Layout
                    logo={'./icons/icon-192x192.png'}
                    title={data()?.name}

                >
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
                </Layout>
            </Suspense>

        </>
    );
};
