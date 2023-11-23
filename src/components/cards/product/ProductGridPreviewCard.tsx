import {Component, Show} from "solid-js";

const ProductGridPreviewCard: Component<{
    slug: string;
    name: string;
    price: string;
    stock: string;
    src: string;
    alt: string;
}> = props => {


    return (
        <div
            class="m-auto text-gray-500 space-y-2 md:px-12 xl:container rounded">
            <div class="grid gap-2 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3 lg:gap-0 xl:grid-cols-4">
                <div
                    class="relative rounded-lg border border-gray-100 bg-white px-4 py-2 shadow-2xl shadow-gray-600/10 transition duration-300 group hover:border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent dark:hover:border-gray-700 dark:hover:bg-gray-800 lg:hover:shadow-gray-600/10 dark:lg:bg-transparent">
                    <div class={'flex flex-row'}>
                        <div class="relative items-center">
                            <h3 class="text-xl font-semibold text-gray-800 transition dark:text-white capitalize">
                                <a href={props.slug ?? 'slug'}>{props.name ?? 'name'}</a>
                            </h3>
                            <Show when={props.price}>
                                <p class="text-sm text-gray-600 dark:text-gray-300">
                                    ${props.price}
                                </p>
                            </Show>
                            <Show when={props.stock}>
                                <p class="text-sm text-gray-600 dark:text-gray-300">
                                    {props.stock} in Stock
                                </p>
                            </Show>
                        </div>
                        <img
                            src={props.src ?? 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80'}
                            class="absolute top-0 right-2 h-full w-32 p-2 object-cover"
                            width="512"
                            height="512"
                            alt={props.alt ?? 'alt'}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export {ProductGridPreviewCard};
