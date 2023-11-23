import { Icon } from "solid-heroicons";
import {Layout}         from "../components/Layout";

import type { Component } from "solid-js";




const Home: Component<{
    slug: string;
    name: string;
    price: string;
    stock: string;
    src: string;
    alt: string;
}> = props => {


    return (
        <Layout>
            <section class="bg-gray-100 p-8 text-gray-700 overflow-y-auto h-full">

            </section>
        </Layout>
    );
}

export default Home;
