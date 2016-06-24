window.onerror = function (msg, file, line, column, err) {
    /*
    msg: error message
    file: file path
    line: row number
    column: column number
    err: error object
    */
    alert(msg + file + ':' + line);
};

(() => {
	if (usAvailable() || !usExist()) {
		//return;
	}

	var zoom = 1;
	document.addEventListener('gestureend', function (e) {
		zoom += (e.scale - 1);
		alert(zoom);
		return;
		let scale = ev.originalEvent.scale;
		alert(scale);
	});

	function usExist() {
		let content = document.getElementsByName('viewport').item(0).content;
		content = content.replace(/\s+/g, "");

		if (content.indexOf('user-scalable=yes') > 0) {
			return true;
		}
		return false;
	}

	function usAvailable() {
		let ua = navigator.userAgent;
		if (/iPhone/.test(ua)) {
			ua.match(/iPhone OS (\w+){1,3}/g);
			let osv = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
			if (osv >= 900) {
				return false;
			} else {
				return true;
			}
		} else if (/iPad/.test(ua)) {
			ua.match(/CPU OS (\w+){1,3}/g);
			let osv = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
			if (osv >= 900) {
				return false;
			} else {
				return true;
			}
		}
	}
})();