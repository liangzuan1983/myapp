<template>
	<!-- 引导页会显示在这个嵌套路由中 -->
    <section>
            <router-view class="view" ></router-view>
    </section>
</template>
<style>
.view {
    min-height: 100%;
    text-align: center;
    line-height: 100px;
    color: rgba(0,0,0,0.5);
}
</style>