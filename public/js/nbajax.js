/**
 * 牛逼ajax请求类
 * 要用这个类必须引入jquery
 */
function Ajax (host, params) {
	if (host.slice(host.length - 1, host.length) !== "/") {
		host += "/";
	}
	this.host = host;
	this.params = params;
	this.tk_key = null;
}

Ajax.prototype.init = function (route, data, suc , err) {
	var that = this;
	this.send("putTest", this.params, function (data) {
		that.tk_key = data.tk_key;
		if (that.tk_key == null)
			that.tk_key = "";
		that.send(route, data, suc , err);
	}, function (data) {
		
	}, true);
}

/**
 * 发送请求
 * @param {Object} route  请求路由
 * @param {Object} data		数据
 * @param {Object} suc		成功时回调函数
 * @param {Object} err		失败是回调函数
 */
Ajax.prototype.send = function(route, data, suc , err, notCheck){
	if (!notCheck && this.tk_key == null) {
		this.init(route, data, suc , err);	
		return;
	}
	data = data || {};
	data["tk_key"] = this.tk_key;
    $.ajax({
        url:this.host + route,
        type:"POST",
        dataType:"text",
        data : data,
        error: function(data){
        	data = JSON.parse(data);
            err(data);
        },
        success: function(data){
	        data = JSON.parse(data);
	        if (data.code != 0) {
	            alert(data.message);
	            if (err ) {
	                err (data);
	            }
	            return;
	        }
	        suc(data);
        }
    });
}
