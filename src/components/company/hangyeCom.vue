<template>
	<div>
		<div class="hangyeSelect">
			<div class="top">
				<ul>
					<li v-for="(item,index) in hangyeList" :key="index">{{item}}</li>
				</ul>
			</div>
			<div class="bottom">
				<div class="reset">重置</div>
				<div class="confirm">确定</div>
			</div>
		</div>
		<div class="mask"></div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      hangyeList: [
        '全部',
        '非互联网行业',
        '健康医疗',
        '生活服务',
        '旅游',
        '金融',
        '信息安全',
        '广告营销',
        '数据服务',
        '智能硬件',
        '文化娱乐',
        '网络招聘',
        '分类信息',
        '电子商务',
        '企业服务',
        '移动互联网',
        '社交网络',
        '教育培训',
        '游戏',
        'O2O',
        '互联网',
        '媒体',
        'IT软件',
      ],
    };
  },
  components: {},
};
</script>

<style scoped lang="scss">
div {
	.hangyeSelect {
		width: 100%;
		height: 350px;
		list-style: none;
		background: #f8f8f8;
		position: relative;

		.top {
			overflow: auto;

			padding: 16px 24px 40px;
			height: 350px;
			color: #f8f8f8;
			font-size: 12px;
			ul {
				list-style: none;
				display: flex;
				flex-wrap: wrap;

				li {
					border: 1px solid #cecece;
					background: #fff;
					color: #666;
					border-radius: 8px;
					min-width: 70px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					margin: 0 18px 8px 0;
					margin-bottom: 15px;
				}
				li:hover {
					background: #53cac3;
					color: #fff;
					border: 0;
				}
			}
		}
		.bottom {
			width: 100%;
			height: 41px;
			background: #fff;
			display: flex;
			padding: 0 20px;
			position: absolute;
			bottom: 0;
			div {
				width: 50%;
				height: 41px;
				color: #8d8d8d;
				line-height: 41px;
				text-align: center;
				font-size: 13px;
			}

			div:hover {
				color: #53cac3;
			}
		}
	}
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.6;
	}
}
</style>
