

Hello Jumpstart, I am Lucas Manuel Faner, an applicant for the Front-

End Engineer (REMOTE) job.

I tried to keep the guide as comprehensible as possible, while adding

shortcuts for a better experience.

If I can provide you with any further information, please let me know.

**Table of Contents:**

\1. [Introduction](#br2)

\2. [Creating](#br3)[ ](#br3)[the](#br3)[ ](#br3)[Main](#br3)[ ](#br3)[Rectangle](#br3)

a. [Adding](#br4)[ ](#br4)[the](#br4)[ ](#br4)[Icon](#br4)

b. [Adding](#br9)[ ](#br9)[Title](#br9)[ ](#br9)[and](#br9)[ ](#br9)[Text](#br9)

c. [Adding](#br11)[ ](#br11)[the](#br11)[ ](#br11)[Button](#br11)

\3. [Interactive](#br14)[ ](#br14)[Object](#br14)

a. [States](#br14)

b. [onClick](#br15)

c. [Creating](#br17)[ ](#br17)[the](#br17)[ ](#br17)[Smaller](#br17)[ ](#br17)[Rectangle](#br17)

\4. [Cleaning](#br19)[ ](#br19)[Code](#br19)

\5. [Result](#br21)

\6. [Additional](#br23)[ ](#br23)[Notes](#br23)





\1. Introduction

I began creating a React project with Visual Studio Code’s integrated

terminal, using the command **npx create-react-app**

**jumpstart** according to the [react.js](https://reactjs.org/docs/create-a-new-react-app.html)[ ](https://reactjs.org/docs/create-a-new-react-app.html)[docs](https://reactjs.org/docs/create-a-new-react-app.html)[.](https://reactjs.org/docs/create-a-new-react-app.html)

then switch directory and start to see if it has been created correctly.

and here it is.





\2. Creating the Main Rectangle

Following the design provided,

I feel like I could start from creating the main rectangle to contain

the **elements** (icon, title text, body text and button). To do so, I had

to erase unused code, such as the default template for a fresh started

react app, while creating a new “**Rectangle24”** CSS class for the

mentioned rectangle. (It will be renamed eventually)





Now I go to the new app directory and create an **assets** folder within

the “**src”** folder of the project.





This is where I will save every image that I will use in the project.

For guidance, I followed the dimensions that [Figma](https://www.figma.com/file/Ef9WrAE3OHCSuYiELEvp1r/Jumpstart-Frontend-Intro-Assessment?node-id=1%3A2)[ ](https://www.figma.com/file/Ef9WrAE3OHCSuYiELEvp1r/Jumpstart-Frontend-Intro-Assessment?node-id=1%3A2)had provided me

in px. Sometimes I did not have the exact measures, but I found a

workaround to solve it, which I mention in additional notes.





The result is as follows:





A white box with a grey border in a white background. It looks messy

so I will add the background color to work better.

It must be added within the **index.css** file.

Okay, now that the Icon works, I will go back to the **src** folder and

create a “fonts” folder within it.

Download the font provided b[y](https://www.jumpstartfilings.com/)[ ](https://www.jumpstartfilings.com/)[Jumpstart](https://www.jumpstartfilings.com/)[ ](https://www.jumpstartfilings.com/)and extract it in a folder

inside “fonts” folder





Within **app.css** we will install the new font, following the directory in

which it was extracted.

and then insert it to a style:





Now we can add the **.Title** class to a HTML paragraph.

So far:

Now it is time for the text body:





And its class:

Result:





Now for the View Document button, I will create a paragraph with a

class:

Result:





Now for the border of the button:

And here it is:

For the rectangle below the *Main Rectangle*, I will create a rectangle

with the same width as the main one, and a height of 4px according

to Figma once again.

And put the code below the </body> of the main rectangle.





Title was looking a little messy, so I added a new font:

And I added it to the class:





\3. Interactive Object

Now for the *three dots button* ( … ) I discovered a feature Figma had

to export as PNG. Sadly, it becomes pixelated.

Nevertheless, I solved it [afterward](#br23)[.](#br23)

I saved the PNG file to the **assets** folder within **src** and imported it**.**

To make the *three dots button* show when the mouse was hovered on

the *main rectangle*, I had to add **states** to my function, and the **CSS**

class.





It now shows as soon as the mouse pointer is on the rectangle

Now I needed to add an **onClick** event for the image to bring the

new rectangle

For the program to work correctly, I must add a new state to the

function

Before I continue, I must check if everything is in order so far. To do

so, I add a Hello paragraph with the **if (&&) conditioner** in React.





And the script is working:

Great! Now I will create the new rectangle, being smaller than the

main one, following the dimensions provided.

I will now make the menu close when the mouse pointer leaves both

the *main rectangle* and the small new rectangle.

Repeating the [process](#br14)[ ](#br14)[used](#br14)[ ](#br14)[before](#br14)[ ](#br14)to download a PNG image from

Figma, I downloaded the small rectangle icons, saving them to the

**assets** folder once again.





And of course, imported them.

Now the classes:





And the HTML code:

A little messy, but close to the end:





\4. Cleaning Code

Classes were disorganized as well as code. It was time to begin

sorting alphabetically and cleaning code.

Sorted:





Cleaner HTML/JS now with commentary:

Followed by a couple CSS code tweaks to improve visuals and

formatting, deleted some extra HTML/JS code as well as useless files.





\5. Result

Here is the definitive **result:**









ADITIONAL NOTES

Sometimes I had to think outside of the box, because the

representations were not as accurate as expected (e.g. the *View*

*Document border* didn’t specify its size or margins, so I assumed it

would follow the same line as the *body text container* had.

This happened to me as well when I saw the *three dot options menu*

*icons* (2) I calculated it by downloading the image at 100% size and

using the ruler provided by [**Adobe**](https://www.adobe.com/la/products/photoshop.html)[** ](https://www.adobe.com/la/products/photoshop.html)[Photoshop**](https://www.adobe.com/la/products/photoshop.html)[**,](https://www.adobe.com/la/products/photoshop.html)[ ](https://www.adobe.com/la/products/photoshop.html)to estimate the px

value.

**To fix the pixelated icons** I asked my girlfriend, who is a Graphic

Designer, to re-draw those icons for exclusive use within this

exercise. I then resized them within the code to sharpen the way they

look.





