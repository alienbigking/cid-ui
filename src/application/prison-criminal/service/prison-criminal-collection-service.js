function IsSuccess(val) {
    if (val === "-1") {
      return -1;
    } else {
        return 0;
    }
};

/**
* 从 file 域获取 本地图片 url
*/
function getFileUrl(obj) {
    let url;
    url = window.URL.createObjectURL(obj.files.item(0));
    return url;
    }

export default{
    IsSuccess,
    getFileUrl
};
