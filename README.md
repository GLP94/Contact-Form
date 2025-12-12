# Contact Form

<img width="1912" height="914" alt="screencapture-glp94-github-io-Contact-Form-2025-12-10-10_32_55" src="https://github.com/user-attachments/assets/9393d678-55df-4631-9427-a61852bb264a" />

A contact form made for a challenge from [FrontEnd Mentor](www.frontendmentor.io); It fetches data from the [Advice Slip API](https://api.adviceslip.com) and then shows the advice. Clicking the dice button will fetch another advice to show.

Link to app: https://glp94.github.io/Advice-Generator/

## Tools Used

1. HTML
2. CSS
3. Javascript

## What Was Learned

2. Fetching returns a promise, and the promise needs to be checked to be fulfilled or not (either through response.ok, or response.status === "200"); \n
3. throwing an Error is necessary for those cases were the promise doesn't return an error that can be catched (HTTP Status 4XX, 5XX);

### What Needs Help

1. Nothing much, maybe what other possible ways are there to check for specific errors and how to handle them;
