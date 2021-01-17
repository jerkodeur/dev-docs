<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <!-- TODO Fire an action on pressing key -->
      <input
        type="text"
        class="new-todo"
        placeholder="Ajouter une tâche"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
    </header>
    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allTodosDone" id="checkAll" /><label for="checkAll"></label>
      <ul class="todo-list">
        <!--TODO define a class if a condition is ok -->
        <li
          class="todo"
          v-for="(todo, index) in filterTodos"
          :key="index"
          :class="{ completed: todo.completed, editing: isEditTodo === todo }"
        >
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle" />
            <label for="" @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <!--TODO Declare a custom directive -->
          <!--TODO @blur @keyup -->
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="updateTodo" v-focus="todo === isEditTodo" @blur="updateTodo" @keyup.esc="exitEditTodo" />
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="haveTodo">
      <span class="todo-count"><strong>{{ restTodo }}</strong> Tâches à accomplir</span>
      <ul class="filters">
        <li><a href="#" @click.prevent="getTodos('all')" :class="{selected: filter === 'all'}">Toutes</a></li>
        <li><a href="#" @click.prevent="getTodos('rest')" :class="{selected: filter === 'rest'}">Restantes</a></li>
        <li><a href="#" @click.prevent="getTodos('end')" :class="{selected: filter === 'end'}">Terminées</a></li>
      </ul>
      <button class="clear-completed" @click.prevent="deleteSelected" v-show="doneTodo">Supprimer tâche selectionnées</button>
    </footer>
  </section>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      todos: [
        {
          name: 'Tâche de test',
          completed: false
        }
      ],
      newTodo: '',
      filter: 'all',
      isEditTodo: null,
      oldTodo: ''
    }
  },
  computed: {
    //TODO Define get and set function in a computed property
    allTodosDone: {
      get () {
        return this.restTodo === 0
      },
      set (value) {
        return this.todos.forEach(todo => todo.completed = value)
      }
    },
    restTodo () {
      return this.todos.filter(todo => !todo.completed).length
    },
    filterTodos () {
      if (this.filter === 'end') {
        return this.todos.filter(todo => todo.completed)
      } else if (this.filter === 'rest') {
        return this.todos.filter(todo => !todo.completed)
      } else {
        return this.todos
      }
    },
    haveTodo () {
      return this.todos.length > 0
    },
    doneTodo () {
      return this.todos.filter(todo => todo.completed === true).length > 0
    }
  },
  methods: {
    addTodo () {
      this.todos.push({ name: this.newTodo, completed: false })
      this.newTodo = ''
    },
    getTodos (filter) {
      this.filter = filter
    },
    deleteTodo (todo) {
      this.todos = this.todos.filter(el => el !== todo)
    },
    deleteSelected () {
      this.todos = this.todos.filter(todo => todo.completed === false)
    },
    editTodo (todo) {
      this.isEditTodo = todo
      this.oldTodo = todo.name
    },
    updateTodo () {
      this.isEditTodo = null
    },
    exitEditTodo () {
      this.isEditTodo.name = this.oldTodo
      this.updateTodo()
    }
  },
  //TODO Create a custom directive
  directives : {
    focus (el, value) {
      // Will be excute when the DOM is update
      Vue.nextTick(() => el.focus())
    }
  }
}
</script>

<style src="./todos.css"></style>
