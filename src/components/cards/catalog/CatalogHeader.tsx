
import {A}                            from "@solidjs/router";
import type {Component}               from "solid-js";


const CatalogHeader: Component<{
    name: string;
    description: string;
}> = props => {

    return (
        <div class="border-b border-gray-200 pt-24 pb-10">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">{props.name}</h1>
            <p class="mt-4 text-base text-gray-500">{props.description}</p>
        </div>


    );
}

export default CatalogHeader;
