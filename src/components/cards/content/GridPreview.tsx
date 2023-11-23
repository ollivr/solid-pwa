
import {Layout}    from "../../Layout";
import type {Component} from "solid-js";

const ContentPreview: Component<{

}> = props => {


    return (
        <div class="relative group">
            <div class="absolute top-0 h-44 w-44 rounded-full bg-gray-900 opacity-0 blur-xl transition group-hover:opacity-50" />
            <img class={'hover:scale-125 transition translate-z-1'} src={'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80'} width="200" />
        </div>
    );
}

export {ContentPreview};
