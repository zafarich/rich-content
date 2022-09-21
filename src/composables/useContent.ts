import { ref, watch } from "vue";

export default function useContent(): object {
  const content = ref([]);

  function hello() {
    console.log("hello");
  }
  
  watch(() => blocks, (v) => {
    console.log(v, 'vv')
  })
  
  return {
    content,
    hello,
  };
}
