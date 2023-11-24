import { A }                        from "@solidjs/router";
import type {Component, JSXElement} from "solid-js";
import {Navigation}                 from "./Navigation";
import {Footer}                     from "./Footer";


const Layout: Component<{
    logo?: string;
    title?: string;
    children: JSXElement;
}> = props =>  {



    return (
        <>
            <Navigation />

            <div
                style={{
                    height: '100dvh'

                }}
                class={'fixed inset-x-0 top-14 bottom-0 w-full h-full'}>

                {props.children || ''}


            </div>


            <Footer/>

        </>
    )

}

export {Layout}
