// loadind效果
function loadind() {
    var loading = '<div class="loading-box">'+
        '<div class="lds-css ng-scope">'+
        '<div class="lds-spinner">'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '</div>'+
        '</div>'+
        '</div>';
    $('body').append(loading);
};

function closeloadind(){
    $('.loading-box').remove();
}

// 弹出与关闭遮罩
function openMask(){
    var maskHtml = '<div class="mask z-index9999 show">'+
        '</div>';
    $("body").append(maskHtml);
};
function closeMask(){
    $('.mask').remove();
};