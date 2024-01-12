import {type Component, For, Match, Switch} from 'solid-js';
import {useRouteData}                       from '@solidjs/router';

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

                    <div class="bg-gray-100 overflow-hidden fixed inset-x-0 top-14 bottom-0">
                        <div class="mx-auto max-w-7xl">

                            <div>
                                <img class="h-28 w-full object-cover"
                                     src={data()?.data.images?.[0]?.src}
                                     alt=""/>
                            </div>
                            <div class="max-w-5xl px-4 sm:px-6 lg:px-8">
                                <div class="-mt-16 sm:flex sm:items-end sm:space-x-5">
                                    <div class="flex">
                                        <div class={'flex justify-start space-x-4 items-end'}>
                                            <img
                                                class="h-24 w-24 object-cover rounded-lg ring-4 ring-white sm:h-32 sm:w-32"
                                                src={data()?.data.images?.[0]?.src}
                                                alt=""/>

                                            <span class={'sm:hidden'}>
                      <IconBadge title={data()?.data?.model_type}/>
                    </span>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-2 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1 border-b border-slate-200">
                                        <div class="py-2 min-w-0 flex-1">
                                            <h1 class="truncate text-2xl font-bold text-gray-900 flex justify-start space-x-4 items-baseline">
                                                <span>{data()?.data?.name}</span>
                                                <span class={'hidden sm:block'}>
                        <IconBadge title={data()?.data?.model_type}/>
                        </span>
                                            </h1>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="snap-y snap-mandatory h-[80vh] overflow-scroll">
                                <div
                                    class="px-4 sm:py-4 snap-start w-screen h-[80vh] flex items-start justify-center text-8xl">

                                    <div class="mx-auto max-w-2xl sm:text-left">
                                        <p class="text-base leading-8 text-gray-600">{data()?.data?.documents?.[0]?.formatted?.[1]}</p>
                                    </div>

                                </div>
                                <div class="snap-start w-screen h-[80vh] flex items-center justify-center text-8xl">
                                    <div
                                        class="snap-x pt-4 sm:mx-auto snap-mandatory sm:grid sm:grid-cols-3 sm:gap-4 h-[80vh] overflow-y-hidden flex w-screen overflow-scroll">

                                        <For each={data()?.contacts}>
                                            {(contact: ContactProps) => (
                                                <div
                                                    class={'snap-start w-screen sm:w-full flex-shrink-0 flex items-center justify-center text-8xl'}>
                                                    <TeammateView
                                                        title={contact.name}
                                                        subTitle={contact.username}
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
    );
};

export {About};


const TeammateView: Component<{
    title: string;
    subTitle: string;
    description?: string;
    imageSrc?: string;
}> = props => {


    return (
        <>
            <article
                class="w-full sm:mx-auto min-w-[w-screen] sm:min-w-full sm:w-full shadow-xl min-h-[80vh] sm:min-h-[70vh] bg-cover bg-center  transform duration-500 hover:-translate-y-2 cursor-pointer group"
                style={{
                    "background-image": `url(${props.imageSrc})`
                }}
            >
                <div
                    class="bg-black bg-opacity-20 min-h-[20vh] px-10 flex flex-wrap flex-col pt-48 hover:bg-opacity-75 transform duration-300">
                    <div class={'flex flex-col'}>
                        <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                            <p class={'text-sm'}>{props.subTitle}</p>
                            {props.title}

                        </h1>

                    </div>
                    <div
                        class="w-16 h-2 bg-white rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 h-[60vh] sm:h-[50vh] text-white text-xl group-hover:opacity-80 transform duration-500">
                        {props.description}
                    </p>
                </div>

            </article>
        </>
    );
};

export {TeammateView};


const IconBadge: Component<{
    title: string;
}> = props => {

    return (
        <span
            class="inline-flex items-center justify-center gap-1 rounded bg-slate-500 px-1.5 text-sm text-white">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-4 h-4 fill-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"/>
                            <title id="title-01">{props.title}</title>
                            <desc id="desc-01">
                            {props.title}
                            </desc>
        </svg>
            {props.title}
            <span class="sr-only">{props.title}</span>
                      </span>
    );

};

export {IconBadge};
