<template>
  <div
    class="bg-white border-b-[1px] border-b-[#ECECEC] border-solid header !h-[78px] pt-3 pb-6 fixed top-0 w-full z-50"
  >
    <div class="container flex justify-between">
      <div class="">
        <Icon name="texnomart_logo" />
      </div>

      <div class="flex gap-6">
        <CTab v-if="isFullScreen" class="min-w-[100px]" />
        <CButton
          v-if="!queryParams.readonly"
          @click="store.toggleIsFullScreen()"
          :text="isFullScreen ? 'Назад' : 'Предпросмотр'"
          :class="[
            'px-6  border-2 rounded min-w-[106px]',
            isFullScreen ? 'border-transparent ' : '!bg-white border-yellow',
          ]"
        />
        <CButton
          @click="saveContent"
          v-if="!isFullScreen"
          text="Сохранить"
          class="px-6 rounded h-11"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CButton from "@/components/UI/Button/Cbutton.vue";
import { storeToRefs } from "pinia";
import CTab from "@/components/Tab/CTab.vue";
import useStore from "@/store/index";
import Icon from "@/components/Icon/Icon.vue";
import { useToast } from "vue-toastification";
import useProduct from "@/store/product";

const store = useStore();
const toast = useToast();
const productStore = useProduct();
const { queryParams, isFullScreen, content } = storeToRefs(store);

async function saveContent(): void {
  if (isContentsValid()) {
    productStore
      .postProductOverview()
      .then(async (res) => {
        if (res.success) {
          await localStorage.setItem("saved", true);
          await localStorage.removeItem("upload");
          toast.success(res.message);
        } else {
          toast.warning(res.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }
}

function isContentsValid(): boolean {
  for (let i in content.value) {
    let arr =
      content.value[i]?.content?.table?.head ||
      content.value[i]?.content?.block;

    for (let k in arr) {
      let curr = arr[k].asset;
      for (let j in curr) {
        if (j.endsWith("Err") && curr[j]) {
          toast.warning(curr[j]);
          return false;
        }
      }
    }
  }

  return true;
}
</script>

<style scoped>
.header {
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.06);
}
</style>
