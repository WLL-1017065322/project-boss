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
          title: '最低学历',
          isCheckbox: true,
          list: [
            '全部',
            '中专及以下',
            '高中',
            '大专',
            '本科',
            '硕士',
            '博士',
          ],
        },
        {
          title: '经验',
          isCheckbox: true,
          list: [
            '全部',
            '应届生',
            '1年以内',
            '1-3年',
            '3-5年',
            '5-10年',
            '10年以上',
          ],
        },
        {
          title: '薪资(单选)',
          isCheckbox: false,
          list: [
            '全部',
            '3k以下',
            '3k-5k',
            '5k-10k',
            '10k-20k',
            '20k-50k',
            '50k以上',
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
