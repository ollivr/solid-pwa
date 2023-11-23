import type {Component} from "solid-js";


const ImageLandscapeCard: Component<{}> = props => {

    return (
        <div class="relative my-2 flex h-64 w-full cursor-pointer flex-col justify-between overflow-hidden rounded rounded-3xl bg-white bg-cover object-cover object-center text-gray-800 shadow-md" style="background-image:url('https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80')">
            <div class="absolute inset-0 z-0 bg-gradient-to-t from-green-400 to-blue-400 opacity-50"></div>
            <div class="relative flex h-72 w-full flex-row items-end">
                <div class="absolute top-0 right-0 m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 rounded-full p-2 text-gray-200 transition duration-200 ease-in hover:bg-white hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                </div>
                <div class="z-10 flex w-full flex-col rounded-lg p-6">
                    <h4 class="mt-1 truncate text-xl font-semibold leading-tight text-white">Loremipsum..
                    </h4>
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col">
                            <h2 class="flex items-center text-sm font-normal text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                Dubai
                            </h2>
                        </div>
                    </div>
                    <div class="flex pt-4 text-sm text-gray-300">
                        <div class="mr-auto flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <p class="font-normal">4.5</p>
                        </div>
                        <div class="flex items-center font-medium text-white">
                            $1800
                            <span class="text-sm font-normal text-gray-300"> /wk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ImageLandscapeCard}
