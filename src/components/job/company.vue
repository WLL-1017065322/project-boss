<template>
	<div>
		<div class="jobComSelect">
			<div class="top">
				<ul class="items">
					<li class="item" v-for="(item,index) in jobComSelectList" :key="index">
						<p>{{item.title}}</p>
						<ul>
							<li v-for="(item,index) in item.list" :key="index">{{item}}</li>
						</ul>
					</li>
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
      jobComSelectList: [
        {
          title: '融资规模',
          isCheckbox: true,
          list: [
            '全部',
            '未融资',
            '天使轮',
            'A轮',
            'B轮',
            'C轮',
            'D轮及以上',
            '已上市',
            '不需要融资',
          ],
        },
        {
          title: '团队规模',
          isCheckbox: true,
          list: [
            '全部',
            '0-20人',
            '20-99人',
            '100-499人',
            '500-999人',
            '1000-9999人',
            '10000人以上',
          ],
        },
        {
          title: '行业',
          isCheckbox: true,
          list: [
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
            '移动互联网',
            '企业服务',
            '社交网络',
            '教育培训',
            'O2O',
            '游戏',
            '互联网',
            '媒体',
            'IT软件',
          ],
        },
      ],
    };
  },
  components: {},
};
</script>

<style scoped lang="scss">
div {
	.jobComSelect {
		width: 100%;
		height: 411px;
		list-style: none;
		background: #f8f8f8;
		position: relative;

		.top {
			overflow: auto;

			padding: 16px 24px 40px;
			height: 411px;
			color: #f8f8f8;
			font-size: 12px;

			.items {
				width: 100%;
				list-style: none;
				.item {
					margin-bottom: 30px;

					p {
						font-size: 13px;
					}
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
						}
						li:hover {
							background: #53cac3;
							color: #fff;
							border: 0;
						}
					}
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
