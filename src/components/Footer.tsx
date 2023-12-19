

import { A } from '@solidjs/router';
import type {Component} from "solid-js";



const Footer: Component<{
    title: string;
    today: any[]
}> = props => {

    function browserHistory(e) {
        if(e !== '/login' ?? e !== '/register') {
            window.history.back();
        }
    }

    return (
        <footer class="bg-gray-50 fixed bottom-0 right-0 left-0 py-2">
            <div class="">
                <div class="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
                    <p class="text-center text-xs leading-5 text-gray-500">&copy; {props.today[4]} {props.title}, All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export {Footer}
