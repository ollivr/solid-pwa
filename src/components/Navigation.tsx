import {A}                  from "@solidjs/router";
import {Component, createSignal, Show} from "solid-js";

import {Drawer} from "./Drawer";
import {Icon}                        from "solid-heroicons";
import {magnifyingGlass, userCircle} from "solid-heroicons/solid";


const Navigation: Component<{
    logo?: string;
    title?: string;
}> = props => {

    const [showTitle, setShowTitle] = createSignal(true)
    const [logo, setLogo] = createSignal('/icons/icon-192x192.png');
    const [title, setTitle] = createSignal('Ollivr');


    return (
        <>

            <div class="fixed top-0 right-0 left-0 z-10 bg-white">
                <header class="relative bg-white">
                    <nav aria-label="Top" class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="border-b border-gray-200 px-4 sm:px-0 sm:pb-0">
                            <div class="flex h-16 items-center justify-between">
                                {/* Logo */}
                                <div class="flex flex-1">
                                    <Show
                                        fallback={
                                            <A href="/">
                                                <span class="sr-only">{title()}</span>
                                                <img
                                                    class="h-12 w-auto"
                                                    src={logo()}
                                                    alt={title()}
                                                />
                                            </A>
                                        }
                                        when={showTitle()}>
                                        <A href="/">
                                            <span class="sr-only">{title()}</span>
                                            <h1 class={'text-xl'}>{title()}</h1>
                                        </A>
                                    </Show>

                                </div>

                                {/* Flyout menus */}


                                <div class="flex flex-1 items-center justify-end">
                                    {/* Search */}
                                    <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">Search</span>
                                        <Icon path={magnifyingGlass} class="h-6 w-6 stroke-gray-400"/>
                                    </a>

                                    {/* Cart */}
                                    <div class="ml-4 flow-root lg:ml-8">
                                        <a href="#" class="-m-2 flex items-center p-2 group">
                                            <Icon path={userCircle}
                                                  class="h-6 w-6 flex-shrink-0 stroke-gray-400 group-hover:text-gray-500"

                                            />
                                        </a>
                                    </div>


                                    <Drawer enableButton>
                                        <div class={'p-4'}>


                                        </div>
                                    </Drawer>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </>
    )

}

export {Navigation}
