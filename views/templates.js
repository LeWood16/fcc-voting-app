if (!!!templates) var templates = {};
templates["profile"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("user",c,p,1),c,p,0,9,74,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<p>");t.b("\n" + i);t.b("ID: ");t.b(t.v(t.d("user.id",c,p,0)));t.b("<br>");t.b("\n" + i);t.b("Name: ");t.b(t.v(t.d("user.displayName",c,p,0)));t.b("<br>");t.b("\n" + i);t.b("</p>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }});
templates["home"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<body>");t.b("\n" + i);t.b("<nav class=\"navbar navbar-inverse bg-inverse\">");t.b("\n" + i);if(!t.s(t.f("user",c,p,1),c,p,1,0,0,"")){t.b("     <p>Welcome! Please <a href=\"/login\">log in</a>.</p>");t.b("\n" + i);};if(t.s(t.f("user",c,p,1),c,p,0,136,218,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("     <p>Hello, ");t.b(t.v(t.d("user.displayName",c,p,0)));t.b(". View your <a href=\"/profile\">profile</a>.</p>");t.b("\n" + i);});c.pop();}t.b("</nav>");t.b("\n" + i);t.b("<div class=\"jumbotron\">");t.b("\n" + i);t.b(t.rp("<profile0",c,p,""));t.b("</div>");t.b("\n" + i);t.b("</body>");return t.fl(); },partials: {"<profile0":{name:"profile", partials: {}, subs: {  }}}, subs: {  }});