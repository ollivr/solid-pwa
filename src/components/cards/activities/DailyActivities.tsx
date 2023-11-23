import type { Component } from "solid-js";

const DailyActivities: Component<{}> = props => {


    return (
        <>

            <div
                class="bg-white rounded z-10 max-w-3xl  shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.06),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
                <div class="px-7">
                    <div class="flex pt-7">
                        <div class="first-item relative">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#DBEAFE" />
                                <path
                                    d="M25.7035 16.5625C25.5891 18.1512 24.4106 19.375 23.1254 19.375C21.8403 19.375 20.6598 18.1516 20.5473 16.5625C20.4301 14.9098 21.5774 13.75 23.1254 13.75C24.6735 13.75 25.8207 14.9398 25.7035 16.5625Z"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M23.1248 21.875C20.5791 21.875 18.1311 23.1395 17.5178 25.602C17.4366 25.9277 17.6409 26.25 17.9756 26.25H28.2745C28.6092 26.25 28.8123 25.9277 28.7323 25.602C28.119 23.1 25.6709 21.875 23.1248 21.875Z"
                                    stroke="#1D4ED8" stroke-miterlimit="10" />
                                <path
                                    d="M17.8121 17.2633C17.7207 18.532 16.7684 19.5312 15.7418 19.5312C14.7153 19.5312 13.7614 18.5324 13.6715 17.2633C13.5782 15.9434 14.5051 15 15.7418 15C16.9785 15 17.9055 15.9676 17.8121 17.2633Z"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M18.0473 21.9531C17.3422 21.6301 16.5656 21.5059 15.7426 21.5059C13.7113 21.5059 11.7543 22.5156 11.2641 24.4824C11.1996 24.7426 11.3629 25 11.6301 25H16.016"
                                    stroke="#1D4ED8" stroke-miterlimit="10" stroke-linecap="round" />
                            </svg>
                        </div>

                        <div class="details-container pl-7">
                            <p class="text-sm font-semibold leading-none text-slate-800">
                                AlphaDesign meeting schedule
                            </p>
                            <p class="text-xs leading-3 text-slate-600 pt-3">
                                <span class="text-xs leading-3 text-slate-600 font-medium">Time:</span>
                                5:40 pm
                            </p>
                            <div class="div flex items-center">
                                <div class="div">
                                    <p class="text-xs leading-3 text-gray-600 pt-3">
										<span class="text-xs leading-3 text-slate-600 font-medium">Initiated
											By:</span>
                                        Kesha Jhonson
                                    </p>
                                </div>
                                <div class="div pt-3 pl-2">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/kjhkj.png" alt=""
                                         class="rounded-full w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-10">
                        <div class="svg-container relative first-item">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#DBEAFE" />
                                <path
                                    d="M26.9844 15.377L21.15 12.7168C20.5176 12.4277 19.4824 12.4277 18.85 12.7168L13.0195 15.377C12.332 15.6895 12.332 16.2008 13.0195 16.5133L18.8008 19.15C19.4605 19.4508 20.5465 19.4508 21.2062 19.15L26.9875 16.5133C27.6719 16.2008 27.6719 15.6891 26.9844 15.377Z"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.25 22.0512L13.0195 23.5008C12.332 23.8133 12.332 24.325 13.0195 24.6375L18.8008 27.2742C19.4605 27.5746 20.5465 27.5746 21.2062 27.2742L26.9875 24.6375C27.675 24.325 27.675 23.8133 26.9875 23.5008L23.8648 21.998"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.25 17.9863L13.0156 19.4379C12.3281 19.7504 12.3281 20.2621 13.0156 20.5746L18.7969 23.2109C19.4566 23.5117 20.5426 23.5117 21.2023 23.2109L26.9836 20.5746C27.675 20.2621 27.675 19.7504 26.9875 19.4379L23.75 17.9863"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="details-container pl-7">
                            <p class="text-sm font-semibold leading-none text-slate-800">
                                Pinpoint project reasearch files
                            </p>
                            <p class="text-xs leading-3 text-slate-600 pt-3">
                                <span class="text-xs leading-3 text-slate-600 font-medium">Sending Time:</span>
                                11:05 am
                            </p>
                            <div class="div flex items-center">
                                <div class="div">
                                    <p class="text-xs leading-3 text-gray-600 pt-3">
                                        <span class="text-xs leading-3 text-slate-600 font-medium">Sent By:</span>
                                        James Bond
                                    </p>
                                </div>
                                <div class="div pt-3 pl-2">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/lkejfew.png" alt=""
                                         class="rounded-full w-4 h-4" />
                                </div>
                            </div>
                            <div class="flex gap-7 pt-7 lg:flex-row flex-col">
                                <div class="flex p-7 border border-slate-300 rounded">
                                    <div class="img-container">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ai%201.png" alt="" />
                                    </div>
                                    <div class="details pl-4">
                                        <p class="text-sm font-medium leading-none text-slate-800">
                                            Logo Design Research
                                        </p>
                                        <p class="text-xs leading-3 text-gray-600 pt-3">2 MB</p>
                                    </div>
                                </div>
                                <div class="flex p-7 border border-slate-300 rounded">
                                    <div class="img-container">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/doc%201.png" alt="" />
                                    </div>
                                    <div class="details pl-4">
                                        <p class="text-sm font-medium leading-none text-slate-800">
                                            Clients Testing Research
                                        </p>
                                        <p class="text-xs leading-3 text-gray-600 pt-3">2 MB</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="flex pt-10">
                        <div class="svg-container relative first-item">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#DBEAFE" />
                                <path
                                    d="M13.125 16.875C12.9592 16.875 12.8003 16.9408 12.6831 17.0581C12.5658 17.1753 12.5 17.3342 12.5 17.5V25.9375C12.5 27.1187 13.5063 28.125 14.6875 28.125H25.3125C26.4937 28.125 27.5 27.1676 27.5 25.9863V17.5C27.5 17.3342 27.4342 17.1753 27.3169 17.0581C27.1997 16.9408 27.0408 16.875 26.875 16.875H13.125Z"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.25 16.875V15.625C16.25 14.6304 16.6451 13.6766 17.3483 12.9733C18.0516 12.2701 19.0054 11.875 20 11.875V11.875C20.9946 11.875 21.9484 12.2701 22.6517 12.9733C23.3549 13.6766 23.75 14.6304 23.75 15.625V16.875"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.25 18.75V19.375C16.25 20.3696 16.6451 21.3234 17.3483 22.0267C18.0516 22.7299 19.0054 23.125 20 23.125C20.9946 23.125 21.9484 22.7299 22.6517 22.0267C23.3549 21.3234 23.75 20.3696 23.75 19.375V18.75"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="details-container pl-7">
                            <p class="text-sm font-semibold leading-none text-slate-800">
                                Placement of order #567234 in budget estimation
                            </p>
                            <p class="text-xs leading-3 text-slate-600 pt-3">
                                <span class="text-xs leading-3 text-slate-600 font-medium">Initiation Time:</span>
                                11:05 am
                            </p>
                            <div class="div flex items-center">
                                <div class="div">
                                    <p class="text-xs leading-3 text-gray-600 pt-3">
										<span class="text-xs leading-3 text-slate-600 font-medium">Initiated
											By:</span>
                                        Charlie Puth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-10 w-full">
                        <div class="svg-container relative first-item">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#DBEAFE" />
                                <path
                                    d="M27.6707 12.3285C27.3741 12.0319 26.9718 11.8652 26.5523 11.8652C26.1329 11.8652 25.7306 12.0319 25.434 12.3285L17.1875 21.5124C18.0891 21.696 18.9891 22.5785 19.1117 23.4367L27.6707 14.5652C27.9673 14.2686 28.1339 13.8663 28.1339 13.4468C28.1339 13.0274 27.9673 12.6251 27.6707 12.3285V12.3285Z"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M15.3906 23.125C14.2234 23.125 13.2812 24.082 13.2812 25.268C13.2812 26.2035 12.4656 26.6965 11.875 26.6965C12.5219 27.568 13.6258 28.125 14.6875 28.125C16.2414 28.125 17.5 26.8465 17.5 25.268C17.5 24.082 16.5578 23.125 15.3906 23.125Z"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="details-container pl-7 w-full">
                            <p class="text-sm font-semibold leading-none text-slate-800">
                                Application design concepts addition and final revision
                            </p>
                            <p class="text-xs leading-3 text-slate-600 pt-3">
                                <span class="text-xs leading-3 text-slate-600 font-medium">Initiation Time:</span>
                                11:05 am
                            </p>
                            <div class="div flex items-center">
                                <div class="div">
                                    <p class="text-xs leading-3 text-gray-600 pt-3">
										<span class="text-xs leading-3 text-slate-600 font-medium">Initiated
											By:</span>
                                        Laurein Smith
                                    </p>
                                </div>
                                <div class="div pt-3 pl-2">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sgkjheogih.png" alt=""
                                         class="rounded-full w-4 h-4" />
                                </div>
                            </div>
                            <div class="border border-slate-300 p-6 mt-5 w-full">
                                <div class="flex gap-4 lg:flex-row flex-col ">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ux-indonesia-pqzRfBhd9r0-unsplash%201.png"
                                         alt="" class="rounded" />
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/nick-adams-yTWq8n3-4k0-unsplash%201.png"
                                         alt="" class="rounded" />
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/minh-pham-lB9ylP8e9Sg-unsplash%201.png"
                                         alt="" class="rounded" />
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/stil-Fj1aWk4LcNg-unsplash%201.png"
                                         alt="imggg" class="rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-10">
                        <div class="svg-container">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#DBEAFE" />
                                <path
                                    d="M27.25 16.7041L20.4246 13.3354C20.2925 13.2702 20.1473 13.2363 20 13.2363C19.8527 13.2363 19.7075 13.2702 19.5754 13.3354L12.75 16.7041C12.4883 16.8323 12.2677 17.0311 12.1131 17.2781C11.9585 17.5251 11.876 17.8104 11.875 18.1018V25.3131C11.875 26.176 12.5836 26.8756 13.4578 26.8756H26.5437C27.418 26.8756 28.1266 26.176 28.1266 25.3131V18.1018C28.1254 17.8102 28.0427 17.5248 27.8878 17.2778C27.7329 17.0308 27.512 16.8321 27.25 16.7041V16.7041Z"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M25.5205 24.3748L20.4713 20.4475C20.3067 20.3195 20.1042 20.25 19.8957 20.25C19.6872 20.25 19.4847 20.3195 19.3201 20.4475L14.2705 24.3748"
                                    stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.083 21.5234L27.3955 17.5" stroke="#1D4ED8" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.3955 17.5L17.8252 21.6016" stroke="#1D4ED8" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="details-container pl-7">
                            <p class="text-sm font-semibold leading-none text-slate-800">
                                New task assigned to you in Q/A of multipurpose dashboard
                            </p>
                            <p class="text-xs leading-3 text-slate-600 pt-3">
                                <span class="text-xs leading-3 text-slate-600 font-medium">Initiation Time:</span>
                                11:05 am
                            </p>
                            <div class="div flex items-center">
                                <div class="div">
                                    <p class="text-xs leading-3 text-gray-600 pt-3">
										<span class="text-xs leading-3 text-slate-600 font-medium">Initiated
											By:</span>
                                        Bella Hadid
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 border-t border-slate-100 items-center cursor-pointer pb-7 pt-7 mt-7">
                    <p class="text-base text-gray-600 pl-7">View All Activies</p>
                    <div class="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.375 3.5L12.875 8L8.375 12.5" stroke="#475569" stroke-linecap="round"
                                  stroke-linejoin="round" />
                            <path d="M12.25 8H3.125" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export {DailyActivities}
