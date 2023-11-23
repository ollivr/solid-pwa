import type {Component} from "solid-js";


const SocialCard: Component<{}> = props => {

    return (
        <aside class="">
            <div class="rounded-lg bg-white p-10 shadow">
                <div class="flex flex-col items-center gap-1 text-center">
                    <img class="mb-4 h-32 w-32 rounded-full bg-white p-2 shadow" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" alt=""/>
                    <p class="font-semibold">John Doe</p>
                    <div class="flex items-center justify-center text-sm leading-normal text-gray-400">
                        <svg viewBox="0 0 24 24" class="mr-1" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Los Angeles, California
                    </div>
                </div>
                <div class="my-3 flex items-center justify-center gap-2">
                    <div class="mx-4 text-center font-semibold">
                        <p class="text-black">102</p>
                        <span class="text-gray-400">Posts</span>
                    </div>
                    <div class="mx-4 text-center font-semibold">
                        <p class="text-black">102</p>
                        <span class="text-gray-400">Followers</span>
                    </div>
                    <div class="mx-4 text-center font-semibold">
                        <p class="text-black">102</p>
                        <span class="text-gray-400">Folowing</span>
                    </div>
                </div>
            </div>

        </aside>


    )
}

export {SocialCard}
