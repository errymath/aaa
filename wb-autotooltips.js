/*AUTO TOOLTIP => http://www.warungbebas.com/2011/02/otomatisasi-tooltip-link-gambar-akronim.html*/tx("<style>.fs_atrplusImg{max-width:125px;min-width:30px;padding:3px;border:1px solid #ccc;background:#f0f0f0;margin:3px 0 0}.fsatrplusDiv{max-width:125px}.fs_atrbks img{max-width:125px;margin:3px 0 0}</style>");wb.$_tt_c=function(s){s=s.replace(/\'/g,'').replace(/&#39;/g,'&#8217;');return s};wb.$_auto_tooltip=function(id){var _area=fs.$(id);if(_area){var _t,_s;var _acr=_area.getElementsByTagName("acronym");for(var i=0;i<_acr.length;i++){if(!_acr[i].onmouseover){if(_acr[i].title){_t=wb.$_tt_c(_acr[i].title);_s=_acr[i].setAttribute('onmouseout','tooltip.hide()');_s=_acr[i].setAttribute('onmouseover','tooltip.show(\'<b>Acronim: </b><br>'+_t+'\')');_s=_acr[i].removeAttribute('title')}}}var _anchor=_area.getElementsByTagName("a");for(var i=0;i<_anchor.length;i++){if(_anchor[i].getAttribute('class')!='fsnott'){if(!_anchor[i].onmouseover){if(!_anchor[i].title){_t=_anchor[i].innerHTML.replace(/\n/gi,'');_t=wb.$_tt_c(_t);_t=_t.replace(/float-left /g,'');_t=_t.replace(/float-right "/g,'');_t=_t.replace(/ align="left"/g,'');_t=_t.replace(/ align="right"/g,'');_s=_anchor[i].setAttribute('onmouseover','tooltip.show(\'<div class=fs_atrbks>'+_t+'</div>\')')}else if(_anchor[i].title){_t=wb.$_tt_c(_anchor[i].title);_s=_anchor[i].setAttribute('onmouseover','tooltip.show(\''+_t+'\')');_s=_anchor[i].removeAttribute('title')}_s=_anchor[i].setAttribute('onmouseout','tooltip.hide()')}}}var _img=_area.getElementsByTagName("img");for(var i=0;i<_img.length;i++){if(_img[i].getAttribute('class')!='fsnott'){var gbr=_img[i].src;if(!_img[i].onmouseover){if(!_img[i].title){_s=_img[i].setAttribute('onmouseover','tooltip.show(\'<img class=fs_atrplusImg src='+gbr+'>\')')}else if(_img[i].title){_t=wb.$_tt_c(_img[i].title);_s=_img[i].setAttribute('onmouseover','tooltip.show(\'<center><img class=fs_atrplusImg src='+gbr+'><br><div class=fsatrplusDiv>'+_t+'</div></center>\')');_s=_img[i].removeAttribute('title')}_s=_img[i].setAttribute('onmouseout','tooltip.hide()')}}}}};