import type {Component} from "solid-js";

const FeedHeader: Component<{}> = props => {


    return (
        <>

            <div class="mb-5 flex border-b border-gray-100 pb-5">
                <div class="flex-1">
                    {/** Logo **/}
                    <img
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"/>
                </div>

                <div class="w-64 flex-1"></div>

                {/** Notification Area **/}
                <div class="w-full flex-1">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-end-7">
                            <div class="relative flex place-items-end space-x-5">
                                {/** Notifications Button **/}
                                <div class="relative">
                                    {/** Red Dot **/}
                                    <div
                                        class="absolute right-0 cursor-pointer rounded-full bg-red-400 p-1 red-dot">
                                    </div>
                                    <button class="p-1 border border-gray-200 rounded-full
                                                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200
                                                transition-all duration-150 delay-100">
                                        <i class="mx-1 text-gray-500 mdi mdi-bell-outline mdi-18px">Likes</i>
                                    </button>
                                </div>

                                {/** Messages Button **/}
                                <div class="relative">
                                    {/** Red Dot With Counts **/}
                                    <div
                                        class="absolute right-0 cursor-pointer rounded-full bg-red-400 p-1 text-white red-dot-count">
                                        99+
                                    </div>
                                    <button class="p-1 border border-gray-200 rounded-full
                                                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200
                                                transition-all duration-150 delay-100">
                                        <i
                                            class="mx-1 text-gray-500 mdi mdi-message-reply-outline mdi-18px"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export {FeedHeader}
