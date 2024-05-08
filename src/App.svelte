<script>
  import CreatePoll from "./components/CreatePoll.svelte";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./components/Tabs.svelte";

// tabs
let items = ['Current Polls','Add New Poll']
let activeTab= 'Current Polls'

let polls =[{
	question: 'What is your favorite color?',
	answerA: 'Red',
	answerB: 'Blue',
	votesA: 10,
	votesB: 9,
	id: 1
},
{
	question: 'What is your favorite food?',
	answerA: 'Pizza',
	answerB: 'Burger',
	votesA: 20,
	votesB: 6,
	id: 2
}]

const handleAdd = (e)=>{
	const newpoll=e.detail;
	polls=[newpoll,...polls];
	console.log(polls)
	activeTab='Current Polls'

}

function handleTab(e){
	activeTab = e.detail
}

const handleVote = (e)=>{
	const {answer,id} = e.detail;
	let copiedPolls = [...polls];
	let selectedPoll = copiedPolls.find((p)=>p.id===id);

	if(answer==='a'){
		selectedPoll.votesA++;
	}
	if(answer==='b'){
		selectedPoll.votesB++;
	}
	polls=copiedPolls;

}
</script>

<Header/>

<main>

	<Tabs {activeTab} {items} on:tabChange={handleTab}/>
	{#if activeTab==='Current Polls'}
	<PollList {polls} on:vote={handleVote}/>
	{:else if activeTab==='Add New Poll'}
	<CreatePoll on:add={handleAdd}/>
	{/if}
	
</main>
<Footer/>

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}

</style>