import type {Component, JSXElement} from "solid-js";


const ItemListCard: Component<{
    children: JSXElement;
}> = props => {

    return (

        <div
            class="flex items-center justify-center bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe] h-screen p-6">
            <div
                class="flex w-full flex-none flex-col rounded-lg border border-gray-300 bg-white divide-y md:w-1/2 lg:w-1/3">
                <div class="flex flex-col space-y-2 divide-y">
                    {props.children}
                </div>
                <div class="p-4">
                    <button class="w-full rounded-md border p-2 transition hover:opacity-60">View all</button>
                </div>
            </div>
        </div>
    )
}

const ItemCard: Component<{}> = props => {

    return (
        <div class="mt-6 flex rounded-lg bg-white p-2 shadow">
            <img
                src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                alt="Just a flower" class="h-16 w-16 rounded-xl object-cover"/>
            <div class="flex w-full flex-col justify-center px-2 py-1">
                <div class="flex items-center justify-between">
                    <div class="flex flex-col">
                        <h2 class="text-sm font-medium">Massive Dynamic</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="h-5 w-5 cursor-pointer text-gray-500 hover:text-blue-400" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                </div>
                <div class="flex pt-2 text-sm text-gray-400">
                    <div class="mr-auto flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <p class="font-normal">4.5</p>
                    </div>
                    <div class="flex items-center font-medium text-gray-900">
                        $1800
                        <span class="text-sm font-normal text-gray-400"> /wk</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ItemCard}


const ItemCardAlt: Component<{}> = props => {

    return (
        <div class="flex items-center justify-between p-6 space-x-6">
            <div class="flex items-center space-x-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="h-14 w-14 rounded-full"
                     alt=""/>
                <div class="flex flex-col space-y-2">
                    <span>Leonard Krashner</span>
                    <span>@Leonardkrashner</span>
                </div>

            </div>
            <div>
                <button class="rounded-md border px-4 py-2">
                    View
                </button>
            </div>
        </div>

    )
}

export {ItemCardAlt}

