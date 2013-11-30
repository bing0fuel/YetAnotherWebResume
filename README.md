# Yet Another Web Resume (YAWR) 

A (hopefully) dead simple to configure web resume written in AngularJS. The
primary goal of this app was to be able to display the resume in any modern
browser without needing to set up any database or heavy web server. As long
as it is accessed via http(s):// and not file://, it should work almost
anywhere.

### Here's what it looks like
![](https://raw.github.com/suw/YetAnotherWebResume/master/assets/img/screenshot.png)

## How to install/setup
1. Clone or fork (then clone) this repo.
1. Navigate to the repo directory
1. Fire up your favorite light-weight web server. My preference is the built-in
   PHP one: `php -S localhost:8080`. Then navigate to `http://localhost:8080`.
   A sample version should be displaying.
1. To start modifying, point your editor to `ROOT/app/app.js`
1. Check out the Page variable, which is essentially a giant JSON with all of
   the data that YAWR needs to display itself.
1. Modify the blocks as needed. Currently, there are no docs to indicate which
   fields and/blocks are required. You'll need to do some experimentation.
1. Push to your hosting service. GitHub pages/GitHub.io is always a good
   choice.

## License

This project is licensed under GPL, version 3.0. Please see [LICENSE](LICENSE) for details.

## Warranty (From GPLv3)

THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE
LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR
OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND,
EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH
YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY
SERVICING, REPAIR OR CORRECTION.
