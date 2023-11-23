
import {A}                            from "@solidjs/router";
import type {Component}               from "solid-js";


const CatalogGridPreviewCard: Component<{
    id: string;
    src: string;
    slug: string;
    name: string;
    description: string;
    price?: string;
}> = props => {

    return (
        <li
            class="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white group">
            <div
                class="bg-gray-200 aspect-h-4 aspect-w-3 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img src={props.src}
                     alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green."
                     class="h-full w-full object-cover object-center sm:h-full sm:w-full"/>
            </div>
            <div class="flex flex-1 flex-col p-4 space-y-2">
                <h3 class="text-sm font-medium text-gray-900">
                    <A href={`/${props.slug}`}>
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {props.name}
                    </A>
                </h3>
                <p class="text-sm text-gray-500">{props.description}</p>
                <div class="flex flex-1 flex-col justify-end">
                    <p class="text-sm italic text-gray-500"></p>
                    <p class="text-base font-medium text-gray-900">${props.price}</p>
                </div>
            </div>
        </li>


    );
}

export default CatalogGridPreviewCard;
