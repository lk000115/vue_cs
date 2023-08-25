<!-- 
    路由测试--底边导航栏
 -->
<template>
    <div class="tabbar">
        <ul>
       <!--以下写法可行,但是会在li中加一个A标签  -->
            <!-- <li>
                <router-link to="/films" active-class="kerwin" >电影</router-link>
            </li>
            <li>
                <router-link to="/cinemas" active-class="kerwin">影院</router-link>
            </li>
            <li>
                <router-link to="/center" active-class="kerwin">我的</router-link>
            </li> -->
      <!-- router-link 自定义写法 -->
 


        </ul>
    </div>
</template>

<style scoped lang="scss">
.kerwin{
    color:red
}
.tabbar {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;

    ul {
        display: flex;

        li {
            flex: 1;
        }

    }


}
</style>