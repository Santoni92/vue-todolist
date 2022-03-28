console.log('VUE JS OK!');

const app = new Vue({
    el:'#todo',
    data:{
        toDoThings : [  //array di oggetti che rappresentano le cose (i task) da fare e se quella determinata cosa è stata fatta oppure no
            {
                text:'giocare',
                done: true

            },
            {
                text: 'studiare',
                done: false
            },
            {
                text: 'portare a passeggio il cane',
                done: false
            },
            {
                text:'lavare i piatti',
                done: true
            }
        ],
        deletedToDoThings : []    //array dei numeri che rappresentano gli indici dei task già fatti
    },
     

    methods:{
        isLineThrough(thing){
            if(thing.done === true){
                return 'barrato';
            }
        },
        deleteToDoThing(index){
            this.deletedToDoThings.push(index);  /*se l'elemento viene cliccato passo alla funzione l'indice (la posizione)
                                                 dell'oggetto thing nell'array toDoThings*/
        }
    }
});