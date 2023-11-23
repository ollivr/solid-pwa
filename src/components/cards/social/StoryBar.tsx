import type {Component} from "solid-js";


const ImageContent: Component<{ src: string; }> = props => {

    return (
        <>


            <div class="mb-5 flex border-b border-gray-100 pb-5">
                {/** Story Bar **/}
                <ul class="flex items-center justify-center space-x-2">
                    {/** Add Story **/}
                    <li class="flex flex-col items-center space-y-2">
                        {/** Ring **/}
                        <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                            <a class="block rounded-full bg-white p-1" href="#">
                                {/** Thumbnail **/}
                                <img class="w-16 rounded-full"
                                     src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                            </a>

                            <button class="absolute transition duration-500 bg-white border-gray-400
                                        h-8 w-8 rounded-full text-white border-2
                                        border-white flex justify-center items-center opacity-80
                                        hover:opacity-60">
                            </button>

                            <i class="absolute mx-1 text-gray-500 mdi mdi-plus mdi-18px"></i>
                        </div>

                        {/** Story Text **/}
                        <span class="font-medium story-text">
                                    You
                                </span>
                    </li>

                    {/** Story #1 **/}
                    <li class="flex flex-col items-center space-y-2">
                        {/** Ring **/}
                        <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                            <a class="block rounded-full bg-white p-1" href="#">
                                {/** Thumbnail **/}
                                <img class="w-16 rounded-full"
                                     src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                            </a>
                        </div>

                        {/** Story Text **/}
                        <span class="story-text">
                                    jett
                                </span>
                    </li>

                    {/** Story #2 **/}
                    <li class="flex flex-col items-center space-y-2">
                        {/** Ring **/}
                        <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                            <a class="block rounded-full bg-white p-1" href="#">
                                {/** Thumbnail **/}
                                <img class="w-16 rounded-full"
                                     src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                            </a>
                        </div>

                        {/** Story Text **/}
                        <span class="story-text">
                                    sky
                                </span>
                    </li>

                    {/** Story #3 **/}
                    <li class="flex flex-col items-center space-y-2">
                        {/** Ring **/}
                        <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                            <a class="block rounded-full bg-white p-1" href="#">
                                {/** Thumbnail **/}
                                <img class="w-16 rounded-full"
                                     src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                            </a>
                        </div>

                        {/** Story Text **/}
                        <span class="story-text">
                                    omen
                                </span>
                    </li>

                    {/** Story #4 **/}
                    <li class="flex flex-col items-center space-y-2">
                        {/** Ring **/}
                        <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100
                                    hover:animate-pulse">
                            <a class="block rounded-full bg-white p-1" href="#">
                                <img class="w-16 rounded-full"
                                     src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                            </a>
                        </div>

                        {/** Story Text **/}
                        <span class="story-text">
                                    sage
                                </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export {ImageContent}


