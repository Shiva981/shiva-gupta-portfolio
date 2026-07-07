import cpp from "../assets/icons/cpp.svg";
import python from "../assets/icons/python.svg";
import javascript from "../assets/icons/javascript.svg";

import arduino from "../assets/icons/arduino.svg";
import esp32 from "../assets/icons/esp32.svg";

import kicad from "../assets/icons/kicad.svg";
import altium from "../assets/icons/altium.svg";

import vscode from "../assets/icons/vscode.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import matlab from "../assets/icons/matlab.svg";

import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css3.svg";
import react from "../assets/icons/react.svg";

const technologies = [
  {
    category: "Programming",
    items: [
      { name: "C++", image: cpp },
      { name: "Python", image: python },
      { name: "JavaScript", image: javascript },
    ],
  },

  {
    category: "Embedded Platforms",
    items: [
      { name: "Arduino", image: arduino },
      { name: "ESP32", image: esp32 },
    ],
  },

  {
    category: "PCB Design",
    items: [
      { name: "KiCad", image: kicad },
      { name: "Altium Designer", image: altium },
    ],
  },

  {
    category: "Software & Tools",
    items: [
      { name: "VS Code", image: vscode },
      { name: "Git", image: git },
      { name: "GitHub", image: github },
      { name: "MATLAB", image: matlab },
    ],
  },

  {
    category: "Web Technologies",
    items: [
      { name: "HTML5", image: html },
      { name: "CSS3", image: css },
      { name: "React", image: react },
    ],
  },
];

export default technologies;