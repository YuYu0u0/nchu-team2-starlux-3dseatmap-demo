import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BookingView from "@/views/BookingView.vue";
import SearchResultView from "@/views/SearchResultView.vue";
import Select3DViewEconomy from "@/views/Select3DViewEconomy.vue";
import Select3DViewPremiumEconomy from "@/views/Select3DViewPremiumEconomy.vue";
import Select3DViewFirst from "@/views/Select3DViewFirst.vue";

import NoteForChild from "@/components/PopUpWindow/NoteForChild.vue";
import PaymentMethodView from "@/views/PaymentMethodView.vue";
import OrderConfirmationView from "@/views/OrderConfirmationView.vue";

import CommingSoonView from "@/views/CommingSoonView.vue";
import EquipmentView from "@/views/EquipmentView.vue";
import AnnouncementView from "@/views/AnnouncementView.vue"
import MembershipView from "@/views/MembershipView.vue"
import PassengerFaqView from "@/views/PassengerFaqView.vue"
import FlightStatusView from "@/views/FlightStatusView.vue";
import PassengerInfoView from "@/views/PassengerInfoView.vue"; // New import

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    { // New route
      path: "/passenger-info",
      name: "passenger-info",
      component: PassengerInfoView,
    },
    {
      path: "/booking",
      name: "booking",
      component: BookingView,
    },
    {
      path: "/search-result",
      name: "search-result",
      component: SearchResultView,
    },
    {
      path: "/select-seat/economy",
      name: "select-seat-economy",
      component: Select3DViewEconomy,
    },
    {
      path: "/select-seat/premium-economy",
      name: "select-seat-premium-economy",
      component: Select3DViewPremiumEconomy,
    },
    {
      path: "/select-seat/first",
      name: "select-seat-first",
      component: Select3DViewFirst,
    },
    {
      path: "/notes-for-child",
      name: "NoteForChild",
      component: NoteForChild,
    },
    {
      path: "/payment-method",
      name: "payment-method",
      component: PaymentMethodView,
    },
    {
      path: "/order-confirmation",
      name: "order-confirmation",
      component: OrderConfirmationView,
    },
    {
      path: "/comming-soon",
      name: "comming-soon",
      component: CommingSoonView,
    },
    {
      path: "/equipment",
      name: "equipment",
      component: EquipmentView,
    },
    {
      path: "/announcement",
      name: "announcement",
      component: AnnouncementView,
    },
    {
      path: "/membership",
      name: "membership",
      component: MembershipView,
    },
    {
      path: "/passengerfaq",
      name: "passengerfaq",
      component: PassengerFaqView,
    },
    {
      path: "/flightstatus",
      name: "flightstatus",
      component: FlightStatusView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 情況一：如果使用者是透過瀏覽器的上一頁/下一頁按鈕切換
    // savedPosition 物件就會存在，我們直接回傳它，回到先前的位置
    if (savedPosition) {
      return savedPosition;
    }

    // 情況二：如果有錨點連結 (例如 /about#contact)
    // 我們就捲動到該錨點
    if (to.hash) {
      return {
        el: to.hash, // el 屬性接受一個 CSS 選擇器
        behavior: "smooth", // 讓捲動有平滑的動畫效果
      };
    }

    // 情況三：所有其他的路由切換，都捲動到頁面頂部
    // 這解決了您的主要問題！
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
