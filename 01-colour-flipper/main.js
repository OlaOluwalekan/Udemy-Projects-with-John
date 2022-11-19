const btn = document.querySelector(".btn");
const colourCode = document.querySelector(".colour-code span");
// const toolTips = document.querySelector(".tool-tips");

const simpleColours = [
  "red",
  "blue",
  "green",
  "black",
  "white",
  "yellow",
  "turquoise",
];

btn.onclick = () => {
  if (document.title == "Colour Flipper | Sample") {
    ChangeBackgroundSample();
  } else {
    ChangeBackgroundHex();
  }
};

const ChangeBackgroundSample = () => {
  let randomIndex = Math.floor(Math.random() * simpleColours.length);
  colourCode.textContent = simpleColours[randomIndex];
  if (simpleColours[randomIndex] == "black") {
    btn.style.border = "solid 2px white";
    btn.style.color = "white";
  } else {
    btn.style.border = "solid 2px black";
    btn.style.color = "unset";
  }
  document.body.style.backgroundColor = simpleColours[randomIndex];
};

const ChangeBackgroundHex = () => {
  let hexValue = GenerateHexValue();

  for (let i = 0; i < hexValue.length; i++) {
    if (hexValue[i] == "") {
      hexValue[i] = "00";
    } else if (hexValue[i].length == 1) {
      hexValue[i] = "0" + hexValue[i];
    }
  }
  let r = hexValue[0];
  let g = hexValue[1];
  let b = hexValue[2];

  colourCode.textContent = `#${r}${g}${b}`;
  document.body.style.backgroundColor = `#${r}${g}${b}`;
};

const GenerateHexValue = () => {
  const codes = [
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
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let rgb = [r, g, b];

  const rgbHex = [];
  rgb.forEach((item) => {
    let r16 = item;
    let rRem;
    let rRemHex;
    let result = "";

    while (r16 > 0) {
      rRem = r16 % 16;
      r16 = Math.floor(r16 / 16);
      rRemHex = codes[rRem];

      result += rRemHex;
    }
    rgbHex.push(result.split("").reverse().join(""));
  });
  return rgbHex;
};

colourCode.onclick = () => {
  CopyCode();
};

const CopyCode = () => {
  navigator.clipboard.writeText(colourCode.textContent).then((res) => {
    console.log(res);
    alert("copied");
  });
};
