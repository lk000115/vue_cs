<!-- 
    element插件测试
 -->
 <template>
    <el-container class="layout-container-demo" style="height: 100vh;">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :router="true" :default-active="route.fullPath">
            <el-menu-item index="/home">
              <template #title>
                <el-icon><HomeFilled /></el-icon>首页
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
        <el-header >
          <div>新闻管理系统</div>
        </el-header>
  
        <el-main>
          <el-scrollbar>
            {{ route.fullPath }}
              <router-view> </router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script  setup>
  import { ref } from 'vue'
  import { Menu as IconMenu, Message, Setting,HomeFilled } from '@element-plus/icons-vue'
  import {useRoute} from 'vue-router'
  const route = useRoute()
  // console.log(route.fullPath);

  </script>
  
  <style >
 *{
      margin: 0;
      padding: 0;

 }
.el-header{
   background-color: #019fde;
   display: flex;
   align-items: center;
   justify-content: center;

}
  </style>
  
