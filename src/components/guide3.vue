<template>
    <div>
        <img class="q1-img" :src="pidong3" alt="">
    </div>
</template>
<script>

const pidong3 = require("../../static/img/3.jpg");
	export default{
		data(){
			return {
				pidong3:pidong3,
				//由于vueg的嵌套路由默认不启动转场动画，需要在其匹配组件中设置为启用
				vuegConfig:{
					disable:false
				}
			}
		}
	}
</script>
<style scoped>
div {
    background: linear-gradient(to bottom, #c9d6ff, #e2e2e2);
}
.q1-img{width: 100%;height: 100%;}
</style>