import {type Component, For, Match, Suspense, Switch} from "solid-js";
import {useRouteData}                                 from "@solidjs/router";

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


const TeamView: Component<{}> = props => {
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

                        <div class="bg-white py-24 sm:py-32">
                            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                <div class="mx-auto max-w-2xl sm:text-center">
                                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data()?.data?.name}</h2>
                                    <p class="mt-6 text-lg leading-8 text-gray-600">test {data()?.data?.name}</p>
                                </div>
                                <ul role="list"
                                    class="overflow-y-auto mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
                                    <For each={data()?.contacts}>
                                        {(contact: ContactProps) => (
                                            <TeammateView
                                                name={contact.name}
                                                title={contact.username}
                                                description={contact.primary?.profiles?.[0]?.description}
                                            />

                                        )}
                                    </For>
                                </ul>
                            </div>
                        </div>


                    </Match>
                </Switch>

        </>
    )
}

export {TeamView}


const TeammateView: Component<{
    name: string;
    title: string;
    description?: string;
    imageSrc?: string;
}> = props => {

    return (
        <>
            <li class="flex flex-col gap-6 xl:flex-row">
                <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                     src={props.imageSrc}
                     alt=""/>
                <div class="flex-auto">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {props.name}
                    </h3>
                    <p class="text-base leading-7 text-gray-600">{props.title}</p>
                    <p class="mt-6 text-base leading-7 text-gray-600">
                        {props.description}
                    </p>
                </div>
            </li>
        </>
    )
}

export {TeammateView}
