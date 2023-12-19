import {Accessor, createContext, createMemo, createResource, createSignal, JSX, Setter, useContext,} from "solid-js";

type CONTEXT_API = {
    data: any;

};

export type ModelAssetProps = {


}
export type IconProps = { path: JSX.Element, outline?: boolean | undefined, mini?: boolean | undefined };

export type CardDataProps = {
    icon: IconProps;
}

export const GlobalContext = createContext<CONTEXT_API>();


export function GlobalContextProvider(props: any) {

    const [data, setData] = createSignal<any>()


    return (
        <GlobalContext.Provider
            value={{
                data,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)!;
