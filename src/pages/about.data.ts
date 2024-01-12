
import {createEffect, createResource, createSignal} from "solid-js";
import {useParams}                                  from "@solidjs/router";


async function fetchData() {
    const response = await fetch(`/data.json`);
    console.log(response.body)
    return await response.json();

}


export function aboutData() {
    const params = useParams();
    const [data] = createResource(params, fetchData);
    return data;
}
