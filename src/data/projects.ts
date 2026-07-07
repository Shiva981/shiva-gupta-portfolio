import motor from "../assets/projects/dc-motor.png";
import energy from "../assets/projects/energy-meter.png";


const projects = [
  {
    title: "DC Motor Speed Control System",

    status: "Completed",

    image: motor,

    description:
      "Designed and developed a DC motor speed control system for precise speed regulation using analog electronic components. The system enables smooth motor speed adjustment through voltage control and efficient power switching.",

    technologies: [
      "MOSFET",
      "Potentiometer",
      "DC Motor",
      "Battery",
    ],

    concepts: [
      "Motor Speed Control",
      "Voltage Regulation",
      "Power Electronics",
      "Analog Circuit Design",
    ],

    demo: "https://drive.google.com/drive/folders/1H_S7F_q_TzlMADrqZ1xSoyo6hnAHyoAF?usp=sharing",
  },

  {
    title: "Smart Energy Meter",

    status: "Completed",

    image: energy,

    description:
      "Developed a smart energy monitoring system capable of measuring and tracking electrical parameters for efficient energy management.",

      technologies: [
        "ESP32",
        "Voltage Sensor",
        "Current Sensor",
        "LCD Display",
      ],

    concepts: [
      "Energy Monitoring",
      "Sensor Integration",
      "Embedded Measurement Systems",
    ],

    github: "https://github.com/yourusername/smart-energy-meter",

    demo: "https://drive.google.com/drive/folders/1HwUxU0CQwNP828DAmincn_XIYb7FLqxd?usp=sharing",
  },

  {
    title: "AI Hardware Assistant",

    status: "In Progress",

    image: "https://placehold.co/800x450/1e293b/ffffff?text=Coming+Soon",

    description:
      "Working on an AI-integrated hardware assistant focused on combining intelligent automation with hardware interaction.",

      technologies: [
        "ESP32",
        "Python",
        "OpenAI API",
      ],

    concepts: [
      "AI Automation",
      "Intelligent Hardware Systems",
      "Voice Interaction",
      "Smart Assistance",
    ],

    github: "https://github.com/yourusername/ai-hardware-assistant",

    demo: "https://drive.google.com/drive/folders/1XMxoszqBm79ANt6SznZYyh5y2thoTzVq?usp=sharing",
  },

  {
    title: "Robotic Hand",

    status: "In Progress",

    image: "https://placehold.co/800x450/1e293b/ffffff?text=Coming+Soon",

    description:
      "Developed a robotic hand prototype based on tendon-driven mechanisms for flexible and controlled robotic movement.",

      technologies: [
        "ESP32",
        "Servo Motors",
        " Printed Parts",
        "Fishing Wire",
      ],

    concepts: [
      "Tendon-Driven Mechanism",
      "Robotics Control",
      "Motion Systems",
      "Embedded Robotics",
    ],

    github: "https://github.com/yourusername/robotic-hand",

    demo: "https://drive.google.com/drive/folders/1cFzx5X6aq21N3YO5l_uswWlEUWoid57G?usp=sharing",
  },
];

export default projects;
