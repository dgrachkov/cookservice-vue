<template>
  <div class="w-full max-w-[1170px] mx-auto px-4 py-5 md:py-0 md:mt-14">

    <div class="flex items-center">
      <img src="@/assets/icons/left-arrow.svg" alt="" class="w-5 h-5 cursor-pointer"
        @click="$router.push('/корзина')">
      <h1 class="text-[#212629] text-[22px] sm:text-[30px] md:text-[40px] font-bold ml-3 md:ml-5">
        Оформление заказа
      </h1>
    </div>

    <div class="mt-6 md:mt-14">
      <!-- Список адресов -->
      <div class="flex flex-wrap w-full gap-3">
        <div class="btn_address py-2 md:py-[10px] px-4 md:px-5" 
          v-for="(address, index) in userData.addressesList"
          :key="address.id"
          @click="selectAddress(index)">
          {{ address.name }}
        </div>
        <div class="btn_address py-2 md:py-[10px] px-4 md:px-5"
          @click="$router.push('мои адреса/форма заполнения адреса')">
          Новый адрес
        </div>
      </div>
      <!-- Контент -->
      <div class="mt-10">
        <div class="flex">
          <!-- Адрес -->
          <div class="address_item w-full md:w-[360px] md:h-[170px]" v-if="userData.addressesList.length >= 1">
            <div>
              <h3 class="font-bold text-[#212629] text-xl">
                {{ userData.addressesList[currentAddress].name }}
              </h3>
            </div>
            <div class="max-w-full md:max-w-[265px] mt-4 md:mt-10">
              <span class="text-base">
                {{ userData.addressesList[currentAddress].tower }}, 
              </span>
              <span class="text-base">
                кв./офис {{ userData.addressesList[currentAddress].apartment }}, 
              </span>
              <span class="text-base">
                этаж {{ userData.addressesList[currentAddress].floor }},
              </span>
              <div class="text-base">
                Для охраны {{ userData.addressesList[currentAddress].security }}
              </div>
            </div>
          </div>
          <!-- Комментарий -->
          <div class="hidden md:block ml-[30px] w-full h-[170px] rounded-[13px] bg-[#E9E9E9] border border-white p-4"
              v-if="userData.addressesList.length >= 1">
            <p class="font-bold text-[#212629] text-xl">
              {{ userData.addressesList[currentAddress].comment }}
            </p>
          </div>
        </div>
        <div class="block md:flex mt-[30px]" v-if="userData.addressesList.length >= 1">
          <!-- Список способов оплаты -->
          <div class="relative z-50">
            <transition name="opening">
              <div class="payment_list w-full md:w-[360px] px-5 pt-[70px] absolute top-0 z-4" 
                v-if="paymentVisibility">
                <ul class="w-full" v-for="payment in paymentList" :key="payment.id">
                  <li class="flex justify-between py-5 items-center border-b border-[#ffffff1a] cursor-pointer"
                    @click="selectPayment(payment)">
                    <div class="flex justify-between items-center">
                      <img :src="`img/${payment.img}.svg`" class="w-5 h-5">
                      <span class="ml-5 text-[#FFFFFF] text-base md:text-lg font-light">
                        {{ payment.name }}
                      </span>
                    </div>
                    <div class="text-[#FFFFFF] text-base md:text-lg font-light" 
                      v-if="payment.deposit">
                      {{ userData.deposit }}₽
                    </div>
                  </li>
                </ul>
              </div>
            </transition>
            <!-- Оплата -->
            <div class="payment w-full md:w-[360px] z-3 relative flex justify-between items-center"
              @click="paymentVisibility = !paymentVisibility">
              <div class="flex items-center">
                <img :src="`img/${cart.selectedPayment.img}.svg`" alt="" class="w-5 h-4">
                <div class="text-[#FFFFFF] text-base sm:text-lg font-light ml-[10px]">
                  {{ cart.selectedPayment.name }}
                </div>
              </div>
              <div v-if="cart.selectedPayment.deposit"
                class="font-light text-white text-base sm:text-lg">
                {{ userData.deposit }}₽
              </div>
            </div>
          </div>

          <!-- Выбор времени доставки -->
          <div class="relative mt-[30px] md:mt-0 md:ml-8 z-40">
            <transition name="opening_time">
              <div class="delivery_time w-full md:w-[360px] px-5 pt-[70px] absolute top-0 z-2" 
                v-if="timeVisibility">
                <ul class="w-full pb-4">
                  <li class="time_item p-5 w-full mt-4 flex items-center cursor-pointer justify-between"
                    v-for="time in deliveryTime" 
                    :key="time.id"
                    @click="selectTime(time)"
                  >
                    <span class="text-white text-base md:text-lg font-light">
                      {{ time.name }}
                    </span>
                  </li>
                </ul>
              </div>
            </transition>
            <!-- Время доставки -->
            <div class="time w-full md:w-[360px] z-1 relative flex justify-between items-center"
              @click="timeVisibility = !timeVisibility">
              <div class="flex items-center">
                <img src="@/assets/icons/time.svg" alt="" class="w-5 h-[21px]">
                <div class="text-[#FFFFFF] text-base md:text-lg font-light ml-[10px]">Когда</div>
              </div>
              <div class="text-white text-base md:text-lg font-light">
                {{ cart.selectedTime.name }}
              </div>
            </div>
          </div>
        </div>

        <!-- Комментарий на мобильных устройствах -->
        <div class="mt-[30px] md:hidden"
          v-if="userData.addressesList.length >= 1">
          <label class="text-light text-sm text-[#212629ad]">
            Комментарий (если есть)
          </label>
          <div class="mt-[5px] w-full h-[170px] rounded-[13px] bg-[#E9E9E9] border border-white p-3">
            <p class="font-bold text-[#212629] text-base">
              {{ userData.addressesList[currentAddress].comment }}
            </p>
          </div>
        </div>

        <router-link to="/мои заказы"
          v-if="Object.keys(cart.selectedAddress).length && Object.keys(cart.selectedTime).length">
          <button class="mt-[30px] order_btn w-full md:w-[360px]"
            @click="$emit('makeOrder')">Заказать
          </button>
        </router-link>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'making-order',
  props: {
    userData: {
      type: Object
    },
    cart: {
      type: Object
    }
  },
  data() {
    return {
      paymentVisibility: false,
      timeVisibility: false,
      currentAddress: 0,
      deliveryTime: [
        { id: 0, name: 'Как сожно скорее'},
        { id: 1, name: 'Попозже'}
      ],
      paymentList: [
        { id: 0, name: 'Депозит', img: 'deposit-white', deposit: true},
        { id: 1, name: '**** 3456', img: 'visa-white', deposit: false},
        { id: 2, name: '**** 8944', img: 'mastercard-white', deposit: false},
        { id: 3, name: 'Оплата онлайн', img: 'online-payment', deposit: false},
        { id: 4, name: 'Картой курьеру', img: 'courier', deposit: false},
        { id: 5, name: 'Наличные', img: 'cash', deposit: false},
      ]
    }
  },
  methods: {
    selectPayment(payment) {
      this.cart.selectedPayment = payment
      this.paymentVisibility = false
    },
    selectAddress(index) {
      this.currentAddress = index
      this.cart.selectedAddress = this.userData.addressesList[this.currentAddress]
    },
    selectTime(time) {
      this.cart.selectedTime = time
      this.timeVisibility = false
    },
  }
}
</script>

