import type {Component} from "solid-js";


const ImageContent: Component<{ src: string; }> = props => {

    return <img class="h-full w-full object-cover"
                src={props.src ?? `https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80`}
                alt=""/>
}

export {ImageContent}


