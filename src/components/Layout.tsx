import type {Component, JSXElement} from "solid-js";
import {Navigation}                 from "./Navigation";
import {Footer}                     from "./Footer";


const Layout: Component<{
    logo?: string;
    title?: string;
    name?: string;
    today: any[]
    children: JSXElement;
}> = props =>  {


    console.log(props.today)

    return (
        <>
            <Navigation
                logo={props.logo}
                title={props.title}
                today={props.today}

            />

            <div
                style={{
                    height: '85dvh'

                }}
                class={'mt-14 w-full h-full overflow-y-auto'}>

                {props.children || ''}


            </div>

            <Footer
                title={props.title}
                today={props.today}
            />
        </>
    )

}

export {Layout}
