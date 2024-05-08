<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
let fields ={question : '', answerA:'',answerB:''};
let error ={question : '', answerA:'',answerB:''};
let valid = false;

const handleSub = () => {
    valid = true;
    if(fields.question.trim().length < 5){
        valid = false;
        error.question='*Question must be atleast 5 words';
    }
    else{
        error.question=''
    }
    if(fields.answerA.trim().length < 1){
        valid = false;
        error.answerA='*Answer A must be atleast 1 word';
    }
    else{
        error.answerA=''
    }
    if(fields.answerB.trim().length < 1){
        valid = false;
        error.answerB='*Answer B must be atleast 1 word';
    }
    else{
        error.answerB=''
    }
    if(valid){
        let poll = {...fields, votesA: 0, votesB: 0, id: Math.random() };
        dispatch('add',poll);
    }
  
}
</script>

<form on:submit|preventDefault={handleSub}>
    <div class="form-field">
        <label for="question">Question:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="err">{error.question}</div>
    </div>
    <div class="form-field">
        <label for="Answer-a">Answer A:</label>
        <input type="text" id="Answer-a" bind:value={fields.answerA}>
        <div class="err">{error.answerA}</div>
    </div>
    <div class="form-field">
        <label for="Answer-b">Answer B:</label>
        <input type="text" id="Answer-b" bind:value={fields.answerB}>
        <div class="err">{error.answerB}</div>
    </div>
    <button>Add Poll</button>
</form>



<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;

    }
    .form-field{
        margin: 18px auto;
    }
    label{
        text-align: left;
        margin-bottom: 5px;
    }
    input{
        width: 100%;
        border-radius: 10px;
    }
    button{
        background-color: #d91b42;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
    }
    button:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Shadow effect on hover */
    transform: scale(0.95);
}
.err{
    color: red;
    text-align: left;
}

</style>