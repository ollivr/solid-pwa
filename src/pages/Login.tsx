import type { Component } from "solid-js";
import {LoginCard}        from "../components/cards/forms/LoginCard";
import { useRouteData } from "@solidjs/router";




const Login: Component<{
}> = props => {
    const data = useRouteData();


    return (

            <section class="bg-gray-100 p-8 text-gray-700 overflow-y-auto h-full">
                <LoginCard
                    data={data}
                />
            </section>

    );
}

export default Login;
