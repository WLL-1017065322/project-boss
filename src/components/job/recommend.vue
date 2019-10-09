<template>
	<div>
		<ul>
			<li>推荐</li>
			<li>最新</li>
		</ul>
		<div class="mask"></div>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="scss">
div {
	ul {
		padding: 16px 24px;
		width: 100%;
		height: 130px;
		list-style: none;
		background: #e9efef;
		li {
			height: 49px;
			line-height: 49px;
			color: #8d8d8d;
			font-size: 12px;
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
