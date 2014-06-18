$(function() {
	$.vegas('slideshow', {
	  backgrounds:[
	    { src:'http://38.media.tumblr.com/34ff6663c9148a1de5f64d5586793f61/tumblr_n6erylTSnO1st5lhmo1_1280.jpg', fade:1000 },
	    { src:'http://37.media.tumblr.com/f6c67ec2821a91051e4175f8a102e1e2/tumblr_n6rzpcsMk41st5lhmo1_1280.jpg', fade:1000 },
	    { src:'http://37.media.tumblr.com/313bda6360078360090ef5c3ec48a7c6/tumblr_n6rzsunanL1st5lhmo1_1280.jpg', fade:1000 },
	    { src:'http://37.media.tumblr.com/6755c171c47e020419102fb49d3e6f5e/tumblr_n381rrGEmG1st5lhmo1_1280.jpg', fade:1000 }
	  ]
	})('overlay', {
	  src:'../img/overlay.png'
	});
});