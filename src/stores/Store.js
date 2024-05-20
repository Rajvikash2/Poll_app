import { writable } from "svelte/store";

const PollStore = writable([
    {
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
    }
]);

export default PollStore;