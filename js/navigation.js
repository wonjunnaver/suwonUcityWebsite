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

  settingRoleProperties();

  // ------------------------------------------------------------------
  // Handler
  function navigationActive(e) {
    console.log('navigationActive');
    allDeactive();
    $(this).parent().addClass('active');
    var $color = $(this).css('color');
    var $depth2TitleText = $(this).html();

    $depth2Title.html($depth2TitleText);////수원U-city디자인에 따른 추가 코드 - 뎁스2 하단 서브메뉴 타이틀
    $depth2Bg.addClass('active');//수원U-city디자인에 따른 추가 코드 - 서브메뉴 크기    
    $depth2Bg.css('border-color',$color);//수원U-city디자인에 따른 추가 코드 - 서브메뉴 선 색상

  }

  function navigationDeactive(e) {
    console.log('navigationDeactive');
    allDeactive();

  }

  function allDeactive() {
    console.log('allDeactive');
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

  function depth2BgDeactive(evt){
    evt.stopPropagation();
    console.log('depth2BgDeactive');
    return false;
    allDeactive();    
  }

  // ------------------------------------------------------------------
  // Event Binding (Event + Handler)
  $nav.on('mouseenter focus', '.depth1 > li > a', navigationActive);
  $nav.on('blur', 'a:last', navigationDeactive);
  //$depth2Bg.on('mouseenter mouseleave', depth2BgDeactive);
})(this);