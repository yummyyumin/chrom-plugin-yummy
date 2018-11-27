function searchAddress(info) {
    alert(info.selectionText);
    var searchcode = encodeURIComponent(info.selectionText);
    var newURL = "https://www.google.cn/maps/search/" + searchcode + "?hl=zh-CN&source=opensearch";
    chrome.tabs.create({
        url: newURL
    });
}

// 右键增加选项
chrome.contextMenus.create({
        "type": "normal",
        "title": "google地图搜索此地址",
        "contexts": ["all"],
        "onclick": searchAddress
    },
    function () {
        console.log("创建右菜单");
    }
)