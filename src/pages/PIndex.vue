<template>
  <div class="mb-10">
    <CHeader />
    <div class="!mt-[110px]">
      <CInfoBanner
        v-if="product"
        v-bind="{
          title: product.name,
          id: queryParams.product_id,
          lang: queryParams.lang,
        }"
      />
      <div class="container h-[calc(100vh-78px)]">
        <div class="my-10 flex gap-8 w-full">
          <div
            v-if="!isFullScreen"
            class="bg-[#001a34] min-w-[290px] w-[290px] p-6 border-[1px] border-[#ECECEC] border-solid rounded-[12px] blocks sticky overflow-auto h-[93vh] top-5"
          >
            <transition name="fade" mode="out-in">
              <div>
                <CBlockList v-show="step == 'drop'" />
                <CBlockEdit v-show="step == 'edit'" />
              </div>
            </transition>
          </div>
          <CPreviewContent class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onBeforeUnmount, onMounted } from "vue";
import { useRoute } from "vue-router";

import CBlockEdit from "@/components/CBlockEdit.vue";
import CBlockList from "@/components/CBlockList.vue";
import CPreviewContent from "@/components/CPreviewContent.vue";
import CHeader from "@/components/Header/CHeader.vue";
import useStoreMedia from "@/store/media";
import useStore from "@/store/index";
import useProduct from "@/store/product";
import CInfoBanner from "../components/UI/CInfoBanner.vue";

const store = useStore();
const route = useRoute();

const storeImage = useStoreMedia();
const productStore = useProduct();
const { step, isFullScreen, queryParams } = storeToRefs(store);
const { product } = storeToRefs(productStore);

onMounted(() => {
  window.addEventListener("beforeunload", showAlertBeforeMount);

  let saved = JSON.parse(localStorage.getItem("saved"));

  if (saved == null) {
    localStorage.setItem("saved", false);
  } else {
    let type = saved ? "remove" : "upload";
    storeImage.deleteItems(type);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", showAlertBeforeMount);
});

function showAlertBeforeMount(event: object) {
  event.returnValue = `Are you sure you want to leave?`;
}

(() => {
  store.setQueryParams(route.query);
  productStore.fetchProduct();
})();
</script>

<style scoped>
.blocks {
  box-shadow: 0px 4px 30px 1px rgba(0, 0, 0, 0.08);
  background: linear-gradient(0deg, #ffffff, #ffffff), #f7f7f7;
}
</style>
