<template>
  <div id="app">
    <aside class="aside aside-fixed" ref="sidebar">
      <div class="aside-header">
        <a href="javascript:void(0)" class="aside-logo">uR<span>etail</span></a>
        <a
          href="javascript:void(0)"
          class="aside-menu-link"
          @click.prevent="toggleMenuSize('sidebar')"
        >
          <menu-icon size="1.5x" class="custom-class"></menu-icon>
          <x-icon size="1.5x" class="custom-class"></x-icon>
        </a>
      </div>
      <div
        class="aside-body"
        @mouseover="addMenuSizeHoverMode('sidebar')"
        @mouseleave="removeMenuSizeHoverMode('sidebar')"
      >
        <div class="aside-loggedin">
          <div class="d-flex align-items-center justify-content-start">
            <a href="" class="avatar"
              ><img src="./assets/img/img1.png" class="rounded-circle" alt=""
            /></a>
            <div class="aside-alert-link">
              <a
                href="javascript:void(0)"
                class="new"
                v-tooltip.top="'You have 2 unread messages'"
                title="You have 2 unread messages"
                ><message-circle-icon
                  size="1.5x"
                  class="custom-class"
                ></message-circle-icon
              ></a>
              <a
                href="javascript:void(0)"
                class="new"
                v-tooltip.top="'You have 4 new notifications'"
                title="You have 4 new notifications"
                ><bell-icon size="1.5x" class="custom-class"></bell-icon
              ></a>
              <a
                href="javascript:void(0)"
                v-tooltip.top="'ログアウト'"
                title="Sign out"
                ><log-out-icon size="1.5x" class="custom-class"></log-out-icon
              ></a>
            </div>
          </div>
          <div class="aside-loggedin-user">
            <a
              href="#loggedinMenu"
              class="d-flex align-items-center justify-content-between mg-b-2"
              @click.prevent="toggleSubMenu('userProfile')"
            >
              <h6 class="tx-semibold mg-b-0">Katherine Pechon</h6>
              <chevron-down-icon
                class="custom-class"
                size="1.5x"
              ></chevron-down-icon>
            </a>
            <p class="tx-color-03 tx-12 mg-b-0">Administrator</p>
          </div>
          <div class="collapse" id="loggedinMenu" ref="userProfile">
            <ul class="nav nav-aside mg-b-0">
              <!--              <li class="nav-item">-->
              <!--                <a href="" class="nav-link"-->
              <!--                  ><edit-icon size="1.5x" class="custom-class"></edit-icon>-->
              <!--                  <span>Edit Profile</span></a-->
              <!--                >-->
              <!--              </li>-->
              <li class="nav-item">
                <a href="" class="nav-link"
                  ><user-icon size="1.5x" class="custom-class"></user-icon>
                  <span>マイページ</span></a
                >
              </li>
              <!--              <li class="nav-item">-->
              <!--                <a href="" class="nav-link"-->
              <!--                  ><settings-icon-->
              <!--                    size="1.5x"-->
              <!--                    class="custom-class"-->
              <!--                  ></settings-icon>-->
              <!--                  <span>Account Settings</span></a-->
              <!--                >-->
              <!--              </li>-->
              <!--              <li class="nav-item">-->
              <!--                <a href="" class="nav-link"-->
              <!--                  ><help-circle-icon-->
              <!--                    size="1.5x"-->
              <!--                    class="custom-class"-->
              <!--                  ></help-circle-icon>-->
              <!--                  <span>Help Center</span></a-->
              <!--                >-->
              <!--              </li>-->
              <li class="nav-item">
                <a href="" class="nav-link"
                  ><log-out-icon
                    size="1.5x"
                    class="custom-class"
                  ></log-out-icon>
                  <span>ログアウト</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <ul class="nav nav-aside">
          <li class="nav-label">注文管理</li>
          <li class="nav-item active">
            <router-link to="/">
              <a href="javascript:void(0)" class="nav-link"
                ><shopping-bag-icon
                  size="1.5x"
                  class="custom-class"
                ></shopping-bag-icon>
                <span>注文No一覧</span></a
              >
            </router-link>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="nav-link"
              ><globe-icon size="1.5x" class="custom-class"></globe-icon>
              <span>仕入一覧</span></a
            >
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="nav-link"
              ><pie-chart-icon
                size="1.5x"
                class="custom-class"
              ></pie-chart-icon>
              <span>梱包一覧</span></a
            >
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="nav-link"
              ><life-buoy-icon
                size="1.5x"
                class="custom-class"
              ></life-buoy-icon>
              <span>配送一覧</span></a
            >
          </li>
          <!--          <li class="nav-label mg-t-25">Pages</li>-->
          <!--          <li class="nav-item with-sub" ref="userSubMenu">-->
          <!--            <a-->
          <!--              href=""-->
          <!--              class="nav-link"-->
          <!--              @click.prevent="toggleSubMenu('userSubMenu')"-->
          <!--              ><user-icon size="1.5x" class="custom-class"></user-icon>-->
          <!--              <span>User Pages</span></a-->
          <!--            >-->
          <!--            <ul>-->
          <!--              <li><a href="page-profile-view.html">View Profile</a></li>-->
          <!--              <li><a href="page-connections.html">Connections</a></li>-->
          <!--              <li><a href="page-groups.html">Groups</a></li>-->
          <!--              <li><a href="page-events.html">Events</a></li>-->
          <!--            </ul>-->
          <!--          </li>-->
        </ul>
      </div>
    </aside>
    <div class="content ht-100v pd-0">
      <div class="content-header">
        <div class="content-search">
          <search-icon size="1.5x" class="custom-class"></search-icon>
          <input type="search" class="form-control" placeholder="Search..." />
        </div>
        <nav class="nav">
          <a href="javascript:void(0)" class="nav-link"
            ><help-circle-icon
              size="1.5x"
              class="custom-class"
            ></help-circle-icon
          ></a>
          <a href="javascript:void(0)" class="nav-link"
            ><grid-icon size="1.5x" class="custom-class"></grid-icon
          ></a>
          <a href="javascript:void(0)" class="nav-link"
            ><align-left-icon size="1.5x" class="custom-class"></align-left-icon
          ></a>
        </nav>
      </div>
      <div class="content-body">
        <transition name="page" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <Toast></Toast>
    </div>
  </div>
