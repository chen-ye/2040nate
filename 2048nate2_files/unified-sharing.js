window.fbAsyncInit = function() {
// init the FB JS SDK
FB.init({
  appId      : '383984258388383',                        // App ID from the app dashboard
  channelUrl : '//games.usvsth3m.com/channel.html', // Channel file for x-domain comms
  status     : false,                                 // Check Facebook Login status
  xfbml      : false                                  // Look for social plugins on the page
});

// Additional initialization code such as adding Event Listeners goes here
};

// Load the SDK asynchronously
(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/all.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* Google Analytics */

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41079103-2']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/* Relies on the following being present on the parent page:

    - s_code.js tag

*/

var UVT = {
    global: {
        toAbsolute: function(link) {
            var dummyLink = document.createElement('a');
            dummyLink.href = link;
            return dummyLink.href;
        }
    },
    sharing: {
        twitter: function(tweetObject){
            var tweet_url = 'https://twitter.com/intent/tweet?related=usvsth3m&text=';
            tweet_url += encodeURIComponent(tweetObject.message);
            if (tweetObject.url !== undefined) {
                tweetObject.url = UVT.global.toAbsolute(tweetObject.url);
                tweet_url += '&url=' + encodeURIComponent(tweetObject.url);
            }

            var h = 420;
            var w = 550;
            var left = (window.screen.width/2)-(w/2);
            var top = (window.screen.height/2)-(h/2);

            var win = window.open(tweet_url, "_blank", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h);
            win.moveTo(left, top);

            if (tweetObject.resetTwitter) {
                setTimeout(resetTwitter,1000);
            }
        },
        facebook: function(facebookObject){
             facebookObject.url = UVT.global.toAbsolute(facebookObject.url);
                
             FB.ui({
                method: 'feed',
                link: facebookObject.url,
                picture: facebookObject.picture,
                name: facebookObject.title,
                description: facebookObject.message
                }, function(response){});
                
                if (facebookObject.resetFacebook) {
                    setTimeout(resetFacebook,1000);
                }
        },
        email: function(emailObject) {
            emailObject.link = "\n\n" + emailObject.url;
            var zelink = "?subject=" + encodeURIComponent(emailObject.subject) + "&body=" + encodeURIComponent(emailObject.message) + encodeURIComponent(emailObject.link);
            window.open("mailto:%20" + zelink , "_blank", "");
        }
    },
    event: {
        fire: function(eventObject) {
             // Google Analytics
            _gaq.push(['_trackEvent', 'Interactives', eventObject.category, eventObject.message]);

            // Omniture
            s.linkTrackVars = "pageName,prop71,eVar75";
            s.prop71 = "lnk|usvsth3m|" + eventObject.category.toLowerCase() + "|event|" + eventObject.message.toLowerCase();
            s.eVar75 = s.pageName + "_" + s.prop71;
            s.tl(true,'o',eventObject.category + " : Event Fired");
        }
    }
};