<script>
    import Button from "../shared/Button.svelte";
import Card from "../shared/Card.svelte";
    import PollStore from "../stores/Store";
 
   export let poll;

   // reactive value
  $ : totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor(100/totalVotes * poll.votesA);
  $: percentB = Math.floor(100/totalVotes * poll.votesB);
  // handle Vote

  const handleVote =(answer ,id) =>{
  PollStore.update((currentPolls)=>{
    let copiedPolls = [...currentPolls];
	let selectedPoll = copiedPolls.find((p)=>p.id===id);

	if(answer==='a'){
		selectedPoll.votesA++;
	}
	if(answer==='b'){
		selectedPoll.votesB++;
	}
	return copiedPolls;
  })

  }
  const handleDelete = (id) =>{
    PollStore.update((currentPoll)=>{
      return currentPoll.filter(poll=>poll.id!=id)
    })

  }
	
</script>

<Card>
<div class="poll">
    <h3>{ poll.question }</h3>
    <p>Total votes: { totalVotes }</p>
    <div class="answer" on:click={()=>handleVote('a',poll.id)}>
      <div class="percent percent-a" style="width: {percentA}%;"></div>
      <span>{ poll.answerA } ({ poll.votesA } votes)</span>
    </div>
    <div class="answer" on:click={()=>handleVote('b',poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%"></div>
      <span>{ poll.answerB } ({ poll.votesB } votes)</span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={()=>handleDelete(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
    
  h3{
    margin: 0 auto;
    color: #555;
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer{
    
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  }
  .percent{
    height:100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a{
    border-left: 3px solid red;
    background: rgba(217, 27, 66, 0.5);
    border-radius: 0 20px 20px 0;
  }
  .percent-b{
    border-left: 3px solid green;
    background: rgba(69,196,150,0.5);
    border-radius: 0 20px 20px 0;
  }

  .delete{
    margin-top: 30px;
    text-align: center;
  }
</style>

