
//banner 幻灯片
var swiper = new Swiper('.swiper-banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
	loop: true,
    preloadImages: false,
    lazyLoading: true,
	autoplay:2000,
	speed:1000,
});

//列表banner
var banner_list = new Swiper('.banner_list-container', {
	pagination: '.swiper-banner_list',
    paginationClickable: true,
	loop: true,
    preloadImages: false,
    lazyLoading: true,
	autoplay:2000,
	speed:1000,
});

//公告
var gg = new Swiper('.gg-container', {
	loop: true,
    preloadImages: false,
    lazyLoading: true,
	autoplay:2500,
	speed:1000,
	spaceBetween:9,
	direction: 'vertical',
});










