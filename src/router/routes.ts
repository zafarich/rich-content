export default [
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "Error" },
    component: () => import("@/pages/PError.vue"),
  },
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("@/pages/PIndex.vue"),
  },
];
