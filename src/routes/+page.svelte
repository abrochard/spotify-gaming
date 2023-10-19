<script>
 import { flip } from 'svelte/animate';
 import { fade } from 'svelte/transition';

 import Albums from '$lib/albums.json';

 import FaAngleDoubleLeft from 'svelte-icons/fa/FaAngleDoubleLeft.svelte';
 import FaRandom from 'svelte-icons/fa/FaRandom.svelte';
 import FaAngleDoubleRight from 'svelte-icons/fa/FaAngleDoubleRight.svelte';

 let index = randomIndex();
 $: albums = update(index);

 function update(index) {
   let a = Albums.slice(Math.max(0, index-2), Math.min(Albums.length, index+3));
   if (a.length == 5)
     return a;

   if (index == 0) {
     return [{id: 'a'}, {id: 'b'}, ...a];
   }

   if (index == 1) {
     return [{id: 'b'}, ...a];
   }

   while(a.length < 5) {
     a.push({id: `c{$a.length}`});
   }
   return;
 }

 function right() {
   index = Math.min(Albums.length, index + 1);
 }

 function random() {
   index = randomIndex();
 }

 function randomIndex() {
   const dest = Math.floor(Math.random() * Albums.length);
   return Math.max(0, dest - 2);
 }

 function left() {
   index = Math.max(0, index - 1);
 }

 let searchTerm;
 function search() {
   const i = Albums.findIndex(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()));
   if (i)
     index = i;
 }
</script>

<style>
 .carroussel {
   perspective: 1000px;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 50px;
   padding-top: 4em;

   display: flex;
   justify-content: center;
   align-items: center;
 }

 .album {
   transition: 1s;
   /* transition-delay: 150ms; */
   z-index: 3;
 }

 .album:nth-child(1) {
   transform: translateZ(206.5px) rotateY(-130deg) scale(0.8);
   z-index: 2;
   max-width: 100px;
 }
 .album:nth-child(2) {
   transform: translateZ(206.5px) rotateY(-130deg) scale(0.9);
   left: 15px;
   max-width: 150px;
 }
 .album:nth-child(3) {
   transform: translateZ(206.5px) rotateY(0deg);
 }
 .album:nth-child(4) {
   transform: translateZ(206.5px) rotateY(-50deg) scale(0.9) translateX(-50px);
   max-width: 150px;
   z-index: 2;
 }
 .album:nth-child(5) {
   transform: translateZ(206.5px) rotateY(-50deg) scale(0.8) translateX(-50px);
   z-index: 1;
   max-width: 100px;
 }
 .album:nth-child(6) {
   transform: translateZ(206.5px) rotateY(-50deg) scale(0.8) translateX(-50px);
   z-index: 0;
 }

 img {
   max-width: 200px;
   box-shadow: 4px 5px 2px 0px black;
 }

 .placeholder {
   width: 200px;
 }

 .controls {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   padding-top: 50px;

   font-size: 40px;
   width: 100%;
 }

 .icon {
   max-width: 40px;
 }

 .spotify-widget {
   height: 500px;
   width: 500px;
   margin-left: auto;
   margin-right: auto;
   margin-top: 50px;
 }

 form {
   width: 100%;
   display: flex;
   justify-content: center;
   margin-right: auto;
   margin-left: auto;
 }

 input {
   width: 500px;
   font-size: 24px;
   border-radius: 5px;
   border: 1px solid grey;
   padding: 5px;
 }

 .container {
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   display: block;
   font-family: sans-serif;
 }

</style>

<div class="container">
  <form on:submit|preventDefault="{search}">
    <input type="search" id="query" name="q" placeholder="Search..." bind:value="{searchTerm}">
  </form>

  <div class="carroussel">
    {#each albums as album (album.id)}
      <div class="album" animate:flip="{{duration: 200}}" in:fade="{{duration: 200}}">
        {#if album.title}
          <img alt="{album.title}" src="covers/{album.id}.jpg" />
        {:else}
          <div class="placeholder"/>
        {/if}
      </div>
    {/each}
  </div>

  <div class="controls">
    <div>{index}</div>
    <div class="icon" on:click="{left}"><FaAngleDoubleLeft/></div>
    <div class="icon" on:click="{random}"><FaRandom/></div>
    <div class="icon" on:click="{right}"><FaAngleDoubleRight/></div>
    <div>{Albums.length - index}</div>
  </div>

  <div class="spotify-widget">
    <iframe title="Spotify Widget" src="https://open.spotify.com/embed/album/{Albums[index].id}" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
</div>
