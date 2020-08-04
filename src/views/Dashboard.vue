<template>
  <div class="container-fluid bg-color">
    <div class="row">
      <header class="header expander-left" style="margin-left: 240px">
        <p class="title">後台管理系統</p>
        <a class="btn btn-logout">
          <icon class="btn-icon" iconName="exit" />
          <span>登出</span>
        </a>
      </header>
      <SideBar ref="sidbar" :links="navLink" navStyle="dark"/>
      <div class="container-fluid" style="margin-left: 240px; margin-top: 70px">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from 'components/SideBar.vue';

export default {
  name: 'Dashboard',
  components: { SideBar },
  data() {
    return {
      navLink: [
        {
          name: '首頁',
          path: '/admin',
          icon: 'dashboard',
        },
        {
          name: '產品列表',
          path: '/admin/products',
          icon: 'cart',
        },
        {
          name: '優惠卷',
          path: '/admin/coupons',
          icon: 'coupon',
        },
        {
          name: '訂單列表',
          path: '/admin/orders',
          icon: 'creditCard',
        },
        {
          name: '檔案管理',
          path: '/admin/storage',
          icon: 'storage',
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.bg-color {
  background: #F7F7F7;
  height: 100%;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.5rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    margin: 0;
    position: relative;
    color: inherit;
    font-size: 1.125rem;
    font-weight: 600;
  }
  .btn {
    @include btn;
    background: transparent;
    &-logout {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .btn-icon {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
}
</style>
