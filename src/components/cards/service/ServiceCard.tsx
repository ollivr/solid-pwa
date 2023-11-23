
import {Layout}       from "../../Layout";
import {Icon}         from "solid-heroicons";
import {clock, truck} from "solid-heroicons/solid";
import type { Component } from "solid-js";

const ServiceCard: Component<{
    src: string;
    name: string;
    service_code: string;
    minimum: number;
    form: string;
    service_price: string;
    organization_name: string;
    location_city: string;
}> = props => {


    return (

                <div class="flex flex-col  max-w-md">
                    <div class="relative m-4 rounded-3xl bg-white p-4 drop-shadow-2xl">
                        <div class="flex-none sm:flex">

                            <div class="flex-auto justify-evenly">
                                <div class="flex items-center justify-between w-full">
                                    <div class=" flex items-center border-b-2 border-dashed w-full">
                                        <span class="mr-3 h-8 w-8 rounded-full bg-white">
    						                  <Icon path={truck} class={'h-8 w-8 p-1 fill-gray-500'} />
								        </span>
                                        <div class="ml-auto text-blue-800">{props.service_code ?? 'SC-100-1000'}</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end">
                                    <div class="border-b-2 border-transparent my-1 flex items-center">
                                        <h2 class="font-medium uppercase">{props.name ?? 'Erik Smith'}</h2>
                                    </div>
                                </div>
                                <div class="mb-5 border-b-2 border-dashed"></div>
                                <div class="flex items-center justify-between">
                                    <div class="flex flex-col">
                                        <div class="my-1 flex-auto text-xs text-left text-gray-400">
                                            <span class="mr-1">Min</span>
                                        </div>
                                        <div
                                            class="w-full flex-none text-left text-base font-bold leading-none text-blue-800">{props.minimum ?? '1:00'}
                                        </div>
                                        <div class="text-left py-1 text-xs uppercase">Hour</div>

                                    </div>
                                    <div class="mx-auto flex flex-col">
                                        <Icon path={clock} class={'h-20 w-20 p-1 fill-gray-500'} />

                                    </div>
                                    <div class="flex flex-col">
                                        <div class="my-1 flex-auto text-xs text-gray-400">
                                            <span class="text-right mr-1"></span><span>Price</span>
                                        </div>
                                        <div
                                            class="w-full flex-none text-right text-base font-bold leading-none text-blue-800">
                                            {props.service_price ?? '100'}
                                        </div>
                                        <div class="text-right py-1 text-xs">HOUR</div>

                                    </div>
                                </div>
                                <div class="mb-5 border-b-2 border-dashed"></div>

                                <div class="my-4 flex items-center px-2">
                                    <div class="flex flex-col text-sm">
                                        <span class="text-left">Starts</span>
                                        <div class="text-left font-semibold">11:50</div>
                                        <div class="text-left font-semibold">AM</div>
                                    </div>
                                    <div class="mx-auto flex flex-col text-sm">
                                        <span class="text-center">Ends</span>
                                        <div class="text-center font-semibold">11:30</div>
                                        <div class="text-center font-semibold">AM</div>
                                    </div>
                                    <div class="flex flex-col text-sm">
                                        <span class="text-right">Total</span>
                                        <div class="text-right font-semibold">1 Hour</div>
                                        <div class="text-right font-semibold">Billed</div>

                                    </div>
                                </div>

                                <div class="border-b-2 border-dashed"></div>

                                <div class="flex flex-col justify-center text-sm">
                                    <div class="flex flex-col items-center w-full pt-3 text-sm space-y-1">
                                        <div class={'flex justify-between w-full'}>
                                            <span class="">Contact</span>
                                            <div class="font-semibold">{props.name ?? 'Julian Smith'}</div>
                                        </div>

                                        <div class={'flex justify-between w-full'}>
                                            <span class="">Role</span>
                                            <div class="font-semibold">Technician</div>
                                        </div>
                                        <div class={'flex justify-between w-full'}>
                                            <span class="">Phone</span>
                                            <div class="font-semibold">310-219-2188</div>
                                        </div>
                                        <div class={'flex justify-between w-full'}>
                                            <span class="">Email</span>
                                            <div class="font-semibold">erik@ollivr.com</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-center py-5 text-sm">
                                        <h6 class="text-center font-bold">Ollivr Service</h6>

                                        <div class="relative left-auto mt-4 inline-block h-14 w-0 barcode"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export {ServiceCard}
