export type Conversation = {
  label: string;
  content: string;
  hoverColor: string;
  selectedColor: string;
};

export const conversations: Conversation[] = [
  {
    label: "Why Tech?",
    content:
      "I grew up during the rise of the internet, watching firsthand how it transformed the way people live, connect, and think. In 6th grade I sold my pokemon cards to students at school so I could purchase the iPod Touch when it was released. I was fascinated by this thing, and this experience contributed to my deep appreciation for technology. Seeing its impact on society and the democratization of knowledge was extremely profound and gave me a sense of how powerful software can be. That perspective fuels my enthusiasm for artificial intelligence, which represents the next frontier of technological change. I've always loved building things and exploring many aspects of science and technology, and it was clear that software engineering was the perfect combination of creativity, abstract problem solving, and worldly impact. My career officially began in early 2018, however my passion and motivation began much earlier.",
    hoverColor: "hover:bg-green-200",
    selectedColor: "bg-green-100",
  },
  {
    label: "Why Silicon Valley?",
    content:
      "I'm planning to move from Amish Country to Silicon Valley because of the culture that embodies high standards of excellence and constantly pushes the limits of what’s possible. It’s where world-class skill meets cutting-edge technology, and being in that environment means surrounding myself with people who are not only passionate about AI and tech but also genuinely love the process of learning, working hard, and creating meaningful value at the highest level. The startup culture there, with its cut-throat pace and bold ambitions, offers the chance to take on high-impact challenges and contribute to truly epic work that can shape the future.",
    hoverColor: "hover:bg-teal-200",
    selectedColor: "bg-teal-100",
  },
  // {
  //   label: "Startups vs FAANG vs Other?",
  //   content: "",
  //   hoverColor: "hover:bg-cyan-200",
  //   selectedColor: "bg-cyan-100",
  // },
  // {
  //   label: "Why Stack AI?",
  //   content: ";)",
  //   hoverColor: "hover:bg-blue-200",
  //   selectedColor: "bg-blue-100",
  // },
  // {
  //   label: "Why build this project?",
  //   content: "The biggest hurdle is the opportunity to talk with someone to demonstrate my skills.",
  //   hoverColor: "hover:bg-violet-200",
  //   selectedColor: "bg-violet-100",
  // },
];
