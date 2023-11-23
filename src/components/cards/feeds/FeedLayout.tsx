import type {Component} from "solid-js";

const FeedLayout: Component<{}> = props => {


    return (
        <>

            <div class="mx-auto w-full max-w-md rounded-2xl bg-white px-7 py-10 shadow-xl">
                <div class='mx-auto max-w-md space-y-6'>
                    <div class="relative flex flex-col">
                        {/** App Header **/}


                        {/** Story Bar Section **/}


                        {/** Post Section **/}
                        <div class="flex h-full flex-grow flex-col post-container">
                            {/** Post **/}


                            {/** Post **/}
                            <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">

                                {/** Post Item **/}


                                {/** Post **/}




                            </div>

                            {/** Navigation Bar **/}

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export {FeedLayout}
