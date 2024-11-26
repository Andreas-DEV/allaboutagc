<script lang="ts">
    import "../app.css";

    import Light from "$lib/Light.svelte";
    import UdBevis from "$lib/files/Uddannelses_Bevis.pdf"
</script>

<section class="max-w-screen-sm mx-auto mb-40">
    <Light />

    <div class="px-4 sm:px-6">
        <h2 class="font-medium text-3xl sm:text-4xl py-6 sm:py-10 select-none">Uddannelse</h2>
    
        <div class="space-y-4">
            <div class="px-4 sm:px-10">
                <div class="">
                    <span class="text-3xl sm:text-4xl">Webudvikler</span>
                    <span class="text-sm">
                        <a href={UdBevis} class="hover:underline" target="_blank">
                            Uddannelsesbevis
                        </a>
                    </span>
                </div>
            </div>
    
            <div class="px-6 sm:px-16">
                <div class="relative max-w-4xl mx-auto">
                    <!-- First institution -->
                    <div class="relative">
                        <a 
                            href="https://www.aarhustech.dk/" 
                            class="text-2xl sm:text-3xl hover:underline" 
                            target="_blank"
                        >
                            Aarhus Tech
                        </a>
                        <span class="text-md sm:text-xl select-none">GF2</span>
                        
                        <!-- Vertical line (short) -->
                        <div class="absolute left-10 top-10 w-[2px] h-5 bg-gray-300"></div>
                        <!-- Horizontal line (short) -->
                        <div class="absolute left-10 top-[3.6rem] w-5 h-[2px] bg-gray-300"></div>
                        <!-- Blue dot -->
                        
                    </div>
            
                    <!-- Second institution -->
                    <div class="relative ml-[68px] mt-2">
                        <!-- Blue dot -->
                       
                        
                        <div class="flex items-end gap-1">
                            <a 
                                href="https://videndjurs.dk/" 
                                class="text-2xl sm:text-3xl hover:underline" 
                                target="_blank"
                            >
                                Viden Djurs
                            </a>
                            <div class="text-md sm:text-xl select-none">Grundforløb</div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    </div>
</section>
