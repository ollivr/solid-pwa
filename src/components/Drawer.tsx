import {Component, createEffect, createSignal, JSXElement} from 'solid-js';

import {bars_4, xMark} from "solid-heroicons/solid";
import {Icon}          from "solid-heroicons";

const Drawer: Component<{
    isOpen?: boolean;
    enableButton?: boolean;
    children?: JSXElement,
}> = props => {

    const [enableButton] = createSignal(props?.enableButton ?? false);

    const [isOpen, setIsOpen] = createSignal(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    createEffect(() => {

        setIsOpen(props?.isOpen)

    })

    return (
        <>


            {enableButton() && (

                <div class="flow-root lg:ml-8">
                    <button
                        onClick={openModal}
                        type={'button'} class="-m-2 flex items-center p-2 group">
                        <Icon path={bars_4}
                              class="h-6 w-6 flex-shrink-0 stroke-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                        />
                    </button>
                </div>


            )}


            {isOpen() && (

                <div
                    class="relative z-10"

                >

                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>

                    <div class="fixed inset-0"/>
                    <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">


                                <div class="pointer-events-auto w-screen max-w-md bg-white">
                                    <div
                                        class="absolute inset-y-0 z-50 flex h-full w-screen max-w-md flex-col overflow-y-scroll scrollbar-hide bg-white py-6 shadow-xl">
                                        <div class="px-4 sm:px-6">
                                            <div class="flex items-start justify-between">

                                                <h3
                                                    class="ml-4 text-base leading-6 text-gray-900"
                                                >
                                                    TEST
                                                </h3>

                                                <div class="mr-10 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring focus:ring-transparent"
                                                        onClick={closeModal}
                                                    >
                                                        <span class="sr-only">Close panel</span>
                                                        <Icon path={xMark} class="h-6 w-6 stroke-gray-400"
                                                              aria-hidden="true"/>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="relative mt-2 flex-1">{props.children || ''}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )}

        </>
    );
}

export {Drawer};
