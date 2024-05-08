<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let items;
    export let activeTab;          //class:active is  a conditional class

</script>

<div class="tabs">
    <ul>

    
    {#each items as i}
    <li on:click={()=>dispatch('tabChange',i)}>
        <div class:active={i===activeTab} >{i}</div>      
    </li>
    {/each}
</ul>
</div>

<style>
    .active{
        color:#d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
    .tabs{
        margin-bottom: 40px;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0 16px;
        font-size: 18px;
        cursor: pointer;
        color: #555;
    }
</style>