import {Icon} from "solid-heroicons";

import {home}                       from "solid-heroicons/solid";
import type {Component, JSXElement} from "solid-js";
import {A}                          from "@solidjs/router";



const CatalogBreadcrumbs: Component<{
    children: JSXElement;
}> = props => {

    return (
        <nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol role="list" class="flex items-center py-4 space-x-4">
                <li>
                    <div class="flex items-center">
                        <A href="/" class="text-sm font-medium text-gray-900">
                            <Icon path={home} class={'h-5 w-5 fill-gray-400'}/>
                        </A>

                    </div>
                </li>
                {props.children}
            </ol>
        </nav>

    )
}
export {CatalogBreadcrumbs};


const CatalogBreadcrumb: Component<{
    name: string;
    slug: string;
}> = props => {

    return (
        <li class="text-sm flex flex-row items-center space-x-4">
            <svg viewBox="0 0 6 20" aria-hidden="true" class="h-5 w-auto text-gray-300">
                <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor"/>
            </svg>
            <A href={props.slug} aria-current="page"
               class="font-medium text-gray-500 hover:text-gray-600">{props.name}</A>
        </li>

    );
}
export {CatalogBreadcrumb};
