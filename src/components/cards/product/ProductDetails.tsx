import { A } from "@solidjs/router";
import {Component, For, createComputed, createSignal}         from "solid-js";
import {ProductImageGallery, ProductImageGalleryPreview} from "./ProductImageGallery";
import {ProductReviews}                                   from "./ProductReviews";
import {ProductGridRelationPreview, ProductGridRelations} from "./ProductRelations";

export type ImageProps = {
    name: string;
    src: string;
}

export type RelatedProps = {
    src: string;
    slug: string;
    name: string;
    id: string;
    description: string;
    price: string;
}


const ProductDetails: Component = (props: {
    name: string;
    price: string;
    description: string;
    src: string;
    images: ImageProps[];
    related: RelatedProps[];
}) => {


    return (
        <>

            <main class="mx-auto mt-12 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
                <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                    <div class="lg:col-span-5 lg:col-start-8">
                        <div class="flex justify-between">
                            <h1 class="text-xl font-medium text-gray-900">{props.name}</h1>
                            <p class="text-xl font-medium text-gray-900">${props.price}</p>
                        </div>
                        {/** Reviews **/}

                        <ProductReviews/>

                    </div>

                    {/** Image gallery **/}



                    <For each={props.images}>
                        {(item, index) => (
                            <ProductImageGalleryPreview
                                name={props.images[index()].name}
                                src={props.images[index()].src}
                                index={index()}
                            />
                            )}
                    </For>


                    <div class="mt-8 lg:col-span-5">

                        {/** Product details **/}
                        <div class="mt-10">
                            <h2 class="text-sm font-medium text-gray-900">Description</h2>

                            <div class="mt-4 text-gray-500 prose prose-sm">
                                <p>{props.description}</p>
                                <p></p>
                            </div>
                        </div>

                        <div class="mt-8 border-t border-gray-200 pt-8">
                            <h2 class="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

                            <div class="mt-4 text-gray-500 prose prose-sm">

                            </div>
                        </div>

                        {/** Policies **/}

                    </div>
                </div>

                {/** Reviews **/}

                <ProductReviews/>

                {/** Related products **/}


                <ProductGridRelations>
                    <For each={props.related}>
                        {(item, index) => (
                            <ProductGridRelationPreview
                                src={props.related[index()]?.src}
                                slug={props.related[index()]?.slug}
                                name={props.related[index()]?.name}
                                id={props.related[index()]?.id}
                                description={props.related[index()]?.description}
                                price={props.related[index()]?.price}
                            />
                        )}
                    </For>
                </ProductGridRelations>

            </main>


        </>
    );

}
export default ProductDetails
