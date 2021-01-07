class Common {
    constructor() {
        this.manageCookie = {
            setCookie: this.setCookie,
            removeCookie: this.removeCookie,
            getCookie: this.getCookie
        }
    }

    setCookie(name, value, data) {
        document.cookie = `${ name }=${ value };max-age=${ data }`;
        return this;
    }

    removeCookie(name) {
        this.setCookie(name, '', -1);
        return this;
    }

    getCookie(name, callback) {
        let allCookieArr = document.cookie.split('; ',);
        let len = allCookieArr.length;
        for (let i = 0; i < len; i ++) {
            let itemCookieArr = allCookieArr[i].split('=');
            if (itemCookieArr[0] == name) {
                callback(itemCookieArr[1]);
                return this;
            }
        }
        return this;
    }
}

export default Common;