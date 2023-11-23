
import { Icon } from "solid-heroicons";
import {Layout}         from "../components/Layout";

import type { Component } from "solid-js";
import {LoginCard}        from "../components/cards/forms/LoginCard";




const Login: Component<{
}> = props => {


    return (
        <Layout>
            <section class="bg-gray-100 p-8 text-gray-700 overflow-y-auto h-full">
                <LoginCard/>
            </section>
        </Layout>
    );
}

export default Login;
