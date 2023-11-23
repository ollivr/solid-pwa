import type {Component} from "solid-js";


const PostHeaderCard: Component<{
    src: string;
    username: string;
    name: string;
    affiliate: string;
    timeAgo: string;
}> = props => {

    return (
        <div class="mx-3 flex flex-row px-2 py-3">
            <div class="h-auto w-auto rounded-full">
                <img class="h-12 w-12 cursor-pointer rounded-full object-cover shadow" alt="User avatar" src={props.src ?? `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80`}/>
            </div>
            <div class="mt-1 mb-2 ml-4 flex flex-col">
                <div class="text-sm font-semibold text-gray-600">{props.username ?? props.name}</div>
                <div class="mt-1 flex w-full">
                    <div class="mr-1 cursor-pointer text-xs text-blue-700 font-base">
                        {props?.affiliate}
                    </div>
                    <div class="text-xs font-thin text-gray-400">
                        • {props.timeAgo}
                    </div>
                </div>
            </div>
        </div>
    )
}

export {PostHeaderCard}
