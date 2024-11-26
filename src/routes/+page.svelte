<script lang="ts">
    import "../app.css";

    import Light from "$lib/Light.svelte";
    import UdBevis from "$lib/files/Uddannelses_Bevis.pdf"
</script>

<section class="max-w-screen-sm mx-auto">
    <Light />

    <div>
        <h2 class="font-medium text-4xl py-10">Uddannelse</h2>

        <div class="">

            <div class="px-10">

                <span class="text-4xl">Webudvikler</span>
                <span class="">
                    <a href={UdBevis} class="hover:underline text-sm" target="_blank">
                        Uddannelsesbevis
                    </a>
                </span>
            </div>
            <div class="px-16 py-5 gap-4">
                <a href="https://www.aarhustech.dk/" class="text-3xl hover:underline" target="_blank">Aarhus Tech</a>
                <div class="">
                    <a href="https://videndjurs.dk/" class="text-3xl hover:underline" target="_blank">
                        Viden Djurs
                    </a>
                    <span class="text-xl">Grenå</span>
                </div>
            </div>
        </div>
    </div>
</section>
