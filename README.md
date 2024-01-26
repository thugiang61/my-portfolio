# my-portfolio

## Getting started 
An online platform to showcase my relevant skills and experiences.

Main sections: 
- Introduction: Main goal and theme settings.
- About me: My information as well as places to find me.
- Projects: My old and current projects.
- Contact me: Send me messages and let's get connected!

The project is built with following main technologies: VueJS, Firebase, SCSS, VueMotion 

## Project structure
  `my-portfolio`
  
    ├─ `public`: Project entry point.
    
    ├─ `src`
    
    │   ├── `assets` : All styles and extra content of the application could be found here.
    
    │   ├── `components` : All reusable code will be put together into a single component.
    
    │   ├── `composables` : All reusable functions that encapsulate stateful logic.
    
    │   ├── `data` : Application static data.
    
    │   ├── `firebase` : Firebase configurations and functions to interact with Firestore.
    
    │   ├── `pages` : Main pages of application that load components.
    
    │   ├── `router` : Navigation configuration folder.

    │   ├── `App.vue` : Root component of the application.
    
    │   ├── `main.js` : Scripts to import necessary packages and run application .
    
    ├─ `.gitignore` : All files untracked by git.
    
    ├─ `babel.config.js` :  All configuration for Babel.
    
    ├─ `jsconfig.json` :  All JS configuration is in here.
    
    ├─ `package.json` :  Auto-generated file that lists all plugins and theirs meta data.
    
    ├─ `README.md` : Project documentation. Please read it before running the project.
    
    ├─ `vue.config.js` : All VueJS configuration is in here.
    
    └─ `yarn.lock` : Lock file or package dependencies of the project.

## Firestore setup 
1. When recuiters visit a portfolio page and want to leave a message, they can go to [Contact me][contact-me] section and send their offers or ideas. These messages will be saved in [Cloud Firestore][cloud-firestore].

2. To setup connection to your own Firestore, you will need a Google account, and then follow this step-by-step [instruction][firestore-instruction].

3. Note that in this project, all configuration keys are saved in __.env__ file, and then imported to [firebase/config.js][firebase-config-file] file using __procee.env...__

4. The __addMessage__ function in [firebase/contacts.firestore.js][contacts-file] helps write data into your Firestore.

5. After configuring both on your [Google Firebase Console][firebase-console] and portfolio project successfully, all sent messages will be store in your connected Firestore.

## Project development
### Project setup and packages installation
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```
### Compiles and minifies for production
```
yarn build
```
### Lints and fixes files
```
yarn lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[contact-me]: [https://thugiang61.github.io/home#contact-me]
[cloud-firestore]: [https://firebase.google.com/docs/firestore]
[firestore-instruction]: [https://firebase.google.com/docs/firestore/quickstart]
[firebase-config-file]: [https://github.com/thugiang61/thugiang61.github.io/blob/master/src/firebase/contacts.firestore.js]
[contacts-file]: [https://github.com/thugiang61/thugiang61.github.io/blob/master/src/firebase/contacts.firestore.js]
[firebase-console]: [https://console.firebase.google.com/u/0/]
