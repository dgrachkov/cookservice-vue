import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import UserAgreement from '@/pages/UserAgreement.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import MyData from '@/pages/MyData.vue'
import MyAddresses from '@/pages/MyAddresses.vue'
import MyAddressesForm from '@/pages/MyAddressesForm.vue'
import LinkedCards from '@/pages/LinkedCards.vue'
import LinkedCardsForm from '@/pages/LinkedCardsForm.vue'
import Deposit from '@/pages/Deposit.vue'
import Cart from '@/pages/Cart.vue'
import MyOrders from '@/pages/MyOrders.vue'
import OrderId from '@/pages/OrderId.vue'
import FavoriteDishes from '@/pages/FavoriteDishes.vue'
import MakingOrder from '@/pages/MakingOrder.vue'

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/любимое', 
    component: FavoriteDishes
  },
  { 
    path: '/корзина', 
    component: Cart 
  },
  { 
    path: '/мои заказы', 
    component: MyOrders 
  },
  { 
    path: '/мои заказы/№:id', 
    component: OrderId 
  },
  { 
    path: '/оформление заказа', 
    component: MakingOrder 
  },
  { 
    path: '/пользовательское соглашение', 
    component: UserAgreement 
  },
  { 
    path: '/политика конфиденциальности', 
    component: PrivacyPolicy 
  },
  { 
    path: '/депозит', 
    component: Deposit 
  },
  { 
    path: '/привязанные карты', 
    component: LinkedCards 
  },
  { 
    path: '/привязанные карты/форма заполнения карты', 
    component: LinkedCardsForm 
  },
  { 
    path: '/мои адреса', 
    component: MyAddresses 
  },
  { 
    path: '/мои адреса/форма заполнения адреса', 
    component: MyAddressesForm 
  },
  { 
    path: '/мои данные', 
    component: MyData 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
