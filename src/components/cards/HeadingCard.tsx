
import {Layout}     from "../Layout";
import {Icon}       from "solid-heroicons";
import {userCircle} from "solid-heroicons/solid";
import type { Component } from "solid-js";

const HeadingCard: Component<{}> = props => {



    return (

                <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                    <div class="-mt-4 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                        <div class="mt-4 ml-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <Icon path={userCircle}  class="h-12 w-12 rounded-full stroke-green-500" aria-hidden="true" />
                                </div>
                                <div class="ml-4">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">Title</h3>
                                    <p class="text-sm text-gray-500">
                                        description
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 ml-4 flex flex-shrink-0">
                            CN

                        </div>
                    </div>
                </div>
    );
}

export default {HeadingCard};
