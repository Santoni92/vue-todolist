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
        deletedToDoThings : [],   //array dei numeri che rappresentano gli indici dei task già fatti
        newTask: ' ' //stringa di input inserita dall'utente
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
        },

        addTask(){
            const text = this.newTask.trim();  //elimino eventuali spazi aggiunti dall'utente prima e dopo alla stringa in input; notare che con this.newTask mi sto riferendo alla stringa presente in data
            /*if(text.lenght > 0){ //verifico che l'utente non abbia inserito una stringa vuota
                const newTask = {
                    text,
                    done:false
                };
               this.toDoThings.push(newTask);
               this.newTask = '';  //azzero il campo di input altrimenti rimarrebbe l'ultima task digitata dall'utente
             }*/
             const newTask = {
                text,
                done:false
            };
           this.toDoThings.push(newTask);
           this.newTask = '';  //azzero il campo di input altrimenti rimarrebbe l'ultima task digitata dall'utente
        },

        invertStatus(thing){
            if(thing.done === true)
            {
                thing.done = false;
            }else{
                thing.done = true;
            }
        }
    }
});