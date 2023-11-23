import type {Component, JSXElement} from "solid-js";
import {For, Match, Show, Switch} from "solid-js";
import {ImagePreview}             from "../content/ImagePreview";
import {ImageContent}             from "../content/ImageContent";


const PostContainer: Component<{children: JSXElement;}> = props => {

    return <div class="mt-5 flex grid w-full grid-cols-2 items-center justify-center overflow-y-scroll space-x-4">

        {props?.children || ''}


    </div>
}
export {PostContainer}






const ImageGallery: Component<{images: any;}> = props => {

    return (<>

        <div class="mx-3 mt-6 mb-7 px-2 text-sm font-medium text-gray-400">
            <div class="col-span-2 grid grid-cols-6 gap-2">

                <Switch>
                    <Match when={props.images?.length === 1} keyed>

                        <ImagePreview src={props.images?.[0]?.src} />

                    </Match>

                    <Match when={props.images?.length === 2} keyed>

                        <For each={props.images}>
                            {(image) => (
                                <div class="col-span-3 overflow-hidden rounded-xl max-h-[14rem]">
                                    <ImageContent {...image}/>
                                </div>
                            )}
                        </For>

                    </Match>

                    <Match when={props.images?.length === 3} keyed>

                        <For each={props.images}>
                            {(image) => (
                                <div class="col-span-2 overflow-hidden rounded-xl max-h-[10rem]">
                                    <ImageContent {...image}/>
                                </div>
                            )}
                        </For>

                    </Match>


                    <Match when={props.images?.length === 4} keyed>

                        <For each={props.images}>
                            {(image) => (
                                <div class="col-span-3 overflow-hidden rounded-xl max-h-[14rem]">
                                    <ImageContent {...image}/>
                                </div>
                            )}
                        </For>

                    </Match>


                    <Match when={props.images?.length === 4} keyed>

                        <For each={props.images}>
                            {(image) => (
                                <div class="col-span-3 overflow-hidden rounded-xl max-h-[14rem]">
                                    <ImageContent {...image}/>
                                </div>
                            )}
                        </For>

                    </Match>


                    <Match when={props.images?.length === 5} keyed>

                        <For each={props.images}>
                            {(image: any, index) => (
                                <div class={index() < 2 ? `overflow-hidden rounded-xl col-span-3 max-h-[14rem]` : 'overflow-hidden rounded-xl col-span-2 max-h-[10rem]'}>
                                    <ImageContent {...image}/>
                                </div>
                            )}
                        </For>

                    </Match>

                    <Match when={props.images?.length > 5} keyed>

                        <For each={props.images}>
                            {(image: any, index) => (

                                <>
                                    <Show when={index() < 2}>
                                        <div class={`overflow-hidden rounded-xl col-span-3 max-h-[14rem]`}>
                                            <ImageContent {...image} />
                                        </div>
                                    </Show>

                                    <Show when={index() < 5} keyed>
                                        <div class={`overflow-hidden rounded-xl col-span-2 max-h-[10rem]`}>
                                            <ImageContent {...image} />
                                        </div>
                                    </Show>


                                    <Show when={index() === 5} keyed>
                                        <div class={`relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]`}>
                                            <div class="absolute inset-0 flex items-center justify-center bg-slate-900/80 text-xl text-white">
                                                + {props.images?.length}
                                            </div>
                                            <ImageContent {...image} />
                                        </div>
                                    </Show>
                                </>
                            )}
                        </For>
                    </Match>

                </Switch>
            </div>
        </div>

    </>)
}

export {ImageGallery}


const PostTitle: Component<{images: any;}> = props => {

    return (<>

        <div class="mx-3 mb-2 px-2 font-semibold text-gray-600">Dummy text of the printing and typesetting industry</div>

    </>)

}

export {PostTitle}

const PostMessage: Component<{images: any;}> = props => {


    return (<>

        <div class="mx-3 mb-6 px-2 text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>

    </>)
}
export {PostMessage}


const PostActivityBar: Component<{}> = props => {


    return (<>

        <div class="mb-4 flex justify-start border-t border-gray-100">
            <div class="mt-1 flex w-full pt-2 pl-5">
                    <span class="mr-2 h-8 w-8 cursor-pointer rounded-full border bg-white px-2 pt-2 text-center text-gray-400 transition duration-300 ease-out hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                    </span>
                <img class="inline-block h-8 w-8 cursor-pointer rounded-full border-2 border-white object-cover text-white shadow-sm" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                <img class="-ml-2 inline-block h-8 w-8 cursor-pointer rounded-full border-2 border-white object-cover text-white shadow-sm" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                <img class="-ml-2 inline-block h-8 w-8 cursor-pointer rounded-full border-2 border-white object-cover text-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt=""/>
                <img class="-ml-2 inline-block h-8 w-8 cursor-pointer rounded-full border-2 border-white object-cover text-white shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt=""/>
            </div>
            <div class="mt-1 flex w-full justify-end pt-2 pr-5">
                    <span class="mr-2 h-8 w-8 cursor-pointer rounded-full bg-blue-100 px-2 py-2 text-center text-blue-400 transition duration-300 ease-out hover:bg-blue-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                    </span>
                <span class="h-8 cursor-pointer rounded-full bg-gray-100 px-2 py-2 text-center text-gray-100 transition duration-300 ease-out hover:bg-gray-50">
                        <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </span>
            </div>
        </div>

    </>)

}
export {PostActivityBar}

