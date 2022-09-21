import { ref } from "vue";

export function useContent(): object {
  const templates = ref([]);
  function hello() {
    console.log("hello");
  }
  return {
    hello,
  };
}
