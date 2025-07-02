import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  const bookingDetails = ref(null);
  const seatDetails = ref(null);
  const paymentDetails = ref(null);
  const fromHomepageSearch = ref(false); // 新增旗標

  function setBookingDetails(details) {
    bookingDetails.value = details;
  }

  function setSeatDetails(details) {
    seatDetails.value = details;
  }

  function setPaymentDetails(details) {
    paymentDetails.value = details;
  }

  // 新增一個 action 來設置旗標
  function setFromHomepageSearch(value) {
    fromHomepageSearch.value = value;
  }

  return {
    bookingDetails,
    seatDetails,
    paymentDetails,
    fromHomepageSearch, // 導出旗標
    setBookingDetails,
    setSeatDetails,
    setPaymentDetails,
    setFromHomepageSearch, // 導出 action
  };
});