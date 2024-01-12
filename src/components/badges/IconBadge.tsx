import type { Component } from 'solid-js';
import { Icon }           from 'solid-heroicons';
import { stop }           from 'solid-heroicons/solid';
import type { IconProps } from '../../app';



const IconBadge: Component<{
  title: string;
  icon?: IconProps;
}> = props => {

  return (
    <span
      class="inline-flex items-center justify-center gap-1 rounded bg-slate-500 px-1.5 text-sm text-white">
                          <Icon path={props.icon ?? stop} class="w-4 h-4 fill-white" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.5" aria-labelledby="title-01 desc-01">
                            <title id="title-01">{props.title}</title>
                            <desc id="desc-01">
                            {props.title}
                            </desc>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </Icon>
      {props.title}
      <span class="sr-only">{props.title}</span>
                      </span>
  );

};

export { IconBadge };
