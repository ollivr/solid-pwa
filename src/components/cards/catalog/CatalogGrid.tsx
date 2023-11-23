import {Icon}                              from "solid-heroicons";
import {type Component, createSignal, For} from "solid-js";
import {A}                                 from "@solidjs/router";
import {home}                              from "solid-heroicons/solid";
import CatalogGridPreviewCard              from "./CatalogGridPreviewCard";
import CatalogHeader                       from "./CatalogHeader";

import {CatalogBreadcrumbs, CatalogBreadcrumb} from "./CatalogBreadcrumbs";


const CatalogGrid: Component<{
}> = props => {

    const [catalog, setCatalog] = createSignal(
        {
            name: 'Shirts',
            description: 'Shirts For Sale',
            slug: 'shirts'
        }
    )

    const [catalogs, setCatalogs] = createSignal([
        {
            name: 'Shirts',
            description: 'Shirts For Sale',
            slug: 'shirts'
        },
        {
            name: 'Shirts',
            description: 'Shirts For Sale',
            slug: 'shirts'
        }
    ])

    const items = [
        {
            src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80',
            id: 'ident-1',
            slug: 'hello',
            name: 'Shirt 1',
            description: '     Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
                '                                elit. Distinctio dolores error iure, perferendis\n' +
                '                                sequi totam. Ad aliquam aperiam atque deleniti dolor\n' +
                '                                dolorem enim esse et in, inventore itaque, pariatur\n' +
                '                                reprehenderit.',
            price: '99.99',
        },
        {
            src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80',
            id: 'ident-1',
            slug: 'hello',
            name: 'Shirt 2',
            description: '     Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
                '                                elit. Distinctio dolores error iure, perferendis\n' +
                '                                sequi totam. Ad aliquam aperiam atque deleniti dolor\n' +
                '                                dolorem enim esse et in, inventore itaque, pariatur\n' +
                '                                reprehenderit.',
            price: '99.99',
        }
    ]

    return (

        <div class="bg-white">

            <div>
                {/**
                 Mobile filter dialog

                 Off-canvas menu for mobile, show/hide based on off-canvas menu state.
                 **/}


                <div class="border-b border-gray-200">
                    <CatalogBreadcrumbs>
                        <For each={catalogs()}>
                            {(crumb) => (
                                <CatalogBreadcrumb slug={crumb?.name} name={crumb?.name} />
                            )}
                        </For>
                    </CatalogBreadcrumbs>
                </div>

                <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                   <CatalogHeader name={catalog()?.name} description={catalog()?.description}/>

                    <div class="pt-12 pb-24 lg:grid lg:grid-cols-1 lg:gap-x-8 xl:grid-cols-4">


                        <section aria-labelledby="product-heading" class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                            <h2 id="product-heading" class="sr-only">{catalog()?.name}</h2>

                            <ul
                                class="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                                <For each={items}>
                                    {(item) => (
                                        <CatalogGridPreviewCard id={item.id} src={item.src} slug={item.slug} name={item.name} description={item.description}/>
                                    )}


                                </For>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        </div>

    );
}

export {CatalogGrid};
