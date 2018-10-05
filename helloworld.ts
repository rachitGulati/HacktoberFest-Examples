var printHello = (str1: string, str2: string): void => {
   console.log(str1 + " " + str2) 
}

printHello("hello", "world");

/*

HOW TO RUN THIS (Assuming you have node install already)

1) npm install -g typescript
2) tsc helloworld.ts // It will create helloworld.js
3) node helloworld.js
*/
