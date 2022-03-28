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
        newTasks: [] ,   //array delle nuove task (cose da fare) aggiunte dall'utente mediante tag input
        newTask: '' //stringa di input inserita dall'utente
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
            const newTask = this.newTask.trim();  //elimino eventuali spazi aggiunti dall'utente prima e dopo alla stringa in input; notare che con this.newTask mi sto riferendo alla stringa presente in data
            if(newTask.lenght > 0){ //verifico che l'utente non abbia inserito una stringa vuota
                this.newTasks.push(newTask);
                this.newTask = '';  //azzero il campo di input altrimenti rimarrebbe l'ultima task digitata dall'utente
            }
        }
    }
});