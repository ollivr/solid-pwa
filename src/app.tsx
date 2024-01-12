import {type Component, createMemo, createResource, type JSX, Suspense} from 'solid-js';
import {Route, Routes, useParams}                                       from "@solidjs/router";
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

    const weekdays: string[] = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const today = createMemo(() => {
        const currentTime = new Date()
        const month = currentTime.getMonth()
        const day = currentTime.getDate()
        const year = currentTime.getFullYear()
        const dayOfWeek = currentTime.getDay()

        console.log('day', day)

        return [
            weekdays[dayOfWeek],
            months[month],
            day,
            month + 1,
            year
        ]
    })

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Layout
                    logo={'./icons/logo.png'}
                    title={data()?.company}
                    today={today()}

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
