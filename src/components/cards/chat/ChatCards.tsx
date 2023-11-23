import type {Component} from "solid-js";

const ChatAwayBubble: Component<{
    author: {
        imageSrc: string;
        name: string;
        message: string;
        timeAgo: string;
    }
}> = props => {


    return (
        <>

            <div class="flex items-end space-x-2">
                <div class="relative z-10 h-8 w-8 flex-shrink-0 rounded-full">
                    <div class="absolute inset-0 animate-pulse rounded-full bg-gray-200">
                    </div>


                    <img class="absolute inset-0 rounded-full object-cover"
                         src={props.author.imageSrc}
                         alt={props.author.name}/>
                </div>

                <div class="relative">
                    <div class="absolute bottom-0 left-0 -ml-3 h-6 w-6 rounded-br-2xl bg-gray-100"></div>
                    <div class="absolute bottom-0 left-0 -ml-3 h-6 w-3 rounded-br-2xl bg-white"></div>

                    <div class="rounded-2xl bg-gray-100 p-3">
                        <p class="text-sm font-medium">
                            {props.author?.name}
                            <span class="text-gray-500">
                               {props.author.timeAgo}
                                </span>
                        </p>

                        <p>

                            {props.author.message}
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

const ChatHomeBubble: Component<{
    home: {
        imageSrc: string;
        name: string;
        message: string;
        timeAgo: string;
    }
}> = props => {


    return (
        <>

            <div class="flex items-end justify-end space-x-2">
                <div class="relative">
                    <div class="absolute right-0 bottom-0 -mr-3 h-6 w-6 rounded-bl-2xl bg-blue-600"></div>
                    <div class="absolute right-0 bottom-0 -mr-3 h-6 w-3 rounded-bl-2xl bg-white"></div>

                    <div class="rounded-xl bg-blue-600 px-3 pt-1 pb-3 text-white">
                        <p>
                            {props.home.message}
                        </p>


                        <p class="text-xs text-blue-200">
                            {props.home.timeAgo}
                        </p>

                    </div>
                </div>


            </div>

        </>
    )
}
