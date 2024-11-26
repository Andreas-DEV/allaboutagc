<script lang="ts">
    import { Sun, Moon, Github } from "lucide-svelte";
    import Icon from "@iconify/svelte";
    import mig from "$lib/media/image6.jpeg";
</script>

<div class="">
    <main class="max-w-screen-sm mx-auto">
        <section class="flex justify-evenly items-center py-10">
            <div class="text-darkCol">
                <h1 class="text-2xl">Hej, mit navn er Andreas!👋</h1>
                <p class="text-sm">
                    Jeg er en Full-stack Webudvikler fra Silkeborg
                </p>
            </div>
            <img
                class="border-[#333333] w-[140px] h-[140px] object-cover rounded-full"
                src={mig}
                alt=""
            />
        </section>

        <!-- Projects -->
        <div>
            <h2 class="font-medium text-4xl">Projects</h2>
            <div class="py-10 px-7">
                <div class="flex items-center gap-2">
                    <span class="text-2xl select-none">01</span>
                    <a
                        href="https://github.com/Andreas-DEV/stroem"
                        class="hover:underline flex items-center gap-2"
                        target="_blank"
                    >
                        <h2 class="text-3xl text-blue-950 font-bold">Stroem</h2>
                        <Github class="w-7 h-7" />
                    </a>
                    <div class="flex gap-1">
                        <Icon icon="devicon:svelte" />
                        <Icon icon="devicon:typescript" />
                        <Icon icon="devicon:tailwindcss" />
                    </div>
                </div>

                <p>Mit eksamens projekt, som jeg fik et 12 for.</p>
            </div>
            <div class="px-7">
                <div class="flex items-center gap-2">
                    <span class="text-2xl select-none">02</span>
                    <a
                        href="https://github.com/Andreas-DEV/CivilTjek"
                        class="hover:underline flex items-center gap-2"
                        target="_blank"
                    >
                        <h2 class="text-3xl text-blue-950 font-bold">
                            CivilTjek
                        </h2>
                        <Github class="w-7 h-7" />
                    </a>
                    <div class="flex gap-1">
                        <Icon icon="devicon:svelte" />
                        <Icon icon="devicon:typescript" />
                        <Icon icon="devicon:tailwindcss" />
                    </div>
                </div>

                <p>
                    Sjov lille app som tjekker en nummerplade op i mod tjekbil's
                    eget API.
                </p>
                <div class="flex items-center">
                    <a
                        target="_blank"
                        class="hover:underline border flex px-2 pt-1 rounded-lg"
                        href="https://civil-tjek.vercel.app/"
                        >Live Site
                        <Icon icon="majesticons:open" /></a
                    >
                </div>
            </div>
            <div class="px-7 pt-10">
                <div class="flex items-center gap-2">
                    <span class="text-2xl select-none">03</span>
                    <a
                        href="https://github.com/AlexanderGC1337/GronbechRevision"
                        class="hover:underline flex items-center gap-2"
                        target="_blank"
                    >
                        <h2 class="text-3xl text-blue-950 font-bold">
                            Grønbech Revision
                        </h2>
                        <Github class="w-7 h-7" />
                    </a>
                    <div class="flex gap-1">
                        <Icon icon="devicon:svelte" />
                        <Icon icon="logos:javascript" />
                        <Icon icon="devicon:tailwindcss" />
                    </div>
                </div>
                <p>Grønbech Revision's officelle hjemmeside.</p>
                <p>Freelance opgave lavet under min skole periode.</p>
                <div class="flex items-center">
                    <a
                        target="_blank"
                        class="hover:underline border flex px-2 pt-1 rounded-lg"
                        href="https://www.gronbechrevision.dk/"
                        >Live Site
                        <Icon icon="majesticons:open" /></a
                    >
                </div>
            </div>
            <div class="px-7 pt-10">
                <div class="flex items-center gap-2">
                    <span class="text-2xl select-none">04</span>
                    <a
                        href="https://github.com/AlexanderGC1337/Dsrrr"
                        class="hover:underline flex items-center gap-2"
                        target="_blank"
                    >
                        <h2 class="text-3xl text-blue-950 font-bold">
                            Dansk Super Rally
                        </h2>
                        <Github class="w-7 h-7" />
                    </a>
                    <div class="flex gap-1">
                        <Icon icon="devicon:react" />
                        <Icon icon="logos:javascript" />
                        <Icon icon="devicon:tailwindcss" />
                    </div>
                </div>

                <p>Dansk Super Rally's officielle hjemmeside</p>
                <p>Endnu en freelance opgave, lavet under min skole periode.</p>
                <div class="flex items-center">
                    <a
                        target="_blank"
                        class="hover:underline border flex px-2 pt-1 rounded-lg"
                        href="https://www.dansksuperrally.dk/"
                        >Live Site
                        <Icon icon="majesticons:open" /></a
                    >
                </div>
            </div>
        </div>
    </main>
</div>
