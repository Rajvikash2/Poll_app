<script>
  import CreatePoll from "./components/CreatePoll.svelte";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
  import Tabs from "./components/Tabs.svelte";

// tabs
let items = ['Current Polls','Add New Poll']
let activeTab= 'Current Polls'

function handleTab(e){
	activeTab = e.detail
}
</script>

<Header/>

<main>

	<Tabs {activeTab} {items} on:tabChange={handleTab}/>
	{#if activeTab==='Current Polls'}
	<p>Current Polls are displayed here</p>
	{:else if activeTab==='Add New Poll'}
	<CreatePoll/>
	{/if}
	
</main>
<Footer/>

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}

</style>