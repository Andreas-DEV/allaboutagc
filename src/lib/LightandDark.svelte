<script>
    import { onMount } from 'svelte';
    import { Sun, Moon } from 'lucide-svelte';
  
    let isDark = false;
  
    onMount(() => {
      // Check for system preference or stored preference
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
      updateTheme();
    });
  
    function toggleTheme() {
      isDark = !isDark;
      updateTheme();
    }
  
    function updateTheme() {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  </script>
  
  <button
    on:click={toggleTheme}
    class="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-white"
    aria-label="Toggle theme"
  >
    {#if !isDark}
      <Moon class="h-5 w-5" />
    {:else}
      <Sun class="h-5 w-5" />
    {/if}
  </button>
  
  <style>
    /* Add any additional component styles here */
  </style>