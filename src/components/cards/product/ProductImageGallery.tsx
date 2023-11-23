import type {Component, JSXElement} from "solid-js";
import {classNames}                 from "../../../app";


const ProductImageGallery: Component = (props: {
    children: JSXElement;
}) => {


    return (
        <>

            <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                <h2 class="sr-only">Images</h2>

                <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                    {props.children}
                </div>
            </div>


        </>
    );

}
export {ProductImageGallery}


const ProductImageGalleryPreview: Component<{
    name: string | undefined;
    src: string | undefined;
    index: number | undefined;

}> = props => {


    return (
        <>


            <img
                class={classNames(props.index === 1 ? 'h-full w-full rounded-lg lg:col-span-2 lg:row-span-2' : 'hidden rounded-lg lg:block')}
                src={props.src} alt={props.name}/>
        </>
    );

}
export {ProductImageGalleryPreview}

