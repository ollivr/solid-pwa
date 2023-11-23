
import { Icon } from "solid-heroicons";
import {Layout}         from "../components/Layout";

import type { Component } from "solid-js";
import {RegisterCard}     from "../components/cards/forms/RegisterCard";




const Register: Component<{
}> = props => {


    return (
        <Layout>
            <section class="bg-gray-100 p-8 text-gray-700 overflow-y-auto h-full">
                <RegisterCard/>
            </section>
        </Layout>
    );
}

export default Register;
