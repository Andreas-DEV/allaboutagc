<script lang="ts">
    import { Sun, Moon, Github } from "lucide-svelte";
    import Icon from "@iconify/svelte";
    import mig from "$lib/media/image6.jpeg";

    import { onMount } from "svelte";

    onMount(() => {
        const circle = document.querySelector("[data-circle]");
        if (circle) {
            const circumference = circle.getTotalLength();
            circle.style.strokeDasharray = `${circumference}`;
            circle.style.strokeDashoffset = `${circumference}`;

            // Update the CSS to use the calculated circumference
            const style = document.createElement("style");
            style.textContent = `
                .group:hover [data-circle] {
                    stroke-dashoffset: 0 !important;
                }
            `;
            document.head.appendChild(style);
        }
    });
</script>

<div class="py-10">
    <main class="max-w-screen-sm mx-auto px-4 sm:px-6">
        <!-- Hero Section -->
        <section
            class="flex flex-col sm:flex-row justify-evenly items-center py-6 sm:py-10 gap-6 sm:gap-0"
        >
            <div
                class="text-darkCol text-center sm:text-left hover:cursor-default"
            >
                <h1 class="text-xl sm:text-2xl title">
                    Hej, mit navn er Andreas!<span class="wave">👋</span>
                </h1>
                <p class="text-sm">
                    Jeg er en Full-stack Webudvikler fra Silkeborg
                </p>
            </div>
            <div class="relative group">
                <svg
                    class="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] -rotate-90 opacity-0 group-hover:opacity-100"
                >
                    <circle
                        class="fill-none stroke-blue-500 stroke-2 transition-[stroke-dashoffset] duration-1000 ease-in-out"
                        cx="50%"
                        cy="50%"
                        r="calc(50% - 2px)"
                        stroke-dasharray="1000"
                        stroke-dashoffset="1000"
                        stroke-linecap="round"
                        style="stroke-width: 4px"
                        data-circle
                    />
                </svg>
                <img
                    class="border-[#333333] border shadow-2xl w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] object-cover rounded-full"
                    src={mig}
                    alt=""
                />
            </div>
        </section>

        <!-- Projects -->
        <div class="mt-8 sm:mt-12">
            <h2
                class="font-medium text-3xl sm:text-4xl px-4 sm:px-0 select-none"
            >
                Projects
            </h2>

            <!-- Project Cards -->
            <div class="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                <!-- Project 01 -->
                <div class="py-4 px-4 sm:px-7">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2"
                    >
                        <span class="text-xl sm:text-2xl select-none">01</span>
                        <a
                            href="https://github.com/Andreas-DEV/stroem"
                            class="group relative flex items-center gap-2"
                            target="_blank"
                        >
                            <h2
                                class="text-2xl sm:text-3xl text-blue-950 font-bold"
                            >
                                Stroem
                            </h2>
                            <Github class="w-6 h-6 sm:w-7 sm:h-7" />
                            <span
                                class="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-out group-hover:w-full"
                            ></span>
                        </a>
                        <div class="flex gap-1 mt-2 sm:mt-0">
                            <Icon icon="devicon:svelte" />
                            <Icon icon="devicon:typescript" />
                            <Icon icon="devicon:tailwindcss" />
                        </div>
                    </div>
                    <p>Mit eksamens projekt, som jeg fik et 12 for.</p>
                </div>

                <!-- Project 02 -->
                <div class="px-4 sm:px-7">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2"
                    >
                        <span class="text-xl sm:text-2xl select-none">02</span>

                        <a
                            href="https://github.com/Andreas-DEV/CivilTjek"
                            class="group relative flex items-center gap-2"
                            target="_blank"
                        >
                            <h2
                                class="text-2xl sm:text-3xl text-blue-950 font-bold"
                            >
                                CivilTjek
                            </h2>
                            <Github class="w-6 h-6 sm:w-7 sm:h-7" />
                            <span
                                class="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-out group-hover:w-full"
                            ></span>
                        </a>
                        <div class="flex gap-1 mt-2 sm:mt-0">
                            <Icon icon="devicon:svelte" />
                            <Icon icon="devicon:typescript" />
                            <Icon icon="devicon:tailwindcss" />
                        </div>
                    </div>
                    <p class="mb-2">
                        Sjov lille app som tjekker en nummerplade op i mod
                        tjekbil's eget API.
                    </p>
                    <div class="flex items-center">
                        <a
                            target="_blank"
                            class="hover:underline border flex px-2 pt-1 rounded-lg"
                            href="https://civil-tjek.vercel.app/"
                            >Live Site <Icon icon="majesticons:open" /></a
                        >
                    </div>
                </div>

                <!-- Project 03 -->
                <div class="px-4 sm:px-7">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2"
                    >
                        <span class="text-xl sm:text-2xl select-none">03</span>

                        <a
                            href="https://github.com/AlexanderGC1337/GronbechRevision"
                            class="group relative flex items-center gap-2"
                            target="_blank"
                        >
                            <h2
                                class="text-2xl sm:text-3xl text-blue-950 font-bold"
                            >
                                Grønbech Revision
                            </h2>
                            <Github class="w-6 h-6 sm:w-7 sm:h-7" />
                            <span
                                class="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-out group-hover:w-full"
                            ></span>
                        </a>

                        <div class="flex gap-1 mt-2 sm:mt-0">
                            <Icon icon="devicon:svelte" />
                            <Icon icon="logos:javascript" />
                            <Icon icon="devicon:tailwindcss" />
                        </div>
                    </div>
                    <p>Grønbech Revision's officelle hjemmeside.</p>
                    <p class="mb-2">
                        Freelance opgave lavet under min skole periode.
                    </p>
                    <div class="flex items-center">
                        <a
                            target="_blank"
                            class="hover:underline border flex px-2 pt-1 rounded-lg"
                            href="https://www.gronbechrevision.dk/"
                            >Live Site <Icon icon="majesticons:open" /></a
                        >
                    </div>
                </div>

                <!-- Project 04 -->
                <div class="px-4 sm:px-7">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2"
                    >
                        <span class="text-xl sm:text-2xl select-none">04</span>

                        <a
                            href="https://github.com/AlexanderGC1337/Dsrrr"
                            class="group relative flex items-center gap-2"
                            target="_blank"
                        >
                            <h2
                                class="text-2xl sm:text-3xl text-blue-950 font-bold"
                            >
                                Dansk Super Rally
                            </h2>
                            <Github class="w-6 h-6 sm:w-7 sm:h-7" />
                            <span
                                class="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-out group-hover:w-full"
                            ></span>
                        </a>
                        <div class="flex gap-1 mt-2 sm:mt-0">
                            <Icon icon="devicon:react" />
                            <Icon icon="logos:javascript" />
                            <Icon icon="devicon:tailwindcss" />
                        </div>
                    </div>
                    <p>Dansk Super Rally's officielle hjemmeside</p>
                    <p class="mb-2">
                        Endnu en freelance opgave, lavet under min skole
                        periode.
                    </p>
                    <div class="flex items-center">
                        <a
                            target="_blank"
                            class="hover:underline border flex px-2 pt-1 rounded-lg"
                            href="https://www.dansksuperrally.dk/"
                            >Live Site <Icon icon="majesticons:open" /></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<style>
    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-20deg);
        }
        50% {
            transform: rotate(10deg);
        }
        75% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    .title:hover .wave {
        display: inline-block;
        animation: wave 0.5s ease-in-out infinite;
    }

    .wave {
        display: inline-block;
    }
</style>
