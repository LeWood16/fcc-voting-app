/*

-create FB auth module in Voting App

  -set up passport-facebook
    X-set up a branch to test feature 
    X-create app in FB dev
      X-get FACEBOOK_APP_ID '105670326652055'
      X-get FACEBOOK_APP_SECRET 'ca1fbf5443127b7187936d47dd0f2ee0'
    -create default route in branch to check
      X-override default route with testing route 
      X-put route in app.config.js file
        X-insert component tag into template
        X-create fb-auth feature directory
          X-create fb-auth.module.js
            -insert relevant code
            X-into into index.html
          X-create fb-auth.component.js
            -template
              X-create fb-auth.template.html
              -insert relevant code
            -controller
              -insert relevant code
            X-insert into index.html

        X-insert fbAuth as a module dependency in app.module.js 

      -put angular logic in to check auth
    -create a test to check user login success
      -copy all tutorial files into branch
      -create a unit test file, log(result)
      
      
  
  -set up component (in another branch)
  
    -set up templates for component screens
    
      -set up pre-login template
         -set up route for login
         -create html file for pre-login
           -username input field
           -password input field
           -login submit button
         
      -set up post-login template
        -set up user info in right top corner
          -"Hello, {{ username }}"
          -logout button next to greeting
      -




*/