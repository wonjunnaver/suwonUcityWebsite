(function(global){
  'use strict';

  // ------------------------------------------------------------------
  // Initialization
  var $nav = $('.page-navigation');


  var $depth1 = $nav.children('ul').addClass('depth1');

  var $depth2 = $depth1.find('ul').addClass('depth2');

  var $allLinks = $nav.find('a');

  var $depth2Bg = $('.depth2Bg');

  var $depth2Title = $('.depth2Bg h2');

  var $allMenu =$('.allMenu');

  var $allMenuDepth1 = $allMenu.children('.container').children('ul').addClass('depth1');

  var $allMenuDepth2 = $allMenuDepth1.children('li').children('ul').addClass('depth2');

  var $btnAllMenu = $('.btn-allMenu');

  var $iconHamberg = $('.icon-hamberg-close');

  var $locatonMenuBtn = $('.wrap-locatonMenu > .selected');
  var $locatonMenu = $('.wrap-locatonMenu').find('.sub-menu');
  
  settingRoleProperties();
  settingAllMenuRoleProperties();

  // ------------------------------------------------------------------
  // Handler
  function navigationActive(e) {
    //console.log('navigationActive');
    allDeactive();
    $(this).parent().addClass('active');
    var $color = $(this).css('color');
    var $depth2TitleText = $(this).html();
    $depth2Title.html($depth2TitleText);////수원U-city디자인에 따른 추가 코드 - 뎁스2 하단 서브메뉴 타이틀
    $depth2Bg.addClass('active');//수원U-city디자인에 따른 추가 코드 - 서브메뉴 크기    
    $depth2Bg.css('border-color',$color);//수원U-city디자인에 따른 추가 코드 - 서브메뉴 선 색상
  }

  function navigationDeactive(e) {
    //console.log('navigationDeactive');
    allDeactive();
  }

  function allDeactive() {
    //console.log('allDeactive');
    $nav.find('.depth1 > li').removeClass('active');
    $depth2Bg.removeClass('active');//수원U-city디자인에 따른 추가 코드 
  }

  function settingRoleProperties() {
    // <div role="navigation">
    if(!$nav.is('nav')) {
      $nav.attr('role', 'navigation');
    }
    $depth1.attr('role', 'menubar');
    $depth2.attr('role', 'menu');
    $allLinks.attr('role', 'menu-item');
  }

  function settingAllMenuRoleProperties(){

    $allMenuDepth2.children('li').each(function(idx){
    //  console.log($(this).find('ul').is('ul'));
      if($(this).find('ul').is('ul')){
        //console.log('has ul!!');
        $(this).children('a').css('pointer-events','none');  
      }
    });
    /*if($allMenuDepth2.has('ul')){
      console.log('has ul!!');
      $allMenuDepth2.children('li').children('a').css('pointer-events','none');  
    }*/
  }

  function depth2Bgleave(evt){
    console.log(evt.target,evt.currentTarget);
    if(evt.target == evt.currentTarget){
      console.log('depth2Bgleave');
      allDeactive();  
    }
  }

  // ------------------------------------------------------------------
  // Event Binding (Event + Handler)
  $nav.on('mouseenter focus', '.depth1 > li > a', navigationActive);  
  $nav.on('blur', 'a:last', navigationDeactive);
  $depth2Bg.on('mouseleave', function(evt) {//서브 메뉴 이벤트 붙이기
    if(evt.target == evt.currentTarget){
      //console.log('depth2Bgleave');
      allDeactive();  
    }  
  });
  $btnAllMenu.on('mousedown', function(){
    allDeactive();
    if(!$allMenu.hasClass('active')){
      $allMenu.addClass('active');
      $iconHamberg.addClass('open');
    }else{
      $allMenu.removeClass('active');
      $iconHamberg.removeClass('open');
    }
  })
$locatonMenuBtn.on('mousedown', function(){
  
  $locatonMenuBtn.toggleClass('active');
  $locatonMenu.toggleClass('active');
})

})(this);
