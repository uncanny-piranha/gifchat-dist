angular.module("gifchatClientApp").run(["$templateCache", function($templateCache) {$templateCache.put("404.html","<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Page Not Found :(</title>\n    <style>\n      ::-moz-selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      ::selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      html {\n        padding: 30px 10px;\n        font-size: 20px;\n        line-height: 1.4;\n        color: #737373;\n        background: #f0f0f0;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n      }\n\n      html,\n      input {\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      }\n\n      body {\n        max-width: 500px;\n        _width: 500px;\n        padding: 30px 20px 50px;\n        border: 1px solid #b3b3b3;\n        border-radius: 4px;\n        margin: 0 auto;\n        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n        background: #fcfcfc;\n      }\n\n      h1 {\n        margin: 0 10px;\n        font-size: 50px;\n        text-align: center;\n      }\n\n      h1 span {\n        color: #bbb;\n      }\n\n      h3 {\n        margin: 1.5em 0 0.5em;\n      }\n\n      p {\n        margin: 1em 0;\n      }\n\n      ul {\n        padding: 0 0 0 40px;\n        margin: 1em 0;\n      }\n\n      .container {\n        max-width: 380px;\n        _width: 380px;\n        margin: 0 auto;\n      }\n\n      /* google search */\n\n      #goog-fixurl ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      #goog-fixurl form {\n        margin: 0;\n      }\n\n      #goog-wm-qt,\n      #goog-wm-sb {\n        border: 1px solid #bbb;\n        font-size: 16px;\n        line-height: normal;\n        vertical-align: top;\n        color: #444;\n        border-radius: 2px;\n      }\n\n      #goog-wm-qt {\n        width: 220px;\n        height: 20px;\n        padding: 5px;\n        margin: 5px 10px 0 0;\n        box-shadow: inset 0 1px 1px #ccc;\n      }\n\n      #goog-wm-sb {\n        display: inline-block;\n        height: 32px;\n        padding: 0 10px;\n        margin: 5px 0 0;\n        white-space: nowrap;\n        cursor: pointer;\n        background-color: #f5f5f5;\n        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        *overflow: visible;\n        *display: inline;\n        *zoom: 1;\n      }\n\n      #goog-wm-sb:hover,\n      #goog-wm-sb:focus {\n        border-color: #aaa;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n        background-color: #f8f8f8;\n      }\n\n      #goog-wm-qt:hover,\n      #goog-wm-qt:focus {\n        border-color: #105cb6;\n        outline: 0;\n        color: #222;\n      }\n\n      input::-moz-focus-inner {\n        padding: 0;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"container\">\n      <h1>Not found <span>:(</span></h1>\n      <p>Sorry, but the page you were trying to view does not exist.</p>\n      <p>It looks like this was the result of either:</p>\n      <ul>\n        <li>a mistyped address</li>\n        <li>an out-of-date link</li>\n      </ul>\n      <script>\n        var GOOG_FIXURL_LANG = (navigator.language || \'\').slice(0,2),GOOG_FIXURL_SITE = location.host;\n      </script>\n      <script src=\"//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script>\n    </div>\n  </body>\n</html>\n");
$templateCache.put("index.html","<!doctype html>\n<html class=\"no-js\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title></title>\n    <meta name=\"description\" content=\"\">\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n    <!-- build:css -->\n    <!-- bower:css -->\n    <link rel=\"stylesheet\" href=\"bower_components/bootstrap/dist/css/bootstrap.css\" />\n    <link rel=\"stylesheet\" href=\"bower_components/font-awesome/css/font-awesome.css\" />\n    <!-- endbower -->\n    <!-- endbuild -->\n    <!-- styles:css -->\n    <link rel=\"stylesheet\" href=\"app/core/styles/chatroom.css\">\n    <link rel=\"stylesheet\" href=\"app/core/styles/main.css\">\n    <!-- endinject -->\n\n\n  </head>\n  <body ng-app=\"gifchatClientApp\" ng-controller=\"RootCtrl\">\n    <!--[if lt IE 7]>\n      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n    <![endif]-->\n\n    <!-- Add your site or application content here -->\n          <div class=\"header\">\n\n              <!-- if logged in, show logout button here -->\n\n                <a class=\"hamburger-link pull-left\" ng-show=\"isLoggedIn()\" ng-click=\"activate()\">\n                  <img class=\"hamburger-image\" src=\"../../images/hamburger.png\"></img>\n                </a>\n\n\n            <h1 class=\"gifchat\">gifchat</h3>\n            </div>\n          <div ng-view=\"\"></div>\n\n    <!-- build:js(.) scripts/oldieshim.js -->\n    <!--[if lt IE 9]>\n    <script src=\"bower_components/es5-shim/es5-shim.js\"></script>\n    <script src=\"bower_components/json3/lib/json3.js\"></script>\n    <![endif]-->\n    <!-- endbuild -->\n\n    <!-- build:js -->\n    <!-- bower:js -->\n    <script src=\"bower_components/jquery/dist/jquery.js\"></script>\n    <script src=\"bower_components/angular/angular.js\"></script>\n    <script src=\"bower_components/bootstrap/dist/js/bootstrap.js\"></script>\n    <script src=\"bower_components/angular-resource/angular-resource.js\"></script>\n    <script src=\"bower_components/angular-cookies/angular-cookies.js\"></script>\n    <script src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script>\n    <script src=\"bower_components/angular-animate/angular-animate.js\"></script>\n    <script src=\"bower_components/angular-touch/angular-touch.js\"></script>\n    <script src=\"bower_components/angular-route/angular-route.js\"></script>\n    <script src=\"bower_components/angular-bootstrap/ui-bootstrap-tpls.js\"></script>\n    <script src=\"bower_components/lodash/dist/lodash.compat.js\"></script>\n    <script src=\"bower_components/angular-ui-router/release/angular-ui-router.js\"></script>\n    <script src=\"bower_components/firebase/firebase.js\"></script>\n    <script src=\"bower_components/firebase-simple-login/firebase-simple-login.js\"></script>\n    <script src=\"bower_components/mockfirebase/dist/mockfirebase.js\"></script>\n    <script src=\"bower_components/angularfire/dist/angularfire.min.js\"></script>\n    <!-- endbower -->\n    <!-- endbuild -->\n    <!-- app:js -->\n    <script src=\"app/app.js\"></script>\n    <script src=\"app/core/controllers/chatroom.js\"></script>\n    <script src=\"app/core/controllers/main.js\"></script>\n    <script src=\"app/core/controllers/root.js\"></script>\n    <script src=\"app/core/directives/mongoose-error.directive.js\"></script>\n    <script src=\"app/core/factories/auth.service.js\"></script>\n    <!-- endinject -->\n\n</body>\n</html>\n");
$templateCache.put("app/core/views/chatroom.html","<div id=\"wrapper\" ng-class=\"{\'toggled\': active == true}\">\n  <!-- Sidebar -->\n	<div id=\"sidebar-wrapper\" ng-show=isLoggedIn()>\n    <ul class=\"sidebar-nav\">\n      <li class=\"sidebar-brand\">\n        <a>\n          Friends Conversations\n        </a>\n      </li>\n      <li>\n    	  <h4><a ng-click=\"addFriend()\">Add a Friend</a><h4>\n      	<input ng-show=\"added\" type=\"text\" ng-model=\"newUser\" class=\"form-control\" placeholder=\"username...\">\n				<button ng-show=\"added\" type=\"submit\" ng-click=\"setFriendUsername(newUser); addFriend()\" class=\"btn btn-xs\" >Add Friend</button>\n      </li>\n      <li ng-repeat=\"user in messages\">\n        <a ng-click=\"setFriendUsername(user.$id)\">{{user.$id}}</a>\n      </li>\n      <li>\n      	<h3><a href=\"\" ng-click=\"logout()\">Logout</a><h3>\n      </li>\n    </ul>\n	</div>\n  <!-- Page header -->\n  <!-- <div ng-include=\"\'components/navbar/navbar.html\'\" class=\"span3\"></div> -->\n  <!-- Page Content -->\n	<div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"row\" ng-show=\"friendsName\">\n        <h1>Welcome back {{username}}, you are now chatting with {{friendsName}}</h1>\n        <div class=\"commentArea yolo\" scroll-glue=\"glued\">\n\n        <script type=\"text/javascript\">\n          var viewHeight = $( window ).height() - 280;\n          $(\'.yolo\').css( \'height\', viewHeight );\n        </script>\n\n        <div ng-repeat=\"texts in privateMessages\" ng-class=\"texts.username == username ? \'bubbledRight\' : \'bubbledLeft\'\">\n          <img class=\"actual-gif\" src=\"{{texts.text}}\">\n\n        	</div>\n\n            <script type=\"text/javascript\">\n              var elem = document.getElementsByClassName(\'commentArea\');\n              elem.scrollTop = elem.scrollHeight;\n              console.log(elem.scrollTop);\n            </script>\n        </div>\n      </div>\n      <footer ng-show=\"friendsName\">\n        <form ng-submit=\"addMessage(userMessage)\" class=\"inputform\">\n        	<input type=\"text\" ng-model=\"userMessage\" class=\"inputbutton\" placeholder=\"please type a word or short phrase search term for gifs\">\n  			  <button type=\"submit\" class=\"btn btn-default\">Send</button>\n        </form>\n      </footer>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("app/core/views/main.html","<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3 panel panel-default\">\n      <div ng-hide=\"isLoggedIn()\">\n        <h1 class=\"margin-base-vertical\">Welcome to Gifchat</h1>\n          <p>\n            a gif is worth 10,000 words.\n          </p>\n          <p>\n            if you\'re new, sign up! otherwise log in below.\n          </p>\n          <div ng-hide=\"activeLogin || activeSignup\">\n            <a ng-click=\"activateLogin()\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-globe\"></span>Sign in!\n                </button>\n            </a>\n            <a ng-click=\"activateSignup()\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\" href=\"/signup\">\n                    <span class=\"glyphicon glyphicon-envelope\"></span>Sign up\n                </button>\n            </a>\n          </div>\n      </div>\n      <div ng-show=\"isLoggedIn()\">\n        <h1 class=\"margin-base-vertical\">Welcome back {{getCurrentUser().name}}</h1>\n          <div>\n            <a href=\"#/chatroom\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-globe\"></span>Take me back to the gifs!\n                </button>\n            </a>\n          </div>\n      </div>\n\n\n      <!-- SIGNUP FORM -->\n\n\n      <form class=\"form\" name=\"form\" ng-submit=\"register(form)\" ng-show=\"activeSignup\" novalidate>\n\n        <div class=\"form-group\" ng-class=\"{ \'has-success\': form.name.$valid && submitted,\n                                            \'has-error\': form.name.$invalid && submitted }\">\n          <label>Username</label>\n          <p class=\"input-group\">\n              <span class=\"input-group-addon\"><span class=\"icon-envelope\"></span></span>\n              <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"user.username\" ng-keydown=\"errors.other=\'\'\"\n                 placeholder=\" e.g. hacker-dude23\" required />\n          </p>\n          <p class=\"help-block\" ng-show=\"form.username.$error.required && submitted\">\n            A username is required\n          </p>\n        </div>\n\n        <div class=\"form-group\" ng-class=\"{ \'has-success\': form.password.$valid && submitted,\n                                            \'has-error\': form.password.$invalid && submitted }\">\n          <label>Password</label>\n          <p class=\"input-group\">\n              <span class=\"input-group-addon\"><span class=\"icon-envelope\"></span></span>\n              <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"user.password\"\n                 ng-minlength=\"3\"\n                 required\n                 mongoose-error/>\n          </p>\n          <p class=\"help-block\"\n             ng-show=\"(form.password.$error.minlength || form.password.$error.required) && submitted\">\n            Password must be at least 3 characters.\n          </p>\n          <p class=\"help-block\" ng-show=\"form.password.$error.mongoose\">\n            {{ errors.password }}\n          </p>\n        </div>\n        <div class=\"form-group has-error\">\n          <p class=\"help-block\">{{ errors.other }}</p>\n        </div>\n\n        <div>\n          <button class=\"btn btn-inverse btn-lg btn-login\" type=\"submit\">\n            Sign up\n          </button>\n          <img src=\"../images/ajax-loader.gif\" height=\"70\" width=\"70\" ng-show=\"loading\">\n\n        </div>\n\n        <hr>\n\n      </form>\n\n      <!-- Login form -->\n      <form class=\"form\" name=\"form\" ng-submit=\"login(form)\" ng-show=\"activeLogin\" novalidate>\n\n        <div class=\"form-group\">\n          <label>Username</label>\n\n          <input type=\"username\" name=\"username\" class=\"form-control\" ng-model=\"user.username\" ng-keydown=\"errors.other=\'\'\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Password</label>\n\n          <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"user.password\" ng-keydown=\"errors.other=\'\'\" required>\n        </div>\n\n        <div class=\"form-group has-error\">\n          <p class=\"help-block\" ng-show=\"form.email.$error.required && form.password.$error.required && submitted\">\n             Please enter your email and password.\n          </p>\n          <p class=\"help-block\" ng-show=\"form.email.$error.email && submitted\">\n             Please enter a valid email.\n          </p>\n\n          <p class=\"help-block\">{{ errors.other }}</p>\n        </div>\n\n        <div>\n          <button class=\"btn btn-inverse btn-lg btn-login\" type=\"submit\">\n            Login\n          </button>\n          <img src=\"../images/ajax-loader.gif\" height=\"70\" width=\"70\" ng-show=\"loading\">\n        </div>\n\n        <hr>\n\n      </form>\n      <!-- End og signinForm -->\n\n      <div class=\"margin-base-vertical\">\n      </div>\n    </div><!-- //main content -->\n  </div><!-- //row -->\n</div>\n");}]);