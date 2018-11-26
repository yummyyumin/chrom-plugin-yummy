onload = function () {
    var qrcode = new QRCode("qrcode", {
        text: "hello world!",
        width: 180,
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        // QRCode的容错级别
        correctLevel: QRCode.CorrectLevel.H
    });

    function creatErweima(url,favIconUrl){
        favIconUrl = favIconUrl || "";
        qrcode.clear(); 
        qrcode.makeCode(url);
        
        document.getElementById("logo").style.opacity = 0;

        if (favIconUrl) { //tab有图标的情况下动态赋值
            document.getElementById("logo").src = favIconUrl;
            document.getElementById("logo").style.opacity = 1;
        }
    }

    //生成当前页二维码
    chrome.tabs.getSelected(function (tab) {
        // console.log(tab);
        //QRCode(元素id,相关配置文件)
        creatErweima(tab.url,tab.favIconUrl);
    });

    // 根据输入内容生成二维码
    document.getElementsByClassName('surebtn')[0].onclick = function(){
        var text = document.getElementById('intext').value;
        console.log(text);
        if( !text ) return alert("请填写内容");
        creatErweima(text,"");
    };
}