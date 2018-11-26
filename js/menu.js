
function searchAddress(info){
    alert(info.selectionText);
    let searchcode = encodeURIComponent(info.selectionText);
    alert(searchcode);
    var newURL = "https://www.google.cn/maps/search/"+searchcode+"?hl=zh-CN&source=opensearch";
    chrome.tabs.create({ url: newURL });
    // window.open("yoururl");
}

chrome.contextMenus.create(
    {   
        "type" :"normal",
        "title": "百度地图搜索此地址",
        "contexts":["all"],
        "onclick": searchAddress
    },
    function(){
        console.log("创建右菜单");
    }
)