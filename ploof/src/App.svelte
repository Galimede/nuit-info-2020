<script>
  const world = 'world'; // edit world and save to see hmr update
  import Map from './Map.svelte';
  export let ready;

</script>



<svelte:head>
    <script defer async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCf2NcANmQEGGfaLslc3EoIw7Ts72_o0h4&callback=initMap">
    </script>
</svelte:head>


<style>
  :global(body){
      padding: 0;
  }
</style>

<h1>Hello {world}</h1>
{ #if ready}
    <Map></Map>
{/if}
