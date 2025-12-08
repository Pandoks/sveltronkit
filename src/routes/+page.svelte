<script lang="ts">
  import { onMount } from "svelte";

  onMount(async () => {
    const content = await window.electronAPI.testResponse();
    const content2 = await window.electronAPI.sumTwoNumbers(2, 3);
    console.log("File contents:", content, content2);
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>
