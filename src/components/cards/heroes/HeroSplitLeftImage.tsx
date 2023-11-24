
import {classNames}          from "../../../app";
import type {Component}      from "solid-js";

export type ImageProps = {
    name: string;
    src: string;
}

const HeroWithTiles: Component<{
    title: string;
    description: string;
    linkTitle: string;
    linkSubTitle: string;
    imageSrc: string;
    logo: string;
    images: ImageProps[];
}> = props => {

    return (
        <>
            <div class="relative isolate overflow-hidden bg-white">
                <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <img class="h-11 w-11 object-cover rounded-md" src={props.logo}
                             alt="{{ $title }}" />
                            <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                {props.title}
                            </h1>
                            <p class="mt-6 text-lg leading-8 text-gray-600">
                                {props.description}
                            </p>
                            <div class="mt-10 flex items-center gap-x-6">
                                <a href="#"
                                   class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                                                                                                                                                                                                                                                               started</a>
                                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                                    aria-hidden="true">→</span></a>
                            </div>
                    </div>
                    <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img src={props.imageSrc} alt="App screenshot" width="2432" height="1442"
                                     class="w-[76rem] origin-right rounded-md shadow-2xl ring-1 ring-gray-900/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export {HeroWithTiles}
