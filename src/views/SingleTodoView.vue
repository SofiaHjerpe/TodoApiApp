<template>
    <div>
        <h1>Todo</h1>
        <div class="form">
            <input type="text" placeholder="title" v-model="title">
            <input type="text" placeholder="XXXX-XX-XXTXX:XX:XX" v-model="date">
            <div>
            <label for="done" >Done</label>
            <input  type="radio" id="done" :value="true" v-model="done">
        
            <label for="ndone" >Not done</label>
            <input type="radio" id="ndone" :value="false" v-model="done">
        </div>
            <button @click="updateTodo">Update</button>
            <button @click="deleteTodo">Delete</button>
        </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            title: "",
            date: "", 
            done: false
        }
    },
    created() {
        const id = this.$route.params.id

        fetch('http://localhost:5260/api/Todo/'+ id)
        .then(data => data.json())
        .then(todo => {
            this.title = todo.title,
            this.date = todo.date, 
            this.done = todo.done
        })
    },
   methods: {
       updateTodo(){
            const todo = {
                title: this.title, 
                date: this.date, 
                done: this.done
            }
            const id = this.$route.params.id; 

            fetch('http://localhost:5260/api/Todo/'+ id, {
                method: 'PUT', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(todo)
            })
            .then(() => 
           {
               this.$router.push('/todos')
            })
        },
        deleteTodo() {
            const id = this.$route.params.id; 

            fetch('http://localhost:5260/api/Todo/'+ id, {
                method: 'DELETE'
            })
            .then(() => 
            {
                this.$router.push('/todos')
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