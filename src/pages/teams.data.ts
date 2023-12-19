import {HttpService}                                from "../services";
import {createEffect, createResource, createSignal} from "solid-js";
import type {IAccount, IUser}                       from '../types/models';
import {useParams}                                  from "@solidjs/router";


async function fetchData() {
    const response = await fetch(`/data.json`);
    console.log(response.body)
    return await response.json();

}


export function teamData() {
    const params = useParams();
    const [data] = createResource(params, fetchData);
    return data;
}
