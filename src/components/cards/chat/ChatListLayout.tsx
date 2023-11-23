import type {Component, JSXElement} from "solid-js";



const ChatListPreview: Component<{
   children: JSXElement
}> = props => {


    return (


        <ul role="list" class="divide-y divide-gray-200">

            {props.children}

        </ul>

    );
}

export default ChatListPreview;
