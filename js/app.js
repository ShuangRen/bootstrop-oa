var app = {
	init : function (valueJson) {
		this.valueJson = valueJson;
		return this;
	},
	getTixian : function () {
		var t = this;
		$('.ajaxBtn').click(function () {
			t.tid = $(this).attr('rel');
		});
		$('.true_btn').click(function () {
			$.ajax({
				'type' : 'POST',
				'url'  : t.valueJson['Url'],
				'data' : t.tid,
				success : function (data) {
					window.location.reload();
				}
			})
		});
	},
	getCity : function (array) {
		  var t = this
		  var a = document.getElementById('to_cn');
	      var b = document.getElementById('city');
	      var c = document.getElementById('qu')
	      //地区初始化

	      dsy.inset(a, b, c, array);
	      return this;
	},
	setYzm : function (url) {
		var t = this;
		$('.yzmbtn').click(function () {
			$.ajax({
				'type' : 'post',
				'url'  : url,
				success : function (data) {
					t.djs();
				}
			})
		})

	},
	djs : function () {
		var timer = null;
		var oB = 60;
		timer = setInterval(function () {
			if(oB <= 0) {
				clearInterval(timer)
				$('.yzmbtn').html('点击发送短信');
				$('.yzmbtn').attr('disabled', false);
			}else {
				$('.yzmbtn').html(oB + '秒后重发');
				$('.yzmbtn').attr('disabled', true);
				oB--;
			}
		},1000);
	}

}
	
if(!+[1,]) {
	alert('检测到您使用的是IE低版本浏览器,为了您更好的体验,请升级到至少IE9 或使用其它浏览器')
}

