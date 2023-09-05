<template>
    <div>
    <h1>Todos</h1>
    <p style="margin-bottom: 0">You can add a new Todo by filling out the form and clicking on the submit button.  </p> 
    <p style="margin-bottom: 0">Click on the Todo to go to a single Todo item view.</p> 
    <p>Green means Done, Red means Not Done.</p>
    <TodoList :key="todoKey" />
    <div class="form">
        <h1>Add Todo</h1>
            <input type="text" placeholder="todo" v-model="title">
            <input type="text" placeholder="date" v-model="date">
            <div>   
            <label for="done">Done</label>
            <input type="radio" id="done" :value="true"  v-model="done" >
           
            <label for="ndone">Not done</label>
            <input type="radio" id="ndone" :value="false"  v-model="done" >
            </div>
            <button @click="saveTodo()">Submit</button>
    </div>
</div>
</template>
<script>
import TodoList from '../components/TodoList.vue';
export default {
    components: {
        TodoList
    },
    data(){
     return {
         title: "",
         date: "",
         done: false, 
         todoKey: 0, 
         
         
     }
    },
    methods: {
        saveTodo() {
            const todo = {
                title: this.title,
                date: this.date, 
                done: this.done

            }


            fetch('http://localhost:5260/api/Todo', {
                method: 'POST', 
                body: JSON.stringify(todo),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(() => {
                this.todoKey++
            })
            
        }
    }
    
}
</script>
<style scoped>

.form {
    display:flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    gap: 15px;
}

</style>