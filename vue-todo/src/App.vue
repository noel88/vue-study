<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>

</template>

<script>
import TodoHeader from "./component/TodoHeader";
import TodoFooter from "./component/TodoFooter";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

export default {
    components: {
        'TodoHeader' : TodoHeader,
        'TodoFooter' : TodoFooter,
        'TodoInput' : TodoInput,
        'TodoList' : TodoList,
    }
}
</script>

<style>

</style>
