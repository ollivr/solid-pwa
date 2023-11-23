import type {Component} from "solid-js";


const ContactCard: Component<{}> = props => {

    return (
        <div class="flex justify-between rounded-lg bg-white/30 px-4 py-6">
            <div class="flex items-center space-x-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="h-14 w-14 rounded-full" alt="" />
                <div class="flex flex-col space-y-1">
                    <span class="font-bold">Leonard Krashner</span>
                    <span class="text-sm">Yeah same question here too 🔥</span>
                </div>
            </div>
            <div class="flex-none px-4 py-2 text-xs text-stone-600 md:text-sm">
                17m ago
            </div>
        </div>
    )
}

export {ContactCard}
