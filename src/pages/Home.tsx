import { Icon } from "solid-heroicons";
import {Layout}         from "../components/Layout";

import { A } from "@solidjs/router";
import {home} from "solid-heroicons/solid";
import {CatalogGrid} from "../components/cards/catalog/CatalogGrid";
import type { Component } from "solid-js";
import {ContentPreview} from "../components/cards/content/GridPreview";




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

                <ContentPreview/>

            </section>
        </Layout>
    );
}

export default Home;
