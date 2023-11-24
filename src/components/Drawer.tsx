import {Component, createEffect, createSignal, JSXElement} from 'solid-js';
import {Transition}                                        from "solid-transition-group"

import {bars_4, xMark}  from "solid-heroicons/solid";
import {Icon}           from "solid-heroicons";
import type {IconProps} from "../app";
import {classNames}     from "../app";
import {Portal}         from "solid-js/web";

const Drawer: Component<{
    title?: string;
    subTitle?: string;
    icon?: IconProps,
    isOpen?: boolean;
    enableButton?: boolean;
    className?: string;
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

                <div class="lg:ml-8">
                    <button
                        onClick={openModal}
                        type={'button'} class="flex items-center">
                        <Icon path={props.icon ?? bars_4}
                              class={classNames(
                                  props.className,
                                  'h-6 w-6 flex-shrink-0 stroke-gray-400 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                        />
                    </button>
                </div>


            )}

            <Portal>
                <Transition name="slide-fade">
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
                                                class="absolute inset-y-0 z-30 flex h-full w-screen max-w-md flex-col bg-white py-2 shadow-xl">
                                                <div
                                                    class="sticky z-50 top-0 left-0 right-0 header py-2 min-h-[60px] border-b border-slate-100 ">
                                                    <div class="px-7 flex justify-between items-center">
                                                        <div class="heading">
                                                            <p class="text-xl font-semibold leading-tight text-gray-800">
                                                                {props.title}
                                                            </p>
                                                            <p class="text-gray-600">{props.subTitle}</p>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            class="absolute top-0 right-0 py-3 px-4 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring focus:ring-transparent"
                                                            onClick={closeModal}
                                                        >
                                                            <span class="sr-only">Close panel</span>
                                                            <Icon path={xMark} class="h-6 w-6 stroke-gray-400"
                                                                  aria-hidden="true"/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    class="relative mt-2 flex-1 overflow-y-scroll scrollbar-hide ">{props.children || ''}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </Transition>
            </Portal>
        </>
    );
}

export {Drawer};
