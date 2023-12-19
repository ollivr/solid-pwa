import type {Component, JSXElement} from "solid-js";
import {Navigation}                 from "./Navigation";
import {Footer}                     from "./Footer";


const Layout: Component<{
    logo?: string;
    title?: string;
    name?: string;
    children: JSXElement;
}> = props =>  {



    return (
        <>
            <Navigation
                logo={props.logo}
                title={props.title} />

            <div
                style={{
                    height: '85dvh'

                }}
                class={'mt-14 w-full h-full overflow-y-auto'}>

                {props.children || ''}


            </div>

            <Footer
                title={props.title}
            />
        </>
    )

}

export {Layout}
