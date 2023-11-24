import {type Component, For} from "solid-js";
import {classNames}          from "../../../app";

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
    images: ImageProps[];
}> = props => {

    return (
        <>
            <div class="relative isolate py-10">
                <div
                    class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    aria-hidden="true">
                    <div
                        class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
                </div>
                <div class="overflow-hidden">
                    <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                        <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{props.title}</h1>
                                <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">{props.description}</p>
                                <div class="mt-10 flex items-center gap-x-6">
                                    <a href="#"
                                       class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        {props.linkTitle ?? 'Contact'}
                                    </a>
                                    <a href="#"
                                       class="text-sm font-semibold leading-6 text-gray-900">{props.linkSubTitle ?? 'More'}
                                        <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                            {/* part 1 */}
                            <div
                                class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">

                                <div
                                    class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div class="relative">
                                        <img src={props.imageSrc} alt=""
                                             class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                                        <div
                                            class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                    </div>
                                </div>


                                <For each={props.images}>
                                    {(image: ImageProps, index) => (
                                        <div class={classNames(
                                            index() % 2 == 0 ? 'w-44 flex-none space-y-8 pt-32 sm:pt-0' : 'mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36',
                                        )}>
                                            <div class="relative">
                                                <img src={props.images[index()]?.src} alt=""
                                                     class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                                                <div
                                                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                    )}

                                </For>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export {HeroWithTiles}
