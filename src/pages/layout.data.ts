import {HttpService}                from "../services";
import {createEffect, createSignal} from "solid-js";
import type {IAccount, IUser}       from '../types/models';

export function homeData() {
    const http = new HttpService();
    const [getAccount, setAccount] = createSignal<IAccount[]>([]);

    const spoolRecords = async () => {
        const response = await http.service().get<any>('/data.json');

        setAccount(response);
    };

    createEffect(() => {
        console.log('acct', getAccount());
    }, []);

    createEffect(() => {
        spoolRecords();
    }, []);

}
