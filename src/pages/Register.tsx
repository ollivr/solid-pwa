
import { Icon } from "solid-heroicons";
import {Layout}         from "../components/Layout";

import type { Component } from "solid-js";
import {RegisterCard}     from "../components/cards/forms/RegisterCard";
import {useRouteData}     from "@solidjs/router";




const Register: Component<{
}> = props => {
    const data = useRouteData();

    return (

            <section class="bg-gray-100 p-8 text-gray-700 overflow-y-auto h-full">
                <RegisterCard
                    data={data}
                />
            </section>

    );
}

export default Register;
