import type {Component} from "solid-js";


const ImagePreview: Component<{src: string;}> = props => {

    return  <div class="mx-3 mt-6 mb-7 px-2 text-sm font-medium text-gray-400">
        <img class="w-full rounded" src={props.src ?? `https://picsum.photos/536/354`} alt={''}/>
    </div>
}

export {ImagePreview}
