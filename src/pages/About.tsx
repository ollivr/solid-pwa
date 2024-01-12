import {type Component, createEffect, createMemo, For, Match, Suspense, Switch} from "solid-js";
import {useRouteData}                                                           from "@solidjs/router";

export type ContactProps = {
    authorized_id: string;
    created_at: string | null;
    data: Array<any> | null;
    deleted_at: string | null;
    email: string | null;
    first_name: string;
    formatted: string | null;
    slug: string | null;
    id: string | undefined;
    label: string;
    last_name: string;
    middle_name: string | null;
    model_type: string;
    name: string;
    primary_id: string | undefined;
    state: string;
    updated_at: string | null;
    username: string | null;
    primary: any | null;
    images?: any[];
    documents?: any[];
    pivot?: any | null;
}

export type ContentProps = {
    authorized_id: string;
    created_at: string;
    deleted_at: string;
    data?: string;
    format: string;
    formatted?: string;
    id: string;
    label: string;
    slug?: string;
    model_type: string;
    name: string;
    primary_id?: string;
    src: string;
    state: string;
    updated_at: string;
    pivot?: any;
    primary?: any;
}

const About: Component<{}> = props => {
    const data: 'loading' | 'error' | any = useRouteData();



    return (
        <>

                <Switch>
                    <Match when={data.loading} keyed>
                        <div class={'flex justify-center items-center module-height absolute inset-0'}>

                        </div>
                    </Match>
                    <Match when={data?.error} keyed>
                        ERROR
                    </Match>
                    <Match when={!data?.error}>

                        <div class="bg-gray-100 overflow-hidden">
                            <div class="mx-auto max-w-7xl">

                                <div class="snap-y snap-mandatory h-[90dvh] overflow-scroll">
                                    <div class="px-4 snap-start w-screen h-[90dvh] flex items-center justify-center text-8xl">

                                        <div class="mx-auto max-w-2xl sm:text-center">
                                            <div class="w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                                                <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                                                    <img
                                                      src={data()?.data.images?.[0]?.src}
                                                      class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl" alt="" />
                                                </div>
                                            </div>
                                            <h2 class="py-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data()?.data?.name}</h2>
                                            <p class="mt-4 text-base leading-8 text-gray-600">{data()?.data?.documents?.[0]?.formatted?.[1]}</p>
                                        </div>

                                    </div>
                                    <div class="snap-start w-screen  h-[90dvh] flex items-center justify-center text-8xl">
                                        <div class="snap-x mx-auto snap-mandatory h-[90dvh] overflow-y-hidden flex w-screen overflow-scroll">

                                            <For each={data()?.contacts}>
                                                {(contact: ContactProps) => (
                                                  <div class={'snap-start bg-amber-200 w-screen flex-shrink-0 max-h-[70dvh] py-[10dvh] flex items-center justify-center text-8xl'}>
                                                      <TeammateView
                                                        name={contact.name}
                                                        title={contact.username}
                                                        description={contact?.documents?.[0]?.formatted?.[1]}
                                                        imageSrc={contact?.images?.[0]?.src ?? 'https://imagedelivery.net/jYAILuSxmZBHJW3H5LQP5g/ollivr.png/public'}
                                                      />
                                                  </div>
                                                )}
                                            </For>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>


                    </Match>
                </Switch>

        </>
    )
}

export {About}


const TeammateView: Component<{
    name: string;
    title: string;
    description?: string;
    imageSrc?: string;
}> = props => {




    return (
        <>
            <li class="h-[70dvh] bg-white px-4 flex flex-col gap-6 xl:flex-row rounded-2xl">
                <img class="max-w-[70dvw] flex-none rounded-2xl object-contain"
                     src={props.imageSrc}
                     alt=""/>
                <div class="flex-auto">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {props.name}
                    </h3>
                    <p class="text-base leading-7 text-gray-600">{props.title}</p>
                    <p class="text-base leading-7 text-gray-600">
                        {props.description}
                    </p>
                </div>
            </li>
        </>
    )
}

export {TeammateView}