</template>

<script>
import Toast from "primevue/toast";
import Tooltip from "primevue/tooltip";
import {
  SearchIcon,
  HelpCircleIcon,
  GridIcon,
  AlignLeftIcon,
  MessageCircleIcon,
  BellIcon,
  LogOutIcon,
  ShoppingBagIcon,
  UserIcon,
  LifeBuoyIcon,
  GlobeIcon,
  PieChartIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon
  // SettingsIcon,
  // EditIcon
} from "vue-feather-icons";

export default {
  name: "App",
  components: {
    Toast,
    SearchIcon,
    HelpCircleIcon,
    GridIcon,
    AlignLeftIcon,
    MessageCircleIcon,
    BellIcon,
    LogOutIcon,
    ShoppingBagIcon,
    UserIcon,
    LifeBuoyIcon,
    GlobeIcon,
    PieChartIcon,
    MenuIcon,
    XIcon,
    ChevronDownIcon
    // SettingsIcon,
    // EditIcon
  },
  directives: {
    tooltip: Tooltip
  },
  methods: {
    toggleSubMenu(elementName) {
      this.$refs[elementName].classList.toggle("show");
    },
    toggleMenuSize(elementName) {
      const ref = this.$refs[elementName];
      if (ref.classList.contains("minimize")) {
        ref.classList.remove("minimize");
        return;
      }
      ref.classList.add("minimize");
    },
    addMenuSizeHoverMode(elementName) {
      const ref = this.$refs[elementName];
      if (!ref.classList.contains("minimize")) {
        return;
      }
      ref.classList.add("maximize");
    },
    removeMenuSizeHoverMode(elementName) {
      const ref = this.$refs[elementName];
      ref.classList.remove("maximize");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

img {
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
