import {A}                          from "@solidjs/router";
import type {Component, JSXElement} from "solid-js";


const ProductGridRelations: Component<{
    children: JSXElement;
}> = props => {


    return (
        <>

            <section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
                <h2 id="related-heading" class="text-lg font-medium text-gray-900">Customers also purchased</h2>

                <ul class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {props.children}
                </ul>
            </section>
        </>
    );

}
export {ProductGridRelations}


const ProductGridRelationPreview: Component<{
    src: string;
    slug: string;
    name: string;
    id: string;
    description: string;
    price: string;
}> = props => {


    return (
        <>

            <div class="relative group">
                <div
                    class="w-full overflow-hidden rounded-md min-h-80 aspect-h-1 aspect-w-1 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img src={props.src} alt="Front of men&#039;s Basic Tee in white."
                         class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <A href={props.slug}>
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                {props.name}
                            </A>
                        </h3>
                        <p class="text-xs font-medium text-gray-900">{props.id}</p>
                        <p class="mt-1 text-sm text-gray-500">{props.description}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">{props.price}</p>
                </div>
            </div>
        </>
    );

}
export {ProductGridRelationPreview}