const PostAnalyticsBar: Component<{}> = props => {


    return (<>

        <div class="flex w-full border-t border-gray-100">
            <div class="mx-5 mt-3 flex flex-row text-xs">
                <div class="mr-4 mb-2 flex items-center rounded-md font-normal text-gray-700">Comments:<div class="ml-1 text-gray-400 text-ms"> 30</div></div>
                <div class="mr-4 mb-2 flex items-center rounded-md font-normal text-gray-700">Views: <div class="ml-1 text-gray-400 text-ms"> 60k</div></div>
            </div>
            <div class="mx-5 mt-3 flex w-full justify-end text-xs">
                <div class="mr-4 mb-2 flex items-center rounded-md text-gray-700">Likes: <div class="ml-1 text-gray-400 text-ms"> 120k</div></div>
            </div>
        </div>

    </>)

}
export {PostAnalyticsBar}

const PostCommentCard: Component<{
    src: string;
    username: string;
    name: string;
    comment: string;
    affiliate: string;
    timeAgo: string;
}> = props => {

    return (<>
        <div class="flex p-4 text-black antialiased">
            <img class="mt-1 mr-2 h-8 w-8 rounded-full" src={props.src ?? `https://picsum.photos/id/1027/200/200`}/>
            <div>
                <div class="rounded-lg bg-gray-100 px-4 pt-2 pb-2.5">
                    <div class="text-sm font-semibold leading-relaxed">{props.username ?? props.name}</div>
                    <div class="text-xs leading-snug md:leading-normal">{props.comment}</div>
                </div>
                <div class="text-xs text-gray-500 mt-0.5">{props.timeAgo}</div>
                <div class="float-right -mt-8 flex items-center rounded-full border border-white bg-white shadow mr-0.5">
                    <svg class="z-20 h-5 w-5 rounded-full bg-white p-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#18AFFF"></stop><stop offset="100%" stop-color="#0062DF"></stop></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"></feColorMatrix></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path></defs><g fill="none"><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"></path></g></svg>
                    <svg class="h-5 w-5 rounded-full bg-white p-0.5 -ml-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="a2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6680"></stop><stop offset="100%" stop-color="#E61739"></stop></linearGradient><filter id="c2" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"></feColorMatrix></filter><path id="b2" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></defs><g fill="none"><path fill="white" d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"></path></g></svg>
                    <span class="ml-1 text-sm text-gray-500 pr-1.5">3</span>
                </div>
            </div>
        </div>
    </>)
}
export {PostCommentCard}

const PostCommentReplyCard: Component<{
    src: string;
}> = props => {

    return (<>

        <div class="relative flex w-full max-w-xl items-center self-center overflow-hidden p-4 text-gray-600 focus-within:text-gray-400">
            <img class="mr-2 h-10 w-10 cursor-pointer rounded-full object-cover shadow" alt="User avatar" src={props.src ?? `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80`}/>
            <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                    <button type="submit" class="p-1 hover:text-blue-500 focus:shadow-none focus:outline-none">
                    <svg class="h-6 w-6 text-gray-400 transition duration-300 ease-out hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>

                    </button>
                </span>
            <input type="search" class="w-full appearance-none border border-transparent bg-gray-100 py-2 pr-10 pl-4 text-sm rounded-tg placeholder-gray-400" style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off"/>
        </div>

    </>)

}
export {PostCommentReplyCard}


const PostMediaCounts: Component<{
    src: string;
}> = props => {

    return (

        <div class="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                hover:backdrop-blur-xl transition-all duration-150 delay-100">
        <div class="mx-6 flex text-lg font-light text-gray-50 text-gray-600">
            <i class="mr-2 text-gray-100 mdi mdi-heart-half-full mdi-24px"></i>
            23K
        </div>

        <div class="flex text-lg font-light text-gray-50 text-gray-600">
            <i class="mr-2 text-gray-100 mdi mdi-comment-processing-outline mdi-24px"></i>
            1.4K
        </div>

        <div class="mx-4 text-lg font-light text-gray-50 text-gray-600">
            <i class="mx-1 mt-3 text-gray-100 mdi mdi-bookmark-outline mdi-24px"></i>
        </div>
    </div>
    )

}
export {PostMediaCounts}


const PostMedia: Component<{
    src: string;
}> = props => {

    return (

        <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">

            {/** Post Item **/}
            <img class="h-full w-full rounded-3xl"
                 src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>

            {/** Post Owner **/}
            <div class="absolute top-4 left-4 rounded-xl border border-gray-300 backdrop-blur-lg">
                <a href="#" class="flex px-3 p-1.5">
                    <img src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                         class="mr-2 h-8 w-8 rounded-full border border-gray-400"/>

                    <div class="mt-1 text-sm font-bold text-gray-50 text-gray-600 hover:underline">
                        EgoistDeveloper
                    </div>
                </a>
            </div>


            {/** Post Counts **/}

        </div>
    )

}
export {PostMedia}
