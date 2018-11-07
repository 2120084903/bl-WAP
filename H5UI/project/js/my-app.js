var $$ = Dom7;

var app = new Framework7({
    touch: {
        tapHold: true, //enable tap hold events
        materialRipple:false //禁用涟漪效果
    },
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    dialog: {
        // set default title for all dialog shortcuts
        buttonOk: '确定',
        // change default "OK" button text
        buttonCancel: '取消'
    }

});

var mainView = app.views.create('.view-main', {
    dynamicNavbar: true,
});



// =============================页面js=================================

// ---------搜索结果页----------

// ==============查询结果上拉加载
// *加载flag*
var allowInfinite = true;
// *上次加载的序号*
var lastItemIndex = $$('.newsBox a').length;
// *最多可加载的条目*
var maxItems = 200;
//* 每次加载添加多少条目*
var itemsPerLoad = 5;
// *注册'infinite'事件处理函数*
$$('.infinite-scroll-content').on('infinite', function () {
    // *如果正在加载，则退出*
    if (!allowInfinite) return;
    //* 设置flag*
    allowInfinite = false;
    //* 模拟1s的加载过程*
    setTimeout(function () {
        /// *重置加载flag*
        allowInfinite = true;
        if (lastItemIndex >= maxItems) {
            // *加载完毕，则注销无限加载事件，以防不必要的加载*
            app.infiniteScroll.destroy('.infinite-scroll-content');
            // *删除加载提示符*
            $$('.infinite-scroll-preloader').remove();
            return;
        }
        // *生成新条目的HTML*
        var html = '';
        for (var i = lastItemIndex + 1; i <= lastItemIndex + itemsPerLoad; i++) {
            html += '<a href="政策详情.html" class="link"><div class="newList"><h1>镇江市人民政府办公室关于印发镇江市2016年深化医药卫生体制改革工作要点的通知</h1><ul class="clearfix"><li>2016-08-02</li><li>江苏省镇江市人民政府办公室</li></ul></div></a>';
        }
        // *添加新条目*
        $$('.newsBox').append(html);
        // *更新最后加载的序号*
        lastItemIndex = $$('.newsBox a').length;
    }, 1000);
});


