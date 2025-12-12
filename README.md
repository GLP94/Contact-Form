# Contact Form

<img width="1912" height="914" alt="screencapture-glp94-github-io-Contact-Form-2025-12-10-10_32_55" src="https://github.com/user-attachments/assets/9393d678-55df-4631-9427-a61852bb264a" />

A contact form created as part of frontend mentor's challenge. Features a form that shows a dialog on successfull submission, a custom check for each\n
input to check if any information is written, and one check to specifically check if a @ is present in the email field, and if it is surround by \n
at least one character on each end. It also comes with basic ARIA details, hover, focus, and active states, and it is possible to complete the form \n
through keyboard alone.

## Tools Used

1. HTML
2. CSS
3. Javascript

## What Was Learned

1. Variables are good, and make the work a little easier;
2. Email was supposed to be type=email, but I changed it to type=text, since I was required to make a custom check for the "@" issue. It did not turn out so \n
different from the first option;
3. Custom checkboxes and radio buttons are as simple to make as making opacity: 0, and setting a background-image. Other background options may \n
be required (size, repeat, position);
4. Closest() is only applied to elements that ancestors of that element. For siblings, I rather just used parentElement until getting to the container, and than \n
use querySelector for that element in particular. I got stuck here figuring out why closest wasn't it (for how my HTML was set up).

### What Needs Help

1. First time I deal with ARIA, so I wish to know if the usage in this is correct, could be better, or if needs adjustment;
2. I couldn't think of a better way to make the JS for this. Were there other methods, even requiring modifing the HTMl structure?
3. I know about preventDefault(), but wouldn't that also prevent form submission? How would the submission be handled, then?
