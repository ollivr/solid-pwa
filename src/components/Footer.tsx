

import { A } from '@solidjs/router';
import type {Component} from "solid-js";



const Footer: Component<{}> = props => {

    function browserHistory(e) {
        if(e !== '/login' ?? e !== '/register') {
            window.history.back();
        }
    }

    return (
        <nav class="fixed right-0 bottom-0 left-0 bg-gray-100">


            <div class="flex justify-center">
                <div class="px-6 py-1 space-x-4 sm:block">

                    <A
                        href={`/`}
                        class="text-sm text-gray-700"
                    >
                        Dashboard
                    </A>

                    <A
                        href={`/login`}
                        class="text-sm text-gray-700"
                    >
                        Log in
                    </A>

                    <A
                        href={`/register`}
                        class="ml-4 text-sm text-gray-700"
                    >
                        Register
                    </A>
                </div>
            </div>
        </nav>
    )
}

export {Footer}
