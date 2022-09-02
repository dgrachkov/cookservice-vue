<template>
  <div class="">
    <app-navbar :deposit="userData.deposit"></app-navbar>

    <router-view
      :menuList="menuList" 
      :userData="userData"
      :cart="cart"
      :modalVisible="modalVisible"
      :selectedFoodItem="selectedFoodItem"
      @saveUser="saveUser"
      @addSelectedFoodCart="addSelectedFoodCart"
      @addAdditionally="addAdditionally"
      @hideModal="hideModal"
      @favorite="addToFavorites"
      @makeOrder="makeOrder"
      @removeOrder="removeOrder"
      @notFavorite="removeToFavorites"
      @inCart="addToCart"
      @increase="increaseCounter"
      @reduce="reduceCounter"
      @createCard="createCard"
      @removeCard="removeCard"
      @createAddress="createAddress"
      @removeAddress="removeAddress">
    </router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'app',
  components: { AppNavbar, AppFooter },
  data() {
    return {
      userData: {
        name: '',
        phone: '',
        addressesList: [],
        cardsList: [],
        deposit: 27580,
        myOrders: [],
        favoriteDishes: [],
      },
      cart: {
        listDishes: [],
        selectedAddress: {},
        totalAmount: 0,
        deliveryAmount: 0,
        selectedPayment: { img: 'online-payment', name: 'Оплата' },
        selectedTime: {},
      },
      modalVisible: false,
      selectedFoodItem: {},
      menuList: {
        snacks: {
          id: 0,
          name: 'Закуски',
          foodList: [
            {
              id: 0, img: 'food', bgColor: '#FE724B', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 430, amount: 430, counter: 1, additionally: true, inCart: false,
              additionallyList: [
              { name: 'Побольше лука', surcharge: 20, selected: false },
              { name: 'Побольше лука', surcharge: 0, selected: true },
              { name: 'Грибов побольше', surcharge: 300, selected: false },
              ],
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 1, img: 'food', bgColor: '#B3E0EB', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 325, amount: 325, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 2, img: 'food', bgColor: '#FCBEC8', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 550, amount: 550, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы'
            },
            {
              id: 3, img: 'food', bgColor: '#B3E0EB', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 430, amount: 430, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 4, img: 'food', bgColor: '#FCBEC8', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 325, amount: 325, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 5, img: 'food', bgColor: '#FE724B', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 550, amount: 550, counter: 1, additionally: true, inCart: false,
              additionallyList: [
              { name: 'Побольше лука', surcharge: 20, selected: false },
              { name: 'Побольше лука', surcharge: 0, selected: true },
              { name: 'Грибов побольше', surcharge: 300, selected: false },
              ],
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы'
            },
          ]
        },
        salads: {
          id: 1,
          name: 'Салаты',
          foodList: [
            {
              id: 0, img: 'food', bgColor: '#FE724B', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 430, amount: 430, counter: 1, additionally: true, inCart: false,
              additionallyList: [
              { name: 'Побольше лука', surcharge: 20, selected: false },
              { name: 'Побольше лука', surcharge: 0, selected: true },
              { name: 'Грибов побольше', surcharge: 300, selected: false },
              ],
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 1, img: 'food', bgColor: '#B3E0EB', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 325, amount: 325, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 2, img: 'food', bgColor: '#FCBEC8', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 550, amount: 550, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы'
            },
            {
              id: 3, img: 'food', bgColor: '#B3E0EB', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 430, amount: 430, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 4, img: 'food', bgColor: '#FCBEC8', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 550, amount: 550, counter: 1, additionally: false, inCart: false,
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.'
            },
            {
              id: 5, img: 'food', bgColor: '#FE724B', title: 'Картофель с луком и белыми грибами', favorite: false,
              grams: '320 г', calories: '1 040 ккал', price: 400, amount: 400, counter: 1, additionally: true, inCart: false,
              additionallyList: [
              { name: 'Побольше лука', surcharge: 20, selected: false },
              { name: 'Побольше лука', surcharge: 0, selected: true },
              { name: 'Грибов побольше', surcharge: 300, selected: false },
              ],
              description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы'
            },
          ]
        }
      }
    }
  },
  methods: {
    saveUser(user) {
      this.userData.name = user.name
      this.userData.phone = user.phone
    },
    createAddress(addressesForm) {
      this.userData.addressesList.push(addressesForm)
    },
    removeAddress(address) {
      this.userData.addressesList = this.addressesList.filter(a => a.id !== address.id)
    },
    createCard(cardsForm) {
      this.userData.cardsList.push(cardsForm)
    },
    removeCard(card) {
      this.userData.cardsList = this.cardsList.filter(c => c.id !== card.id)
    },
    addToFavorites(dish) {
      dish.favorite = true
      this.userData.favoriteDishes.push(dish)
    },
    removeToFavorites(dish) {
      this.userData.favoriteDishes = this.userData.favoriteDishes.filter(d => d.id !== dish.id)
      dish.favorite = false
    },
    addToCart(dish) {
      if (dish.additionally === true) {
        this.modalVisible = true
        this.selectedFoodItem = dish
      }
      if (dish.additionally === false) {
        dish.inCart = true
        this.cart.listDishes.push(dish) 
        this.cart.totalAmount += dish.price
      }
    },
    hideModal() {
      this.modalVisible = false
    },
    addAdditionally(additionally) {
      if (additionally.selected === false) {
        this.selectedFoodItem.price += additionally.surcharge
        this.selectedFoodItem.amount = this.selectedFoodItem.price
      }
      if (additionally.selected === true) {
        this.selectedFoodItem.price -= additionally.surcharge
        this.selectedFoodItem.amount = this.selectedFoodItem.price
      }
      additionally.selected = !additionally.selected
    },
    addSelectedFoodCart(selectedFoodItem) {
      selectedFoodItem.inCart = true
      this.cart.listDishes.push(selectedFoodItem)
      this.cart.totalAmount += selectedFoodItem.price
      this.modalVisible = false
    },
    increaseCounter(order) {
      order.counter++
      order.amount += order.price
      this.cart.totalAmount += order.price
    },
    reduceCounter(order) {
      order.counter--
      order.amount -= order.price
      this.cart.totalAmount -= order.price
      if (order.counter < 1) {
        this.cart.listDishes = this.cart.listDishes.filter(o => o.id !== order.id)
        order.inCart = false
        order.counter = 1
      }
    },
    makeOrder() {
      let order = {
        id: Date.now(),
        status: 'Текущий',
        stage: 0,
        month: (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        listDishes: this.cart.listDishes,
        totalAmount: this.cart.totalAmount,
        deliveryAmount: this.cart.deliveryAmount,
        selectedAddress: this.cart.selectedAddress,
        selectedPayment: this.cart.selectedPayment,
        selectedTime: this.cart.selectedTime
      }
      this.userData.myOrders.push(order)

      for (const dish of this.cart.listDishes) {
        dish.inCart = false
      }

      this.cart = {
        listDishes: [],
        totalAmount: 0,
        deliveryAmount: 0,
        selectedAddress: {},
        selectedPayment: {},
        selectedTime: {},
      }
    },
    removeOrder(order) {
      order.status = 'Отменен'
    }
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  background: #E9E9E9;
  font-family: "Gilroy";
}
</style>