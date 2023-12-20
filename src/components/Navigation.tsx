import {A}                             from "@solidjs/router";
import {Component, createSignal, Show} from "solid-js";

import {Drawer}          from "./Drawer";
import {bell, calendar}  from "solid-heroicons/solid";
import {DailyActivities} from "./cards/activities/DailyActivities";


const Navigation: Component<{
    logo?: string;
    title?: string;
    today: any[]
}> = props => {

    const [showTitle, setShowTitle] = createSignal(true)
    const [logo, setLogo] = createSignal('/icons/icon-192x192.png');
    const [title, setTitle] = createSignal('Ollivr');

    console.log(props.logo)


    return (
        <>

            <div class="fixed top-0 right-0 left-0 z-10 bg-white">
                <header class="relative bg-white">
                    <nav aria-label="Top" class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="border-b border-gray-200 px-4 sm:px-0 sm:pb-0">
                            <div class="flex h-16 items-center justify-between">
                                {/* Logo */}
                                <div class="flex flex-1">
                                    <Show
                                        fallback={
                                            <A href="/">
                                                <span class="sr-only">{title()}</span>
                                                <h1 class={'text-xl'}>{props.title}</h1>
                                            </A>
                                        }
                                        when={props.logo}>
                                        <A class={'flex justify-start items-center w-full space-x-2'} href="/">

                                            <img
                                                class="h-12 object-contain p-1 rounded-lg"
                                                src={props.logo}
                                                alt={title()}
                                            />
                                            <h1 class={'hidden w-full sm:block text-xl'}>{props.title}
                                                <span class="sr-only">{title()}</span></h1>
                                        </A>
                                    </Show>

                                </div>

                                {/* Flyout menus */}


                                <div class="flex items-center space-x-6 justify-end">

                                    <Drawer
                                        title={'Notifications'}
                                        subTitle={`${props.today[0]}, ${props.today[1]}  ${props.today[3]}, ${props.today[4]}`}
                                        icon={bell}
                                        className={'items-center pt-0.5'}
                                        enableButton>
                                        <div class={'p-4'}>


                                        </div>
                                    </Drawer>

                                    <Drawer
                                        title={'Activities'}
                                        subTitle={`${props.today[0]}, ${props.today[1]}  ${props.today[3]}, ${props.today[4]}`}
                                        icon={calendar}
                                        className={'items-center p-0.5'}
                                        enableButton>
                                        <div class={'p-4'}>

                                            <DailyActivities/>


                                        </div>
                                    </Drawer>


                                    <Drawer
                                        title={props.title}
                                        subTitle={`${props.today[0]}, ${props.today[1]}  ${props.today[3]}, ${props.today[4]}`}
                                        className={'p-0.5'}
                                        enableButton>
                                        <div class={'p-4 w-full'}>
                                            <div class={'flex flex-col space-y-4'}>
                                                <A
                                                    class={'text-xl font-semibold px-4 flex justify-between  items-center'}
                                                    href={'/'}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                         data-slot="icon" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                                    </svg>

                                                    <span>Home</span>
                                                </A>


                                                <A
                                                    activeClass={'text-orange-600'}
                                                    inactiveClass={'text-gray-600'}
                                                    class={'text-xl font-semibold px-4 flex justify-between  items-center'}
                                                    href={'/about'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                         data-slot="icon" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                                                    </svg>

                                                    <span>About</span>
                                                </A>

                                            </div>
                                        </div>
                                    </Drawer>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </>
    )

}

export {Navigation}
