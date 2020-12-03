<script>
    import { writable } from "svelte/store";
    import Store from "./store.js";
    let container;
    let map;
    let zoom = 8;
    let center = {lat: -34.397, lng: 150.644};
    let _geoWatch;
    import { onMount, onDestroy } from 'svelte';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        center = {lat: latitude, lng: longitude};

        map = new google.maps.Map(container, {
            zoom,
            center,
        });
    }

    function error(){
        consoole.log('Unable to retrieve your location');
    }

    onMount(async () => {
        if(!navigator.geolocation){
            alert('geolocation not supported') ;
        }else {
            navigator.geolocation.getCurrentPosition(success, error);
        }


    });






</script>

<style>
    .full-screen {
        width: 100vw;
        height: 100vh;
    }
</style>

<div class="full-screen" bind:this={container}></div>