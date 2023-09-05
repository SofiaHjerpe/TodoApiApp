<template>
    <div>
    <h1>Todo list</h1>
    <div v-for="todo in todos" :key="todo.id"  >
        • <router-link class="dbubble" :class="{bubble : todo.done}" :to="'/todo/' + todo.id">{{todo.title}}</router-link>
    </div>
</div>

</template>
<script>
export default {
  name: 'TodoList',
  data() {
    return {
        todos: []
    }
  },

  created() {
      fetch('http://localhost:5260/api/Todo')
      .then(data => data.json())
      .then(todos => {
        this.todos = todos;
        this.title = todos.title
        this.date = todos.date
        this.done = todos.done      })
  }
 
}
</script>
<style scoped>
.dbubble {
     color: rgb(255, 139, 139)
    }
.bubble{
    color: rgb(94, 122, 94);

}
</style>