<style lang="scss" scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select::-ms-expand {
  display: none;
}

.btn_address {
  scroll-behavior: smooth;
  transition: background 0.2s;
  background: #E9E9E9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1); 
  border-radius: 99px;
  color: #212629;
}
.btn_address:hover {
  color: white;
  background-color: #212629; 
}

.address_item,.payment, .time {
  cursor: pointer;
  color: rgba(33, 38, 41, 0.5);
  padding: 22px 20px 22px 20px;
  background: #E9E9E9;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
  border-radius: 13px;
  transition: box-shadow .3s;
  overflow: hidden;
}
.address_item:hover{
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
}
.payment, .time {
  background: #212629;
  outline: none;
  height: 70px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
  transition: background .2s;
}
.payment:hover,.time:hover {
  background-color: #2f3437;
}

.payment_list,.delivery_time {
  background: #212629;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 40px 40px 50px rgba(0, 0, 0, 0.5);
  border-radius: 13px 40px 13px 13px;
  .time_item {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 30px 30px 30px 3px;
  }
}
.opening-enter-active {
  animation: appearance .3s;
}
.opening-leave-active {
  animation: appearance .3s reverse;
}
@keyframes appearance {
  0% {
    height: 0px;
  }
  100% {
    height: 480px;
  }
}

.opening_time-enter-active {
  animation: appearance-time .3s;
}
.opening_time-leave-active {
  animation: appearance-time .3s reverse;
}
@keyframes appearance-time {
  0% {
    height: 0px;
  }
  100% {
    height: 250px;
  }
}

.order_btn {
  padding: 10px 0px;
  background: #E9E9E9;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  color: #212629;
  transition: box-shadow .3s;
}
.btn:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
}
</style>