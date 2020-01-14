var api = 'http://juzhenkeji.winderinfo.com/';

function parseURL() {
	var url = location.search.split("?")[1];
	var para = url.split("&");
	var len = para.length;
	var res = {};
	var arr = [];
	for (var i = 0; i < len; i++) {
		arr = para[i].split("=");
		res[arr[0]] = arr[1];
	}
	console.log(res);
	return res;
}

function toTop() {
	window.scrollTo(0, 0);
}

code();

function code() {
	$.ajax({
		url: api + 'api/index/fotter',
		type: 'POST',
		data: {
			page: 0,
			limit: 100
		},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 1) {
				var data = res.data;
				$("#code").attr('src',data.smallimage);
			}
		}
	});
}
