<h1 align="center"><img src="assets/images/logo-2.png" style="margin: 0;" alt="image of site logo"></h1>

[View the live website here.](https://passion4film.github.io/Milestone-Project-2/)

# Procrast-A-Nation!
I wanted to create a game website to provide some amusement and distraction for people who suffer from stress and boredom in their busy lives. I believe it is sometimes easier to focus on the important work/studies if you acknowledge that some fun is necessary and create time and space to indulge in a bit of procrastination.
All human beings can procrastinate, therefore I decided to call my website a play on that word and the nation: Procrast-A-Nation.

So far, the site consists of a Memory Card matching game, which has 2 levels. A memory card game is basically a grid of paired cards in a random order, face-down. The user needs to turn the cards over and match each pair to win. 

## The important things to consider were:

1. The game should be timed so the user knows how long it takes them, but also for increased difficulty they will have a time limit to match all the cards. The time also needs to stop when the game is over or when the user has won.
2. The cards needed to be shuffled randomly for each new game, so the user cannot predict where each one will be.
3. The game needs to know when the cards are matched or not and what to do with them for either scenario.
4. The user should be able to see how many pairs they have made as a 'score' and how many times they have flipped the cards as a 'move' counter.
5. The user should be able to restart the game at any time, which would reset the game and re-shuffle the cards randomly.
6. There should be some way of informing the user when they have won, or if they have lost by running out of time.

## User stories

- #### Site user goals
    1. As a site user, I want to navigate the site easily and understand what the site is offering.
    2. As a site user, I want to be entertained by the games on offer, they should be fully interactive and I should be able to see how I am doing at all times, as well as being told if I win or lose.
    3. As a site user, I want to be able to increase the difficulty of the game or make it more challenging by the use of levels or something.

- #### Site owner goals
    1. As a site owner, I want to provide a clear website that is easy to navigate and read all text/info, with no distractions or broken links etc.
    2. As a site owner, I want the games to be fun to play, but quite simple. I want the user to feel challenged but not frustrated.
    3. As a site owner, I want the games to be interactive and to provide feedback to the user. I want the difficulty to increase with the inclusion of a level 2, with the view to creating more games and more levels in the future.

-   ### Design
    -   #### Colour Scheme
        -   The main colours used are blue and white, as these complement each other nicely. I also feel that blue is a calm and relaxed colour and thats the feel I want to encourage in the website; that this is a place to chill and not worry about time or work. I used a background image with a pattern as I feel that is more interesting than a plain coloured background. However, I chose a pattern that isnt 'busy' so as not to be distracting to the eye when playing the games.
    -   #### Typography
        -   The Roberto Condensed font is used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Roberto Condensed is easy to read, attractive and appropriate to the aesthetic of the site. The font colour throughout is white to make it stand-out and for ease of reading against the background.
    -   #### Imagery
        -   I created the site logo using Adobe Photoshop and a stock photo located online that I edited to suit my purpose. The images for the cards had to fit each theme, Marvel Characters for level 1 and travel pictures for level 2. The images had to be re-sized to be uniform and fit in the game-grid, they also had to be clear and of good quality so that the users were able to match them properly. 

## Wireframes page designs:
Home page wireframe:

<img src="wireframes/home-page.png" style="margin: 0;">

Memory Card Level 1 page wireframe:

<img src="wireframes/memory-game-leve1.png" style="margin: 0;">

Memory Card Level 2 page wireframe:

<img src="wireframes/memory-game-level2.png" style="margin: 0;">

The pages as shown on a tablet wireframes:

<img src="wireframes/tablet-screens.png" style="margin: 0;">

The pages as shown on a mobile wireframes:

<img src="wireframes/mobile-screens.png" style="margin: 0;">

(The game is designed to be played in portrait mode as this is the natural mode for mobile internet viewing)

## Features

-   Responsive on all device sizes. For example:

<img src="screenshots/mock-up1.jpg" style="margin: 0;">

<img src="screenshots/mock-up2.jpg" style="margin: 0;">

-   Interactive memory card game, with more than 1 level.

-   Home-page: This page is the landing page when you visit the site, so it needed to be clear about what the website was about. There are clear option buttons which allows the user to navigate the site easily.

-   Memory Card Level 1: this page is the first level of the memory card game, so there is an explanation of what a memory card game is and the rules/theme for level 1. The game grid then sits below this (with 12 cards, 6 pairs) and the game timer starts when the first card is clicked as per the explanation. The score/moves/time is shown so the user can be aware of their progress the whole game. They can then play again, move to the next level or return to the main menu page.

-   Memory Card Level 2: this page is the second level of the memory card game. It also has the explanation of the memory card game and the rules/theme for level 2. The game grid and score/time box are in the same position but the game grid contains 4 more cards to make 8 total pairs, to increase the difficulty with the same time limit as level 1.

### Future Features
-   I would like to create and add more games using JavaScript, which is why I left a 'more games coming soon button' to let the users know that if they liked this site to keep coming back to see what new games will be added in the future. I did follow a online tutorial to create a 'Snake' game using JavaScript, however I didn't think it was necessary to add that to this website currently as I am not advanced enough yet to develop the basic game idea further and customize it. But in the future games like 'Snake' and 'Noughts & Crosses' could be added to the games inventory for this site.

## Technologies Used

### Languages Used

-   In this project I used [HTML5](https://en.wikipedia.org/wiki/HTML5), [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) and [JavaScript](https://en.wikipedia.org/wiki/JavaScript). 

### Frameworks, Libraries & Programs Used

-   [Google Fonts:](https://fonts.google.com/) Google fonts were used to import the 'Roberto Condensed' font into the style.css file which is used on all pages throughout the project.
-   [Font Awesome:](https://fontawesome.com/) Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
-   [GitHub:](https://github.com/) GitHub is used to store the projects code after being pushed from Git.
-   [Git:](https://git-scm.com/) Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
-   [Responsinator:](http://www.responsinator.com/) Responsinator was used to check the site was responsive across all devices.
-   [Balsamiq:](https://balsamiq.com/) Balsamiq was used to create the wireframes during the design process.
-   [Autoprefixer CSS online](https://autoprefixer.github.io/) Autoprefixer was used to get the correct web extensions like -webkit- added to my CSS so that it worked on IOs systems.
-   [Lighthouse](https://developers.google.com/web/tools/lighthouse)
-   Chrome, Microsoft Edge & Firefox internet browsers.
-   Adobe Photoshop, for the logo.
-   I also made use of the [Bootstrap framework library](https://getbootstrap.com/).


## Testing

### Manual Testing documentation

[Please see the testing file](testing.md)

### Validators

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

<img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />

JSHint was used to check there were no errors in the JavaScript code, while there may be some warnings after running the JS though JSHint, they are mainly that a lot of the code is only available in ES6, but this was the code I was taught and there are no errors with the code, it works on all systems tested so I am keeping it with the ES6 version.

### Testing User Stories from User Experience (UX) Section

- #### Site user goals
    1. As a site user, I want to navigate the site easily and understand what the site is offering.
        -   Upon entering the site there is a clear welcome explanation about the site and it's purpose. There are also clear navigational buttons throughout the site that are clear to understand and enable the site to be easy to navigate.

        <img src="screenshots/screenshot1.png" style="margin: 0;">
    2. As a site user, I want to be entertained by the games on offer, they should be fully interactive and I should be able to see how I am doing at all times, as well as being told if I win or lose. 
        -   The memory card game is fully interactive, the game will only start when being 'clicked' by the user. Both levels have results boxes underneath which give the user clear updates on their 'Score' (how many cards they have paired correctly), their 'Moves' (how many times they have overturned a pair of cards to find the matches) and the 'Time' (they have 60 seconds to find all the matches). The user can see their progress at all times, plus a message pops up when they win or lose the game.

        <img src="screenshots/screenshot2.png" style="margin: 0;">
    3. As a site user, I want to be able to increase the difficulty of the game or make it more challenging by the use of levels or something.
        -   There are currently 2 levels to the memory card game. The user has the option to try the harder level 2, which has 8 pairs instead of 6 but the same time-limit. The cards also have their own unique theme so that it feels like a different gaming experience.

        <img src="screenshots/screenshot3.png" style="margin: 0;">

- #### Site owner goals
    1. As a site owner, I want to provide a clear website that is easy to navigate and read all text/info, with no distractions or broken links etc. 
        -   The site has clear navigational buttons throughout and has been thoroughly tested to ensure the text is clear to read and all links work correctly.
    2. As a site owner, I want the games to be fun to play, but quite simple. I want the user to feel challenged but not frustrated.
        -   The memory card game is not complicated but is fun as it has a nostalgia element to it. One user that tested the site stated "I  like the memory game. Reminds  me of being a kid". the time limit ensures that the user feels challenged to locate all matched pairs in time, which is made more of a challenge in level 2.
    3. As a site owner, I want the games to be interactive and to provide feedback to the user. I want the difficulty to increase with the inclusion of a level 2, with the view to creating more games and more levels in the future.
        -   The game is fully interactive with the users input; they are able to start the game when they want, flip which cards they want, restart the game and choose a different level. There is constant feedback with the result box displaying their score, moves and time taken. The difficulty is increased with level 2 having more cards to match but the same time-limit.

### Further Testing

-   The Website was tested on Google Chrome, Microsoft Edge and FireFox browsers to check it loaded correctly.
-   The website was viewed on a variety of devices such as Desktop, Laptop and a variety of iPhones & Android phones to check it loaded correctly.
-   The website was tested on Responsinator to ensure responsiveness on all devices.
-   A large amount of testing was done to ensure that all pages were linking correctly. This was done by frequently moving from one page by clicking the button links for all pages on all devices.
-   A large amount of testing of the game functions was completed during development. After every change the game was tested to ensure no new issues or bugs were located.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues, they reported a success on all fronts.
-   The website was tested on [Lighthouse](https://developers.google.com/web/tools/lighthouse) and achieved a high score on all issues:

    <img src="screenshots/lighthouse-desktop.jpg" style="margin: 0;">
    <img src="screenshots/lighthouse-mobile.jpg" style="margin: 0;">

    You can use the Lighthouse Tool on any webpage by right clicking on the site, then 'inspect', then the two arrow button '>>' and 'Lighthouse'. You can select to test the site as a desktop version or mobile version and then click the blue 'Generate Report' which will provide you with the results in the screenshots provided above.

## Known Bugs

No bugs have been located at the time of Deployment.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Passion4film/Milestone-Project-2/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com/Passion4film/Milestone-Project-2) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Passion4film/Milestone-Project-2)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Passion4film/Milestone-Project-2)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/Passion4film/Milestone-Project-2
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/Passion4film/Milestone-Project-2
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Future maintainability

The images used are stored in the assests/images folder for easy maintainability, the memory card game images are also divided into their own separate folder so it is clear which image relates to what level. It will be simple to swap out or update pictures and the image locations in the HTML are clear.

There is clear code commenting for each section of the HTML pages, which make it easy for developers to view for future maintenence. It makes changing the code/updating the details easier for other developers.

There is also clear code commenting in the CSS & JavaScript sections. Each section is clearly labled to ensure if any bugs or errors do occur it will be simple to see what part of the page each CSS and JavaScript section affects. This makes updating and changing the CSS and JS effects easier for other developers.

## Credits

### Content

Online tutorials:

- The initial game design and the CSS 'flip' animation, with the backface/frontface images, was taken from viewing the tutorial by Youtube user [freeCodeCamp.org](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=330s). However during the middle of the project mentor session, we refractored and simplified alot of the JavaScript code from this video so it doesnt match this exactly anymore, but the basic game did grow from this source.

- The Function time() and inpiration for the updateMoves() was taken from online video created by Youtube user [codeTonight](https://www.youtube.com/watch?v=QrTCHHhoUQU)

- I took some inspiration from these guides also; first by [Sandra Israel-Ovirih](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript) and the second, also based on the first, by [Michelle Aniuchi](https://aadaobi.medium.com/building-a-memory-matching-game-in-javascript-48e792c7b563).

[Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used during the project.

### Media

I created the logo for the site using Adobe Photoshop.

The 'bee happy' slogan was taken from [Google images](https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F630785491557264850%2F&psig=AOvVaw1PJlhki4Q-ZaiB_eyynMaH&ust=1612361458061000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCwtNewy-4CFQAAAAAdAAAAABAD) and the colour changed using 'Paint 3D' to suit the site.

The images for the background and the Memory card game levels used in this site were obtained from Google/images. 

[Background image](https://www.wallpaperup.com/2240/Abstract_blue_circles.html)

Memory Card Level 1
    -   [Marvel Logo](https://wallpapersafari.com/w/AWyX8S)
    -   [Captain America](https://i.pinimg.com/736x/53/73/1e/53731ede3bea7cc3987d0268dedff515--captain-america-comic-capt-america.jpg)
    -   [Wolverine](https://wallpapersafari.com/w/m4IO3L)
    -   [Spiderman](https://www.pinterest.co.uk/pin/261701428325628475/)
    -   [Thor](https://www.wallpapertip.com/wpic/ihoTwo_marvel-comics-wallpapers-iphone-hd/)
    -   [Ironman](https://www.pinterest.co.uk/pin/393924298629357197/)
    -   [Hulk](https://br.pinterest.com/pin/444097213247148553/)

Memory Card Level 2
    -   [Planes background](https://static8.depositphotos.com/1353632/1053/v/950/depositphotos_10536679-stock-illustration-planes-background.jpg)
    -   [Pyramids](https://www.pinterest.co.uk/pin/774124907307794/)
    -   [Petra](https://www.hunebednieuwscafe.nl/2018/09/petra-jordan/)
    -   [Chichen Itza](https://assets-global.website-files.com/56e9debf633486e330198479/57ebf0414c12cc233cbdbed0_under30experiences-blog-7-reasons-you-have-to-see-tulum-chichen-itza.jpeg)
    -   [Great Wall of China](https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fwww.art.com%2Fgallery%2Fid--b6960%2Fgreat-wall-of-china-posters.htm&psig=AOvVaw0s0qYAYBFsq5Z_maunCg6Q&ust=1611754086271000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjm1drbue4CFQAAAAAdAAAAABAD)
    -   [Taj Mahal](https://www.loweaston.co.uk/uploads/images/Gallery/World-Destinations-Portrait/World_32.jpg)
    -   [Colosseum](https://ohfact.com/wp-content/uploads/2015/07/The-Roman-Colosseum.jpg)
    -   [Christ the Redeemer](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg/220px-Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg)
    -   [Machu Picchu](https://www.pinterest.ch/pin/431923420486291443/)

All photos used are stored in the assets folder (and in their own named folders) and labled clearly.

## Acknowledgements

I received inspiration for this project from the online tutorials and example websites credited above as well as much appreciated help from my Mentor; Antonio Rodriguez.

**DISCLAIMER: This project is for educational purposes only, no materials/files are intended for any commercial use**
