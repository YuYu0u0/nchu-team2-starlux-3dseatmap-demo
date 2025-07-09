import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  const bookingDetails = ref(null);
  const seatDetails = ref(null);
  const paymentDetails = ref(null);
  const fromHomepageSearch = ref(false); // 新增旗標
  const selectedFlight = ref(null); // 新增選定航班資訊
  const passengerInfo = ref(null); // 新增旅客資訊

  function setBookingDetails(details) {
    bookingDetails.value = details;
  }

  function setSeatDetails(details) {
    seatDetails.value = details;
  }

  function setPaymentDetails(details) {
    paymentDetails.value = details;
  }

  function setPassengerInfo(details) { // 新增旅客資訊 action
    passengerInfo.value = details;
  }

  // 新增一個 action 來設置旗標
  function setFromHomepageSearch(value) {
    fromHomepageSearch.value = value;
  }

  // 新增一個 action 來設置選定航班資訊
  function setSelectedFlight(flight) {
    selectedFlight.value = flight;
  }

  return {
    bookingDetails,
    seatDetails,
    paymentDetails,
    fromHomepageSearch,
    selectedFlight, // 導出選定航班資訊
    passengerInfo, // 導出旅客資訊
    setBookingDetails,
    setSeatDetails,
    setPaymentDetails,
    setPassengerInfo, // 導出旅客資訊 action
    setFromHomepageSearch,
    setSelectedFlight, // 導出 action
  };
});