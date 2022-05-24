## A Sample Trello board App Using React 

 **A small web application for managing projects, organize tasks, and build team spirit—all in one place**

- User should be able to add and label columns. 
- User should be able to add and edit cards(notes)
- User should be able to move cards between columns.
- Support tests

Desktop view
<img width="1413" alt="image" src="https://user-images.githubusercontent.com/37729206/170110994-4939c7f3-feb9-4964-bb10-17f3bad1a22e.png">

Update or edit card(note)
<img width="1402" alt="image" src="https://user-images.githubusercontent.com/37729206/170111144-93375018-d24a-42fb-8cba-5be0c404b9ac.png">

Move cards between columns
<img width="367" alt="image" src="https://user-images.githubusercontent.com/37729206/170111377-4f29ff67-6a9d-40ba-8f8f-70df2083fbc9.png">


### Following Design System
 we use the idea of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) as a part of building a web page.

 Basic Terminology
* Atom - A single and the most basic entity in our system. This can be anything, be it a single image or a simple piece of text indicating a headline/subheadline.

* Molecules - Group of atoms forms a molecule. A combination of an image and a headline can form a card, which is indeed a molecu****le.
`Atom + Atom = Molecule`

* Row - Group of molecules forms a row. A couple of card groups arranged in some order can form a row. This can be the highest entity level in our system where multiple rows form a web page.
`Molecule + Molecule = Row`.

### Prerequisites
To set up the development environment you need to have `Node >= 14.0.0` and `npm >= 5.6` on your machine.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best perfo
