import {type Component, createResource, type JSX, Suspense} from 'solid-js';
import {Route, Routes, useParams}                           from "@solidjs/router";
import Home                                                 from "./pages/Home";
import Login                                                from "./pages/Login";
import Register                                             from "./pages/Register";
import {homeData}                                           from "./pages/home.data";
import {Layout}   from './components/Layout';
import {About}    from "./pages/About";
import {aboutData} from "./pages/about.data";


export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export type IconProps = { path: JSX.Element, outline?: boolean | undefined, mini?: boolean | undefined };


async function fetchAccount() {
    const response = await fetch(`/account.json`);
    return await response.json();
}

export const App: Component = () => {

    const params = useParams();
    const [data] = createResource(params, fetchAccount);



    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Layout
                    logo={'./icons/logo.png'}
                    title={data()?.company}

                >
                    <Routes>
                        <Route
                            path="/"
                            component={Home}
                            data={data}
                        />
                        <Route
                            path="/about"
                            component={About}
                            data={aboutData}
                        />
                        <Route
                            path="/login"
                            component={Login}
                            data={data}
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
