<template>
  <div class="layout">
    <Topnav class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/dialog">Dialog 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
    <div class="footer">© 王欢</div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject, Ref} from "vue";

export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return {menuVisible};
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    display: flex;

    > aside {
      flex-shrink: 0;
      width: 150px;
      padding: 70px 16px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;

      > h2 {
        margin-bottom: 4px;
      }

      > ol {
        > li {
          padding: 4px 0;
        }
      }
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      border-left: 1px solid #ddd;
      overflow: auto;
    }
  }

  > .footer {
    border-top: 1px solid #ddd;
    text-align: center;
    padding: 16px;
  }
}
</style>
