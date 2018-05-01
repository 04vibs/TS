 
npm init
npm install typescript --save -dev
npm install typings --save -dev
tsc --init 
npm link typings
typings install dt~core-js dt~node --global --save 
 
//package.json
after script

 "tsc":"tsc",
    "tsc:W":"tsc-w",
    "lite-server":"lite-server"

    "start": "tsc && concurrently \"npm run tsc:w\" \"lite-server\"",

    //npm install concurrently lite-server