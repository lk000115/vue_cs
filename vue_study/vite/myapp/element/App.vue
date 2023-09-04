<!-- 
    element插件测试
 -->
 <template>
    <el-container class="layout-container-demo" style="height: 100vh;">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :router="true">
            <el-menu-item index="/home">
              <template #title>
                <el-icon><message /></el-icon>首页
              </template>                 
            </el-menu-item>
            <el-sub-menu index="/news">
                <template #title>
                  <el-icon><message /></el-icon>新闻管理
                </template> 
                <el-menu-item index="/news/addnews">
                   <span>创建新闻</span>
                </el-menu-item>
                <el-menu-item index="/news/newslist">
                    <span>新闻列表</span>
                </el-menu-item>    
            </el-sub-menu>

          </el-menu>
        </el-scrollbar>
      </el-aside>
  
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
        </el-header>
  
        <el-main>
          <el-scrollbar>
              <router-view> </router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
  
  const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
  const tableData = ref(Array.from({ length: 20 }).fill(item))
  </script>
  
  <style >
 *{
      margin: 0;
      padding: 0;

 }


  /* .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  } */
  </style>
  
