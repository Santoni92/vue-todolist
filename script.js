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
        ]
    },
    //textThrough: 'text-decoration: line-through;'
    methods:{
        isLineThrough(){
            if(this.done === true){
                return 'barrato';
            }
        }
    }
});