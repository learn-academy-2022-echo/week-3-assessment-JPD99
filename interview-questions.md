# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is Javascript XML, its a obscure coding language that is Javascript, but written in a way that looks like HTML; the hybrid combination allows use to use both javascript and html--well somewhat in React. JSX is only used in React, I don't believe it exist elsewhere. There are a few differences with HTML and JSX to name a few: (1) HTML cannot call on javascript varibles, or constants, however in JSX javascript varibles can be called on with {} (e.g. {varibleName}), (2) HTML can utilize CSS inline modification with the code style="color:blue" , with JSX on the otherhand we do style={ {color:blue} }, and (3) class indentifers are written in different notations HTML class="className" while JSX className:"name".

Researched answer:
<!-- Ref: https://soshace.com/jsx-vs-html-overview-answers-to-faqs/ -->

HTML stands for Hypertext Markup Language, and is the standard of most webpages. JSX stands for Javascript XML, and is heavily popularized by the React application. HTML is a strong standalone coding language, but JSX is a coding language that uses other established code bases of HTML and Javascript; JSX is often referenced as a syntactical sugar coding language, in a way JSX is used to reduce the complexity of code.

Here are some differences to HTML and JSX syntax: 
(1) Almost all HTML tags require an opening tag, and a closing tag---JSX tags all self-close
(2) When referencing a class: HTML uses class="name", JSX uses className="name"
(3) HTML tags have no case-sensitivities, however in JSX we uses camelCase, and in JSX when we write HTML it must be in camelCase too
(4) Inline Styling: HTML uses style="element", JSX uses style={{element}} or style={constant} if theres a constant with stlying existing
(5) Commenting code out: HTML <!--Notes-->, and JSX {/* Notes */}

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: YARN stands from Yet Another Resource Negatiotiator, this is something used to download dependencies all over the web to make sure an application is running properly. When Yarn is ran in a terminal within a React app it usually downloads node modules that help run an app a devloper is working on. 

Researched answer:
<!-- Ref: https://engineering.fb.com/2016/10/11/web/yarn-a-new-package-manager-for-javascript/ -->

Yarn stands for Yet Another Resource Negotiatior, whose main purpose is to solve issues of NPM package manager that relate to: "consistency, security, and performance"; these issues became a major problem to Facebook engineers, and so they were forcibly created Yarn--well to be exact the companies Exponent, Google, and Tilde devloped this alternative NPM client. Yarn takes out the busy work of downloading dependencies on many computers providing consistency to test-run programs with ease. When we are running Yarn, our computers are downnloading dependencies from a global registry on the internet, all of these pieces of code are installed in a folder / directory called "node_modeules".

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function is a function that has no name, but has some sort of function statement (execution code) tied to it; as all function return something to the devloper.

Researched answer:
<!-- Ref https://www.javascripttutorial.net/javascript-anonymous-functions/ -->

An anonymous function is a function that has no name, and must be attached to a varible to be invoked when called. It has 2 unique actions: immediatedly invoking function, or disabling immediate invoking function. 

immediate invoked function is structured as: 
(function () {
    console.log("immediate and constant")
})

In my journey I have came the across of a pesky immediate invoked function within a DOM event before. To remedy this issue I had to create an anonymous function that appears as so:
onClick={ ()=>this.props.addItems(item) }

4. What is the difference between a class and an object?

Your answer: Class is the blueprint for an object, there is already properties and key values that are already characterized and can be easily imprinted on new objects. Objects are data types that have multiple properties assigned to them; in a way an Object is a more complex varible.

Researched answer:
<!-- Ref https://www.guru99.com/difference-between-object-and-class.html -->

Class is a template that instructs objects what to be, preset information are created for a general idea of an object. Objects are much more specific, each object has different values in their respective key values. 

Classes are logical (conceptional) entitiy that cannot be manipulated, what is preset in their code cannot be altered, Objects can be manipulated and they repersent something malleable. 

Classes can only be recalled once and thats during its declaration (creation). Objects can be recalled as many times the devloper wishes. 


5. What is the difference between state and props in React?

Your answer: React State is a storage container that temporarily stores information to whatever the user inputs. State has its preset values, and can be altered--its modifications can be seen in setState. React Props is a method that passes information from the parent to the child component; unidirectional passing. React Props are unmutable, they cannot be altered in any way.

Researched answer:
<!-- Ref: https://aglowiditsolutions.com/blog/react-state-vs-props/ -->
React Props are properties that are intended to pass information downstream from a parent to a child component. Props are usually sent away by placing them inside HTML tags, and thier values can be recalled when we place them inside a function in React component. Props are read-only, they can be displayed, but changes cannot be made at all. 

React State are states that are created with the purpose in mind of updating them later with user input. As we are able to update information, this component type is considered dynamic, while Props is more static. During State's declaration we're required a preset value, while Props can be left empty. 


6. STRETCH: Which is the difference between a div and a span?
I skipped the optional stretch :(
Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:\
<!-- Ref: https://www.educative.io/blog/object-oriented-programming -->
OOP is an idea where devlopers structure thier code into classes with intentions to create new objects with said class; basically making their code more abstract with class, and making thier code more specific with objects.

2. Ruby:
<!-- Ref: https://www.tutorialspoint.com/ruby/ruby_object_oriented.htm#:~:text=Ruby%20is%20a%20pure%20object,instance%20of%20the%20Class%20class.-->
Ruby is an open source coding langugage that specilizes on the use of object-orientated language; Ruby is also a backend langugage.

3. Implicit return:
<!-- Ref: https://www.codecademy.com/courses/learn-swift/lessons/swift-functions/exercises/implicit-return -->
Implicit return is when we receive an output from a function without having the keyword return. 

4. Ruby blocks:
<!-- Ref: https://www.geeksforgeeks.org/ruby-blocks/ -->
Anonymous functions that are similar to a method, they can accept arguuements and return an output. Special conditions are needed when we call on a block within a method. 

5. Ruby hashes:
<!-- Ref: https://www.tutorialspoint.com/ruby/ruby_hashes.htm -->
Hashes are similar to key value pairs; they are located using thier key value names, instead of an index, which might be very tricky... 