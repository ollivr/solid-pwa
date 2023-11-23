import type {Component} from "solid-js";


const TextareaInputCard: Component<{}> = props => {

    return (
        <form class="mb-6 rounded-lg bg-white p-4 shadow">
            <textarea name="message" placeholder="Type something..." class="w-full appearance-none rounded-lg border border-transparent bg-gray-100 p-2 text-sm rounded-tg placeholder-gray-400"></textarea>
            <footer class="mt-2 flex justify-between">
                <div class="flex gap-2">
                    <span class="flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-100 px-2 text-blue-400 transition duration-300 ease-out hover:bg-blue-500 hover:text-white">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </span>
                    <span class="flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-100 px-2 text-blue-400 transition duration-300 ease-out hover:bg-blue-500 hover:text-white">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </span>
                    <span class="flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-100 px-2 text-blue-400 transition duration-300 ease-out hover:bg-blue-500 hover:text-white">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                    </span>
                </div>
                <button class="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white shadow-lg">Send
                    <svg class="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </footer>
        </form>
    )
}

export {TextareaInputCard}
