<script>

  const world = 'world'; // edit world and save to see hmr update
  import Map from './Map.svelte';
  export let ready;

  import Header from "./Header.svelte";
</script>



<svelte:head>
    <script defer async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCf2NcANmQEGGfaLslc3EoIw7Ts72_o0h4&callback=initMap">
    </script>
</svelte:head>


<style>
  
  .header {
    margin-bottom: 1rem;
  }

  .content {
    margin-left: 2em;
  }
</style>




<div class="header">
  <Header />
</div>
Contenu...
<div class="map">
    { #if ready}
        <Map></Map>
    {/if}
</div>




