console.log(`hello`);
// rgb color rgb(0,0,255);
// corresponding hex code #00 00 ff

const hexValues = [
   "0",
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
];

let randomColor = () => {
   let hex = "#";
   for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexValues.length);
      let randomValues = hexValues[randomIndex];
      hex = hex + randomValues;
   }
   console.log(`🚀${hex}`);
   return hex;
};
let btn = document.getElementById("btn");
btn.onclick = () => {
   document.body.style.backgroundColor = randomColor();
};
