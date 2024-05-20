<script>
  import PollStore from '../stores/Store.js';
  import PollDetail from "./PollDetail.svelte";
  import { fade,slide } from 'svelte/transition';
  

// export let polls=[];
// PollStore.subscribe(data =>{
//     polls=data;
// })
// $ PollStore is used for automatic subscriptopn and insub of data
//So to run in the loop run as $PollStore with a alias

</script>


<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
         <div in:fade out:slide>
        <PollDetail {poll} />
        </div>
   
    {/each}
</div>



<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

</style>