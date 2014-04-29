// Keep it in an anonymous function to avoid setting global variables everywhere
(function(){
	/*!
	* contentloaded.js
	*
	* Author: Diego Perini (diego.perini at gmail.com)
	* Summary: cross-browser wrapper for DOMContentLoaded
	* Updated: 20101020
	* License: MIT
	* Version: 1.2
	*
	* URL:
	* http://javascript.nwbox.com/ContentLoaded/
	* http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	*
	*/
	
	if(document.URL.indexOf("http://assets.txmblr.com/") >= 0){ 
		// Don't wrap on Tumblr preview.
		//console.log("Not inserting.");
	} else {
		if(top != self) top.location.replace(location);
	}
	
	var fixed = '<div class="uvt_sub uvt_img"> \
	    <a href="http://usvsth3m.com"><img src="http://static.usvsth3m.com/resources/watermark-logo-120-white.png" alt="Powered by Us Vs Th3m"></a> \
	  </div>';
	
	var tiheader = '<div class=\"uvt_sub uvt_nomobile\"> \
		     <ul>\
			     <li>More from us:</li>';
	
	var tifooter = '</ul>\
	</div>\
	<div class=\"uvt_sub uvt_mobile\">\
	  <a href=\"http://usvsth3m.com/\">More from UsVsTh3m</a>\
	</div>';
	
	function shuffle_wrapper_links(array) {
	    var counter = array.length, temp, index;
	
	    // While there are elements in the array
	    while (counter--) {
	        // Pick a random index
	        index = (Math.random() * counter) | 0;
	
	        // And swap the last element with it
	        temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }
	
	    return array;
	}
	
	var wrapperlinks = shuffle_wrapper_links(
  
    [{"title":"How much are you hated by the Daily Mail?","url":"http:\/\/games.usvsth3m.com\/are-you-hated-by-the-daily-mail\/"},{"title":"You can't do simple maths under pressure","url":"http:\/\/games.usvsth3m.com\/maths\/"},{"title":"Crapper mapper","url":"http:\/\/games.usvsth3m.com\/crapper-mapper\/"},{"title":"Which city should you live in?","url":"http:\/\/games.usvsth3m.com\/which-city\/"},{"title":"The North-o-Meter","url":"http:\/\/games.usvsth3m.com\/north-o-meter\/"},{"title":"How Well Do You Know Me?","url":"http:\/\/games.usvsth3m.com\/how-well-do-you-know\/"},{"title":"BRIAN's Brain Presents: WROD","url":"http:\/\/games.usvsth3m.com\/wrod\/"}]
  
  );
	
	var toinsert = tiheader + "<li><a href=\"" + wrapperlinks[0]['url'] + "\">" + wrapperlinks[0]['title'] + "</a></li>" + "<li><a href=\"" + wrapperlinks[1]['url'] + "\">" + wrapperlinks[1]['title'] + "</a></li>" + "<li><a href=\"" + wrapperlinks[2]['url'] + "\">" + wrapperlinks[2]['title'] + "</a></li>" + tifooter;
	
	var contents = [toinsert, toinsert,
	
	'<div class="uvt_sub uvt_nomobile">Be the first to know when we make new stuff. Follow <a href="http://twitter.com/usvsth3m">@UsVsTh3m</a> on Twitter:</a></div> \
	  <div class="uvt_sub uvt_twitter" id="uvt_apply_twitter"><a href="https://twitter.com/UsVsTh3m" class="twitter-follow-button" data-show-count="false" data-size="large" data-dnt="true">Follow @UsVsTh3m</a> \
	  </div> \
	',
	
	'<div class="uvt_sub uvt_nomobile">Be the first to know when we make new stuff. Like <a href="http://facebook.com/usvsth3m">Us Vs Th3m</a> on Facebook:</div> \
	  <div class="uvt_sub"><iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FUsVsTh3m&amp;width=212&amp;height=62&amp;show_faces=false&amp;colorscheme=dark&amp;stream=false&amp;show_border=false&amp;header=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:212px; height:62px; padding: 0; margin: 0;" allowTransparency="false"></iframe></div> \
	',
	
	'<div class="uvt_sub uvt_nomobile">Be the first to know when we make new stuff. Join our mailing list:</div> \
	  <div class="uvt_sub"><form action="http://tumblr.us7.list-manage.com/subscribe/post?u=413d307240ac96f159f1f7295&amp;id=cce2bb0ac4" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank"><input id="email_entry" name="EMAIL" type="email" placeholder="Enter your email..." required><input id="email_submit" type="submit" value="Join our mailing list"/></form></div> \
	'
	];
	
	function contentLoaded(win, fn) {
	
		var done = false, top = true,
		
		doc = win.document, root = doc.documentElement,
		
		add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
		rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
		pre = doc.addEventListener ? '' : 'on',
		
		init = function(e) {
		if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
		(e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
		if (!done && (done = true)) fn.call(win, e.type || e);
		},
		
		poll = function() {
		try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
		init('poll');
		};
		
		if (doc.readyState == 'complete') fn.call(win, 'lazy');
		else {
		if (doc.createEventObject && root.doScroll) {
		try { top = !win.frameElement; } catch(e) { }
		if (top) poll();
		}
		doc[add](pre + 'DOMContentLoaded', init, false);
		doc[add](pre + 'readystatechange', init, false);
		win[add](pre + 'load', init, false);
		}
	
	}
	
	function uvt_wrap() {
	
	  if(top != self) top.location.replace(location);
	  var body = document.body;
	  var uvt_over = document.createElement('div');
	  uvt_over.id = 'uvt_over';
	  var uvt_box = document.createElement('div');
	  uvt_box.id = 'uvt_box';
	  var node;
	
	  while (node = body.firstChild) {
	    uvt_box.appendChild(node);
	  }
	
	  uvt_over.appendChild(uvt_box);
	  body.appendChild(uvt_over);
	
	  var uvt_credits = document.createElement('div');
	  uvt_credits.id = 'uvt_credits';
	  
	  // Sometimes, we might want to override which panel is shown, based on JS on the parent page
	  if (typeof whichpanel === 'function') {
		//console.log("Panel preselected.");
		var boselecta = whichpanel();
	  } else {
		//console.log("Choosing random panel.");
		var boselecta = Math.floor(Math.random() * contents.length);
	  }
	  uvt_credits.innerHTML = fixed + contents[boselecta];
	
	  body.appendChild(uvt_credits);
	
	  if(document.getElementById('uvt_apply_twitter') != null) {
	
	    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	
	  }
	
	}
	
	if(document.URL.indexOf("http://assets.txmblr.com/") >= 0){ 
		// Don't wrap on Tumblr preview.
	} else {
		contentLoaded(window,uvt_wrap);
	}
})();