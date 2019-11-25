<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <i class="checkbtn fa fa-check" aria-hidden="true"></i>
          {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(TodoItem, index)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
    export default {
      props: ['propsdata'],
        methods: {
          removeTodo(todoItem, index) {
             this.$emit('removeTodo', todoItem, index);
          }
        }
    }
</script>

<style scoped>
  .list-itme {
    display: inline-block;
    margin-right: 10px;
  }

  .list-move {
    transition: transform 1s;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkbtn {
    line-height: 45px;
    color: #62ACDE;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #DE4343;
  }

</style>
