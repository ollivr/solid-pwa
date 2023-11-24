import {A}                  from "@solidjs/router";
import {Component, createSignal, Show} from "solid-js";

import {Drawer} from "./Drawer";
import {bell, calendar, magnifyingGlass, userCircle} from "solid-heroicons/solid";
import {DailyActivities}                             from "./cards/activities/DailyActivities";


const Navigation: Component<{
    logo?: string;
    title?: string;
}> = props => {

    const [showTitle, setShowTitle] = createSignal(true)
    const [logo, setLogo] = createSignal('/icons/icon-192x192.png');
    const [title, setTitle] = createSignal('Ollivr');


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
                                                <img
                                                    class="h-12 w-auto"
                                                    src={logo()}
                                                    alt={title()}
                                                />
                                            </A>
                                        }
                                        when={showTitle()}>
                                        <A href="/">
                                            <span class="sr-only">{title()}</span>
                                            <h1 class={'text-xl'}>{title()}</h1>
                                        </A>
                                    </Show>

                                </div>

                                {/* Flyout menus */}


                                <div class="flex items-center space-x-6 justify-end">

                                    <Drawer
                                        title={'Notifications'}
                                        subTitle={'Wed, March 23'}
                                        icon={bell}
                                        className={'items-center pt-0.5'}
                                        enableButton>
                                        <div class={'p-4'}>



                                        </div>
                                    </Drawer>

                                    <Drawer
                                        title={'Activities'}
                                        subTitle={'Wed, March 23'}
                                        icon={calendar}
                                        className={'items-center p-0.5'}
                                        enableButton>
                                        <div class={'p-4'}>

                                            <DailyActivities/>


                                        </div>
                                    </Drawer>


                                    <Drawer
                                        className={'p-0.5'}
                                        enableButton>
                                        <div class={'p-4'}>

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
