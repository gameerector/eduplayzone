const crosswordGrid = document.getElementById("crossword-grid");
const HintButton = document.getElementById("hint-btn");
const hintSection = document.getElementById("hintSec");
const nextLevelButton = document.getElementById("next-level-btn");
const LevelUpUI = document.getElementById("popUpLevelUp");

const levelNo = document.querySelector(".levelNo"); 

let hintVisibility = false;
let currentLevel = 0;
let currentCellIndex = 0;

const levels = [
   {
    activeCells: [
      { row: 3, col: 4, char: 'c', question: 1 },
      { row: 4, col: 4, char: 'a' },
      { row: 5, col: 4, char: 't' },
      { row: 3, col: 5, char: 'a' },
      { row: 3, col: 6, char: 'p' },
      { row: 5, col: 2, char: 'b', question: 2  },
      { row: 5, col: 3, char: 'a' },
      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        "Animal that mews",
        // Add more across hints as needed
      ],
      down: [
        "You wear it on your head",
        "Flying mammal or a sports equipment used to hit a ball"
        // Add more down hints as needed
      ],
    },
  },
 {
    activeCells: [
      { row: 3, col: 4, char: 'd', question: 1 },
      { row: 4, col: 4, char: 'o' },
      { row: 5, col: 4, char: 'g',},
      { row: 4, col: 2, char: 'f' , question: 2 },
      { row: 4, col: 3, char: 'r' },
      { row: 4, col: 5, char: 'g' },
      // Add more cells for level 2 as needed
    ],
    hints: {
      across: [
        "Man's best friend with a wagging tail",
      ],
      down: [
        "Green, leaping amphibian with big eyes.",
      ],
    },
  },
  {
    activeCells: [
      { row: 3, col: 3, char: 'b', question: 1 },
      { row: 4, col: 3, char: 'a' },
      { row: 5, col: 3, char: 'l',},
      { row: 6, col: 3, char: 'l' },
      { row: 3, col: 4, char: 'o' },
      { row: 3, col: 5, char: 'a' },
      { row: 3, col: 6, char: 't' },
      { row: 2, col: 5, char: 'c' , question: 2 },
      { row: 4, col: 5, char: 'r' },
      // Add more cells for level 2 as needed
    ],
    hints: {
      across: [
        "Spherical object used in sports and games",
        "Motorized vehicle for personal transportation on roads"
      ],
      down: [
        "Watercraft for transportation on lakes and oceans",
      ],
    },
  },
  
  {
    activeCells: [
      { row: 3, col: 2, char: 'c'},
      { row: 3, col: 3, char: 'r', question: 1 },
      { row: 3, col: 4, char: 'o' },
      { row: 3, col: 5, char: 'p' },

      { row: 4, col: 3, char: 'u' },
      { row: 5, col: 3, char: 'r' },
      { row: 6, col: 3, char: 'a' },
      { row: 7, col: 3, char: 'l' },
      { row: 6, col: 2, char: 'f', question: 2 },
      { row: 6, col: 4, char: 'r' },
      { row: 6, col: 5, char: 'm', question: 3 },
      { row: 7, col: 5, char: 'u' },
      { row: 8, col: 5, char: 'd' },
      
      // Add more cells for level 2 as needed
    ],
    hints: {
      across: [
        "Relating to the countryside, typically with less population and more open spaces.",
        " ",//for skip a number
        "Wet, soft earth often found on farms, especially after rain.",
      ],
      down: [
        "Farm plants grown for harvest.",
        "A place where crops and livestock are raised for food or other products.",
      ],
    },
  },

  {
    activeCells: [
      { row: 2, col: 3, char: 'p', question: 1 },
      { row: 3, col: 3, char: 'u' },
      { row: 4, col: 3, char: 'p' },
      { row: 5, col: 3, char: 'p', question: 3 },
      { row: 6, col: 3, char: 'y' },

      { row: 2, col: 3, char: 'p', question: 1 },
      { row: 2, col: 4, char: 'e' },
      { row: 2, col: 5, char: 'a' },
      { row: 2, col: 6, char: 'c', question: 2 },
      { row: 2, col: 7, char: 'h' },

      { row: 3, col: 6, char: 'u' },
      { row: 4, col: 6, char: 'b' },
      { row: 5, col: 6, char: 's' },

      { row: 5, col: 4, char: 'e' },
      { row: 5, col: 5, char: 't' },
       
      // Add more cells for level 2 as needed
    ],
    hints: {
      across: [
        "What you call a baby dog.",
        "Baby Lions (or young boy Scouts).",
      ],
      down: [
        "A Yummy pinkish-yellow stone fruit with furry skin.",
        " ",//for skip a number
        "Cats,dogs,birds,fish or other animals that become part of a family.",

      ],
    },
  },
  {
    activeCells: [
      { row: 2, col: 2, char: 'b', question: 1 },
      { row: 3, col: 2, char: 'u' },
      { row: 4, col: 2, char: 'l' },
      { row: 5, col: 2, char: 'l', question: 2 },

      { row: 5, col: 3, char: 'i' },
      { row: 5, col: 4, char: 'o' },
      { row: 5, col: 5, char: 'n' },
      
      { row: 4, col: 4, char: 'd', question: 3 },
      { row: 6, col: 4, char: 'n' },
      { row: 7, col: 4, char: 'k' },
      { row: 8, col: 4, char: 'e' },
      { row: 9, col: 4, char: 'y' },

      { row: 8, col: 4, char: 'e', question: 4 },
      { row: 8, col: 5, char: 'a' },
      { row: 8, col: 6, char: 'g' },
      { row: 8, col: 7, char: 'l' },
      { row: 8, col: 8, char: 'e' }

      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        "A big, strong farm animal.",
        " ",
        "It looks like a horse with long ears.",
        // Add more across hints as needed
      ],
      down: [
        " ",
        "A big and very dangerous cat.",
        " ",
        "A Raptors which Eyesight is 8x Stronger Than Ours ",
        // Add more down hints as needed
      ],
    },
  }, 
  {
    activeCells: [
      { row: 6, col: 1, char: 's', question: 1 },
      { row: 6, col: 2, char: 'n' },
      { row: 6, col: 3, char: 'a' },
      { row: 6, col: 4, char: 'i' },
      { row: 6, col: 5, char: 'l' },

      { row: 3, col: 3, char: 'p', question: 2 },
      { row: 3, col: 4, char: 'a' },
      { row: 3, col: 5, char: 'r' },
      { row: 3, col: 6, char: 'r' },
      { row: 3, col: 7, char: 'o' },
      { row: 3, col: 8, char: 't' },

      { row: 2, col: 4, char: 'r', question: 3 },
      { row: 4, col: 4, char: 'b' },
      { row: 5, col: 4, char: 'b' },
      { row: 7, col: 4, char: 't' },

      { row: 2, col: 7, char: 'd', question: 4 },
      { row: 4, col: 7, char: 'n' },
      { row: 5, col: 7, char: 'k' },
      { row: 6, col: 7, char: 'e' },
      { row: 7, col: 7, char: 'y' }
      
      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        "They're masters of hearing.",
        "The most hardwoking animal.",
        // Add more across hints as needed
      ],
      down: [
        "Slow-moving mollusk with a spiral shell",
        "A bird which can talk.",
        
        // Add more down hints as needed
      ],
    }
  },

  {
    activeCells: [
      { row: 5, col: 3, char: 'b', question: 1 },
      { row: 6, col: 3, char: 'u' },

      { row: 7, col: 3, char: 's',estion: 2 },
      { row: 7, col: 4, char: 'c' },
      { row: 7, col: 5, char: 'h' },
      { row: 7, col: 6, char: 'o' },
      { row: 7, col: 7, char: 'o' },
      { row: 7, col: 8, char: 'l' },
      { row: 3, col: 5, char: 'b', question: 3 },
      { row: 3, col: 6, char: 'o' },
      { row: 3, col: 7, char: 'o' },
      { row: 3, col: 8, char: 'k' },

      { row: 5, col: 5, char: 't', question: 4 },
      { row: 5, col: 6, char: 'e' },
      { row: 5, col: 7, char: 'a' },
      { row: 5, col: 8, char: 'c' },
      { row: 5, col: 9, char: 'h' },
      { row: 5, col: 10, char: 'e' },
      { row: 5, col: 11, char: 'r' },

      { row: 2, col: 6, char: 'h', question: 5 },
      { row: 4, col: 6, char: 'm' },
      { row: 6, col: 6, char: 'w' },
      { row: 8, col: 6, char: 'r' },
      { row: 9, col: 6, char: 'k' },
 

      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        "It is most commonly used in public, school, private transport etc.",
        " ",
        " ",
        " ",
        "gives student another opportunity to review class material. ",
        // Add more across hints as needed
      ],
      down: [
        " ",
        "building designed to provide learning spaces and learning environments for the teaching of students.",
        "is a medium for recording information in the form of writing or images, typically composed of many pages.",
        "a person who helps students to acquire knowledge, competence, or virtue, via the practice of teaching.",
        // Add more down hints as needed
      ],
    },
  },
    
    {
    activeCells: [
      { row: 2, col: 2, char: 'd', question: 1 },
      { row: 2, col: 3, char: 'u' },
      { row: 2, col: 4, char: 's' },
      { row: 2, col: 5, char: 's' },
      { row: 2, col: 6, char: 'e' },
      { row: 2, col: 7, char: 'h' },
      { row: 2, col: 8, char: 'r' },
      { row: 2, col: 9, char: 'a' },

      { row: 8, col: 4, char: 'd', question: 2 },
      { row: 8, col: 5, char: 'i' },
      { row: 8, col: 6, char: 'w' },
      { row: 8, col: 7, char: 'a' },
      { row: 8, col: 8, char: 'l' },
      { row: 8, col: 9, char: 'i' },
      { row: 5, col: 6, char: 'h', question: 3 },
      { row: 5, col: 7, char: 'o' },
      { row: 5, col: 8, char: 'l' },
      { row: 5, col: 9, char: 'i' },

      { row: 4, col: 7, char: 'p', question: 4 },
      { row: 6, col: 7, char: 'n' },
      { row: 7, col: 7, char: 'g' },
      { row: 9, col: 7, char: 'l' },

      { row: 1, col: 9, char: 'r', question: 5 },
      { row: 3, col: 9, char: 'k' },
      { row: 4, col: 9, char: 'h' },

 
 

      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        " ",
        "Fastival is to thanking the Sun god, the forces of nature, and the farm animals and people who support agriculture. ",
        "It signifies her bond and support of her brother and cousins. ",
        // Add more across hints as needed
      ],
      down: [
        "Festival over the 10-headed demon king Ravana, who abducted Rama's wife, Sita. ",
        "The festival generally symbolizes the victory of light over darkness.",
        "Festival of Colors.",
        
        // Add more down hints as needed
      ],
    },
  },

  {
    activeCells: [
      { row: 3, col: 3, char: 'w', question: 1 },
      { row: 3, col: 4, char: 'a' },
      { row: 3, col: 5, char: 't' },
      { row: 3, col: 6, char: 'c' },
      { row: 3, col: 7, char: 'h' },

      { row: 5, col: 3, char: 'm', question: 2 },
      { row: 5, col: 4, char: 'o' },
      { row: 5, col: 5, char: 'b' },
      { row: 5, col: 6, char: 'i' },
      { row: 5, col: 8, char: 'e' },
      { row: 6, col: 3, char: 'o' },
      { row: 7, col: 3, char: 'u' },
      { row: 8, col: 3, char: 's' },
      { row: 9, col: 3, char: 'e' },

      { row: 1, col: 5, char: 'n', question: 3 },
      { row: 2, col: 5, char: 'o' },
      { row: 4, col: 5, char: 'e' },
      { row: 6, col: 5, char: 'o' },
      { row: 7, col: 5, char: 'o' },
      { row: 8, col: 5, char: 'k' },

      { row: 5, col: 7, char: 'l', question: 4 },
      { row: 6, col: 7, char: 'a' },
      { row: 7, col: 7, char: 'p' },
      { row: 8, col: 7, char: 't' },
      { row: 9, col: 7, char: 'o' },
      { row: 10, col: 7, char: 'p' },

      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        "It is used to point at objects you see on the screen. ",
        "It is a book or stack of paper pages that are often ruled and used for purposes such as note-taking.",
        "is small, light and has a battery inside, so you can carry it around and use it just about anywhere.",
        // Add more across hints as needed
      ],
      down: [
        "It provide the time of day. ",
        "They come in use for communicating through voice, messages,mails, serf internet etc.",
        
        
        // Add more down hints as needed
      ],
    },
  },
  
  {
    activeCells: [
      { row: 3, col: 3, char: 'c', question: 1 },
      { row: 4, col: 3, char: 'r' },
      { row: 5, col: 3, char: 'i' },
      { row: 7, col: 3, char: 'k' },
      { row: 8, col: 3, char: 'e' },
      { row: 9, col: 3, char: 't' },

      { row: 6, col: 3, char: 'c', question: 2 },
      { row: 6, col: 4, char: 'y' },
      { row: 6, col: 6, char: 'l' },
      { row: 6, col: 7, char: 'i' },
      { row: 6, col: 8, char: 'n' },

      { row: 4, col: 5, char: 's', question: 3 },
      { row: 5, col: 5, char: 'o' },
      { row: 6, col: 5, char: 'c' },
      { row: 7, col: 5, char: 'c' },
      { row: 8, col: 5, char: 'e' },
      { row: 9, col: 5, char: 'r' },

      { row: 2, col: 7, char: 't', question: 4 },
      { row: 3, col: 7, char: 'e' },
      { row: 4, col: 7, char: 'n' },
      { row: 5, col: 7, char: 'n' },
      { row: 7, col: 7, char: 's' },

      { row: 6, col: 9, char: 'g', question: 5 },
      { row: 7, col: 9, char: 'o' },
      { row: 8, col: 9, char: 'l' },
      { row: 9, col: 9, char: 'f' },


      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        "is a bat-and-ball game played between two teams of eleven players on a field.",
        " ",
        "a form of football played by two teams of eleven players with a round ball.",
        "a game in which two or four players strike a ball with rackets over a net.",
        "a game played on a large open-air course, in which a small hard ball is struck.",
        // Add more across hints as needed
      ],
      down: [
        " ",
        "the act or sport of riding or traveling by bicycle.",
        // Add more down hints as needed
      ],
    },
  },

  {
    activeCells: [
      { row: 2, col: 3, char: 'j' },
      { row: 3, col: 3, char: 'i' },
      { row: 4, col: 3, char: 'g' },
      { row: 5, col: 3, char: 's', question: 1 },
      { row: 6, col: 3, char: 'a' },
      { row: 7, col: 3, char: 'w' },

      { row: 5, col: 4, char: 'u' },
      { row: 5, col: 6, char: 'o' },
      { row: 5, col: 7, char: 'k' },
      { row: 5, col: 8, char: 'u' },

      { row: 2, col: 5, char: 'c', question: 3 },
      { row: 3, col: 5, char: 'a' },
      { row: 4, col: 5, char: 'r' },
      { row: 5, col: 5, char: 'd' },

      { row: 2, col: 6, char: 'h' },
      { row: 2, col: 7, char: 'e' },
      { row: 2, col: 8, char: 's' },
      { row: 2, col: 9, char: 's' },

      { row: 4, col: 8, char: 'l', question: 4 },
      { row: 6, col: 8, char: 'd' },
      { row: 7, col: 8, char: 'o' },

      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        "a puzzle consisting of a picture printed on cardboard or wood and cut into various pieces. ",
        " ",
        "a game that uses a deck of Hearts, Black Lady.. ",
        "a simple game in which players move counters round a board according to throws of a dice. ",
        // Add more across hints as needed
      ],
      down: [
        "a puzzle in which players insert the numbers one to nine into a grid. ",
        " ",
        "a board game of strategic skill for two players, played on a chequered board. ",
        // Add more down hints as needed
      ],
    },
  },
  
  {
    activeCells: [
      { row: 6, col: 2, char: 'a', question: 1 },
      { row: 6, col: 3, char: 'p' },
      { row: 6, col: 4, char: 'p' },
      { row: 6, col: 5, char: 'l' },

      { row: 2, col: 3, char: 'p', question: 2 },
      { row: 2, col: 4, char: 'e' },
      { row: 2, col: 5, char: 'a' },

      { row: 4, col: 4, char: 'b', question: 3 },
      { row: 4, col: 5, char: 'a' },
      { row: 4, col: 7, char: 'a' },
      { row: 4, col: 9, char: 'a' },

      { row: 1, col: 6, char: 'o', question: 4 },
      { row: 2, col: 6, char: 'r' },
      { row: 3, col: 6, char: 'a' },
      { row: 4, col: 6, char: 'n' },
      { row: 5, col: 6, char: 'g' },
      { row: 6, col: 6, char: 'e' },

      { row: 2, col: 8, char: 'm', question: 5 },
      { row: 3, col: 8, char: 'a' },
      { row: 4, col: 8, char: 'n' },
      { row: 5, col: 8, char: 'g' },
      { row: 6, col: 8, char: 'o' },

      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        " ",
        "Named after a color and often associated with vitamin C.",
        "A tropical fruit often described as the king of fruits.",
        // Add more across hints as needed
      ],
      down: [
        "Keeps the doctor away, or so they say.",
        "A fruit that's shaped like a teardrop.",
        "A curved, yellow fruit that's often a source of potassium.",
        
        
        // Add more down hints as needed
      ],
    },
  },


{
    activeCells: [
      { row: 3, col: 4, char: 'd', question: 1 },
      { row: 3, col: 5, char: 'e' },
      { row: 3, col: 6, char: 'e' },
      { row: 3, col: 7, char: 'r' },


      { row: 8, col: 4, char: 'g', question: 2 },
      { row: 8, col: 5, char: 'o' },
      { row: 8, col: 6, char: 'a' },
      { row: 8, col: 7, char: 't' },



      { row: 1, col: 5, char: 's', question: 3 },
      { row: 2, col: 5, char: 'h' },
      { row: 3, col: 5, char: 'e' },
      { row: 4, col: 5, char: 'e' },
      { row: 5, col: 5, char: 'p' },


      { row: 7, col: 5, char: 'm', question: 4 },
      { row: 8, col: 5, char: 'o' },
      { row: 9, col: 5, char: 'n' },
      { row: 10, col: 5, char: 'k' },
      { row: 11, col: 5, char: 'e' },
      { row: 12, col: 5, char: 'y' },

      { row: 3, col: 7, char: 'r', question: 5 },
      { row: 4, col: 7, char: 'a' },
      { row: 5, col: 7, char: 'b' },
      { row: 6, col: 7, char: 'b' },
      { row: 7, col: 7, char: 'i' },
      { row: 8, col: 7, char: 't' },


      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        "very gentle animals and were one of the first animals to be domesticated.",
        "using all four limbs to leap from tree to tree. ",
        "small, furry mammals with long ears, short fluffy tails, and strong, large hind legs. ",
        
        // Add more across hints as needed
      ],
      down: [
        "long, powerful legs, a diminutive tail and long ears. ",
        "They are one of the cleanliest animals and are much more selective feeders than cows, sheep, pigs.  ",
        
        
        
        // Add more down hints as needed
      ],
    },
  },


{
    activeCells: [
      { row: 6, col: 2, char: 't', question: 1 },
      { row: 6, col: 3, char: 'o' },
      { row: 6, col: 4, char: 'm' },
      { row: 6, col: 5, char: 'a' },
      { row: 6, col: 6, char: 't' },
      { row: 6, col: 7, char: 'o' },


      { row: 8, col: 4, char: 'c', question: 2 },
      { row: 8, col: 5, char: 'o' },
      { row: 8, col: 6, char: 'r' },
      { row: 8, col: 7, char: 'n' },



      { row: 3, col: 5, char: 'p', question: 3 },
      { row: 4, col: 5, char: 'o' },
      { row: 5, col: 5, char: 't' },
      { row: 6, col: 5, char: 'a' },
      { row: 7, col: 5, char: 't' },
      { row: 8, col: 5, char: 'o' },


      { row: 4, col: 5, char: 'o', question: 4 },
      { row: 4, col: 6, char: 'n' },
      { row: 4, col: 7, char: 'i' },
      { row: 4, col: 8, char: 'o' },
      { row: 4, col: 9, char: 'n' },


      { row: 1, col: 9, char: 'b', question: 5 },
      { row: 2, col: 9, char: 'r' },
      { row: 3, col: 9, char: 'i' },
      { row: 4, col: 9, char: 'n' },
      { row: 5, col: 9, char: 'j' },
      { row: 6, col: 9, char: 'a' },
      { row: 7, col: 9, char: 'l' },


      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        "Underground a succulent but inedible spherical, yellow-green berry, up to 4cm across. ",
        " ",
        "egg-shaped, glossy, and purple with white flesh and a spongy, meaty texture. ",
        
        
        // Add more across hints as needed
      ],
      down: [
        "typically red but may be yellow, orange, green, or purplish in color and is eaten raw or cooked as a vegetable. ",
        "a tall annual cereal grass (Zea mays) that is widely grown for its large elongated ears of starchy seeds. ",
        " ",
        "a round vegetable with a light brown skin. ",
        
        
        
        
        // Add more down hints as needed
      ],
    },
  },

  {
    activeCells: [
      { row: 7, col: 2, char: 'b', question: 1 },
      { row: 7, col: 3, char: 'i' },
      { row: 7, col: 4, char: 't' },
      { row: 7, col: 5, char: 't' },
      { row: 7, col: 6, char: 'e' },
      { row: 7, col: 7, char: 'r' },


      { row: 6, col: 3, char: 'b', question: 2 },
      { row: 7, col: 3, char: 'i' },
      { row: 8, col: 3, char: 'g' },
 

      { row: 4, col: 4, char: 'c', question: 3 },
      { row: 4, col: 5, char: 'l' },
      { row: 4, col: 6, char: 'o' },
      { row: 4, col: 7, char: 's' },
      { row: 4, col: 8, char: 'e' },



      { row: 2, col: 5, char: 'c', question: 4 },
      { row: 3, col: 5, char: 'o' },
      { row: 4, col: 5, char: 'l' },
      { row: 5, col: 5, char: 'd' },



      { row: 4, col: 7, char: 's', question: 5 },
      { row: 5, col: 7, char: 'h' },
      { row: 6, col: 7, char: 'a' },
      { row: 7, col: 7, char: 'r' },
      { row: 8, col: 7, char: 'p' },



      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        "opposite of Small ",
        " ",
        "opposite of Hot ",
        "opposite of Blunt",
        
        
        // Add more across hints as needed
      ],
      down: [
        "opposite of Sweet ",
        " ",
        "opposite of Open ",
        
        
        
        
        
        // Add more down hints as needed
      ],
    },
  },

{
    activeCells: [
      { row: 2, col: 2, char: 'p', question: 1 },
      { row: 2, col: 3, char: 'e' },
      { row: 2, col: 4, char: 'n' },
      { row: 2, col: 5, char: 'c' },
      { row: 2, col: 6, char: 'i' },
      { row: 2, col: 7, char: 'l' },


      { row: 2, col: 5, char: 'c', question: 2 },
      { row: 3, col: 5, char: 'o' },
      { row: 4, col: 5, char: 'p', question: 3 },
      { row: 5, col: 5, char: 'y' },
 


      { row: 4, col: 6, char: 'a' },
      { row: 4, col: 7, char: 'p' },
      { row: 4, col: 8, char: 'e' },
      { row: 4, col: 9, char: 'r' },



      { row: 3, col: 8, char: 'p', question: 4 },
      { row: 4, col: 8, char: 'e' },
      { row: 5, col: 8, char: 'n' },



      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " an imitation, transcript, or reproduction of an original work.",
        " ",
        "an instrument for writing or drawing with ink.",
        
        
        // Add more across hints as needed
      ],
      down: [
        "an instrument for writing or drawing, consisting of a thin stick of graphite.",
        " ",
        "sheets from the pulp of wood used for writing, drawing etc.",
        
        // Add more down hints as needed
      ],
    },
  },


  {
    activeCells: [
      { row: 3, col: 1, char: 'j', question: 1 },
      { row: 3, col: 2, char: 'o' },
      { row: 3, col: 3, char: 'y' },
      { row: 3, col: 4, char: 's' },
      { row: 3, col: 5, char: 't' },
      { row: 3, col: 6, char: 'i' },
      { row: 3, col: 7, char: 'c' },
      { row: 3, col: 8, char: 'k' },



      { row: 9, col: 2, char: 's', question: 2 },
      { row: 9, col: 3, char: 't' },
      { row: 9, col: 4, char: 'o' },
      { row: 9, col: 5, char: 'r' },
      { row: 9, col: 6, char: 'a' },
      { row: 9, col: 7, char: 'g' },
      { row: 9, col: 8, char: 'e' },
 


      { row: 1, col: 5, char: 'c', question: 3 },
      { row: 1, col: 6, char: 'p' },
      { row: 1, col: 7, char: 'u' },


      { row: 6, col: 5, char: 'm', question: 4 },
      { row: 6, col: 6, char: 'e' },
      { row: 6, col: 7, char: 'm' },
      { row: 6, col: 8, char: 'o' },
      { row: 6, col: 9, char: 'r' },
      { row: 6, col: 10, char: 'y' },

      { row: 1, col: 6, char: 'p', question: 5 },
      { row: 2, col: 6, char: 'r' },
      { row: 3, col: 6, char: 'i' },
      { row: 4, col: 6, char: 'n' },
      { row: 5, col: 6, char: 't' },
      { row: 6, col: 6, char: 'e' },
      { row: 7, col: 6, char: 'r' },

      { row: 5, col: 8, char: 'm', question: 6 },
      { row: 6, col: 8, char: 'o' },
      { row: 7, col: 8, char: 'u' },
      { row: 8, col: 8, char: 's' },
      { row: 9, col: 8, char: 'e' },




      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        "Brain of the Computer.",
        " ",
        "a device that accepts text and graphic output from a computer.",
        "is a small device that a computer user pushes across a desk surface.",
        
        
        // Add more across hints as needed
      ],
      down: [
        "a lever that can be moved in several directions to control the movement.",
        "the action or method of storing something for future use.",
        " ",
        "stores information, such as data and programs for immediate use in the computer.",
        
        // Add more down hints as needed
      ],
    },
  },



  {
    activeCells: [
      { row: 6, col: 1, char: 'c', question: 1 },
      { row: 7, col: 1, char: 'u' },
      { row: 8, col: 1, char: 'p' },


      { row: 8, col: 1, char: 'p', question: 2 },
      { row: 8, col: 2, char: 'l' },
      { row: 8, col: 3, char: 'a' },
      { row: 8, col: 4, char: 't' },
      { row: 8, col: 5, char: 'e' },


      { row: 4, col: 2, char: 'f', question: 3 },
      { row: 4, col: 3, char: 'o' },
      { row: 4, col: 4, char: 'r' },
      { row: 4, col: 5, char: 'k' },


      { row: 1, col: 3, char: 's', question: 4 },
      { row: 2, col: 3, char: 'p' },
      { row: 3, col: 3, char: 'o' },
      { row: 4, col: 3, char: 'o' },
      { row: 5, col: 3, char: 'n' },
      
      { row: 7, col: 3, char: 'p', question: 5 },
      { row: 8, col: 3, char: 'a' },
      { row: 9, col: 3, char: 'n' },
      

      { row: 6, col: 4, char: 'm', question: 6 },
      { row: 6, col: 5, char: 'i' },
      { row: 6, col: 6, char: 'x' },
      { row: 6, col: 7, char: 'e' },
      { row: 6, col: 8, char: 'r' },

      { row: 4, col: 5, char: 'k', question: 7 },
      { row: 5, col: 5, char: 'n' },
      { row: 6, col: 5, char: 'i' },
      { row: 7, col: 5, char: 'f' },
      { row: 8, col: 5, char: 'e' },

      { row: 2, col: 7, char: 'c', question: 8 },
      { row: 3, col: 7, char: 'o' },
      { row: 4, col: 7, char: 'o' },
      { row: 5, col: 7, char: 'k' },
      { row: 6, col: 7, char: 'e' },
      { row: 7, col: 7, char: 'r' },




      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        "is an open-top container used to hold liquids. ",
        " ",
        " ",
        "shallow bowl, oval or round, at the end of a handle. ",
        "a metal container used for cooking food in.",
        " ",
        "used for cutting or as a weapon.",
        "used for cooking food, typically consisting of an oven, hob, and grill.",
        
        
        // Add more across hints as needed
      ],
      down: [
        " ",
        "a flat dish, typically circular from which food is eaten.",
        "two or more prongs used for lifting food to the mouth.",
        " ",
        " ",
        "a machine for mixing things.",
        
        // Add more down hints as needed
      ],
    },
  },



  {
    activeCells: [
      { row: 8, col: 1, char: 's', question: 1 },
      { row: 8, col: 2, char: 'i' },
      { row: 8, col: 3, char: 't' },
      { row: 8, col: 4, char: 'a' },
      { row: 8, col: 5, char: 'r' },


      { row: 3, col: 2, char: 'b', question: 2 },
      { row: 3, col: 3, char: 'o' },
      { row: 3, col: 4, char: 'n' },
      { row: 3, col: 5, char: 'g' },
      { row: 3, col: 6, char: 'o' },


      { row: 3, col: 5, char: 'g', question: 3 },
      { row: 4, col: 5, char: 'u' },
      { row: 5, col: 5, char: 'i' },
      { row: 6, col: 5, char: 't' },
      { row: 7, col: 5, char: 'a' },
      { row: 8, col: 5, char: 'r' },


      { row: 6, col: 5, char: 't', question: 4 },
      { row: 6, col: 6, char: 'r' },
      { row: 6, col: 7, char: 'u' },
      { row: 6, col: 8, char: 'm' },
      { row: 6, col: 9, char: 'p' },
      { row: 6, col: 10, char: 'e' },
      { row: 6, col: 11, char: 't' },
      
      { row: 4, col: 7, char: 'd', question: 5 },
      { row: 5, col: 7, char: 'r' },
      { row: 6, col: 7, char: 'u' },
      { row: 7, col: 7, char: 'm' },
      

      { row: 10, col: 7, char: 'v', question: 6 },
      { row: 10, col: 8, char: 'i' },
      { row: 10, col: 9, char: 'o' },
      { row: 10, col: 10, char: 'l' },
      { row: 10, col: 11, char: 'i' },
      { row: 10, col: 12, char: 'n' },

      { row: 6, col: 9, char: 'p', question: 7 },
      { row: 7, col: 9, char: 'i' },
      { row: 8, col: 9, char: 'a' },
      { row: 9, col: 9, char: 'n' },
      { row: 10, col: 9, char: 'o' },

      { row: 2, col: 10, char: 'f', question: 8 },
      { row: 3, col: 10, char: 'l' },
      { row: 4, col: 10, char: 'u' },
      { row: 5, col: 10, char: 't' },
      { row: 6, col: 10, char: 'e' },
 




      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        "a stringed musical instrument, with a fretted fingerboard, typically incurved sides, and six or twelve strings. ",
        " ",
        "a percussion instrument sounded by being struck with sticks or the hands.",
        " ",
        "is a keyboard instrument that produces sound when pressed on the keys.",
        "producing sound with a vibrating column of air.",
        
        
        // Add more across hints as needed
      ],
      down: [
        "a plucked stringed instrument, originating from the Indian subcontinent.",
        "each of a joined pair of small deep-bodied drums.",
        " ",
        "a brass musical instrument with a flared bell and a bright, penetrating tone. ",
        " ",
        "instrument of treble pitch, played with a horsehair bow.",
        
        // Add more down hints as needed
      ],
    },
  },


  {
    activeCells: [
      { row: 6, col: 1, char: 'f', question: 1 },
      { row: 6, col: 2, char: 'r' },
      { row: 6, col: 3, char: 'u' },
      { row: 6, col: 4, char: 'i' },
      { row: 6, col: 5, char: 't' },


      { row: 1, col: 2, char: 'f', question: 2 },
      { row: 2, col: 2, char: 'l' },
      { row: 3, col: 2, char: 'o' },
      { row: 4, col: 2, char: 'w' },
      { row: 5, col: 2, char: 'e' },
      { row: 6, col: 2, char: 'r' },


      { row: 2, col: 2, char: 'l', question: 3 },
      { row: 2, col: 3, char: 'e' },
      { row: 2, col: 4, char: 'a' },
      { row: 2, col: 5, char: 'f' },
      

      { row: 4, col: 4, char: 't', question: 4 },
      { row: 4, col: 5, char: 'r' },
      { row: 4, col: 6, char: 'u' },
      { row: 4, col: 7, char: 'n' },
      { row: 4, col: 8, char: 'k' },

      { row: 5, col: 4, char: 'w' },
      { row: 6, col: 4, char: 'i' },
      { row: 7, col: 4, char: 'g' },

      
      
      { row: 1, col: 7, char: 'b', question: 5 },
      { row: 2, col: 7, char: 'r' },
      { row: 3, col: 7, char: 'a' },
      { row: 4, col: 7, char: 'n' },
      { row: 5, col: 7, char: 'c' },
      { row: 6, col: 7, char: 'h' },
      
      

      { row: 2, col: 7, char: 'r', question: 6 },
      { row: 2, col: 8, char: 'o' },
      { row: 2, col: 9, char: 'o' },
      { row: 2, col: 10, char: 't' },
      
 




      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        "also known as a bloom or blossom, is the reproductive structure.",
        " ",
        "a slender woody shoot growing from a branch or stem of a tree or shrub.",
        "a part of a tree which grows out from the trunk or from a bough.",
        
        
        
        // Add more across hints as needed
      ],
      down: [
        "sweet and fleshy product of a tree or other plant that contains seed.",
        " ",
        "the green, flat lateral outgrowth in plants.",
        "the main woody stem of a tree.",
        " ",
        "the part of a plant which attaches it to the ground",
        
        // Add more down hints as needed
      ],
    },
  },



  {
    activeCells: [
      { row: 5, col: 1, char: 'k', question: 1 },
      { row: 5, col: 2, char: 'e' },
      { row: 5, col: 3, char: 'r' },
      { row: 5, col: 4, char: 'a' },
      { row: 5, col: 5, char: 'l' },
      { row: 5, col: 6, char: 'a' },


      { row: 1, col: 4, char: 'p', question: 2 },
      { row: 2, col: 4, char: 'u' },
      { row: 3, col: 4, char: 'n' },
      { row: 4, col: 4, char: 'j' },
      { row: 5, col: 4, char: 'a' },
      { row: 6, col: 4, char: 'b' },


      { row: 8, col: 4, char: 'a', question: 3 },
      { row: 8, col: 5, char: 's' },
      { row: 8, col: 6, char: 's' },
      { row: 8, col: 7, char: 'a' },
      { row: 8, col: 8, char: 'm' },
      

      { row: 3, col: 6, char: 'g', question: 4 },
      { row: 4, col: 6, char: 'o' },
      { row: 5, col: 6, char: 'a' },
      

      { row: 4, col: 6, char: 'o', question: 5 },
      { row: 4, col: 7, char: 'd' },
      { row: 4, col: 8, char: 'i' },
      { row: 4, col: 9, char: 's' },
      { row: 4, col: 10, char: 'h' },
      { row: 4, col: 11, char: 'a' },

      
      
      { row: 3, col: 8, char: 's', question: 6 },
      { row: 4, col: 8, char: 'i' },
      { row: 5, col: 8, char: 'k' },
      { row: 6, col: 8, char: 'k' },
      { row: 7, col: 8, char: 'i' },
      { row: 8, col: 8, char: 'm' },
      
      

      { row: 2, col: 10, char: 'b', question: 7 },
      { row: 3, col: 10, char: 'i' },
      { row: 4, col: 10, char: 'h' },
      { row: 5, col: 10, char: 'a' },
      { row: 6, col: 10, char: 'r' },
      
 




      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        "means “five waters,” or “five rivers,”.",
        " ",
        "It is the coolest place in India.",
        " ",
        "is known as “the land of peace and tranquility”. ",
        "Chhath Puja is an important festival celebrated. ",
        
        
        
        // Add more across hints as needed
      ],
      down: [
        "is one of the prominent tourist destinations of India, with coconut-lined sandy beaches.",
        " ",
        "known as the land of the red river and blue hills is the gateway to the North East India.",
        " ",
        " include the Shri Jagannath Temple, Konark Temple, Bhitarkanika National Park and Chilika Lake.",
       
        
        // Add more down hints as needed
      ],
    },
  },


  {
    activeCells: [
      { row: 4, col: 2, char: 't', question: 1 },
      { row: 4, col: 3, char: 'r' },
      { row: 4, col: 4, char: 'a' },
      { row: 4, col: 5, char: 'c' },
      { row: 4, col: 6, char: 't' },
      { row: 4, col: 7, char: 'o' },
      { row: 4, col: 8, char: 'r' },


      { row: 6, col: 2, char: 'b', question: 2 },
      { row: 6, col: 3, char: 'i' },
      { row: 6, col: 4, char: 'k' },
      { row: 6, col: 5, char: 'e' },
      


      { row: 10, col: 2, char: 'b', question: 3 },
      { row: 11, col: 2, char: 'u' },
      { row: 12, col: 2, char: 's' },
      
      { row: 10, col: 3, char: 'i' },
      { row: 10, col: 4, char: 'c' },
      { row: 10, col: 5, char: 'y' },
      { row: 10, col: 6, char: 'c' },
      { row: 10, col: 7, char: 'l' },
      { row: 10, col: 8, char: 'e' },

      { row: 3, col: 3, char: 't', question: 4 },
      { row: 4, col: 3, char: 'r' },
      { row: 5, col: 3, char: 'a' },
      { row: 4, col: 3, char: 'i' },
      { row: 5, col: 3, char: 'n' },
      

      { row: 10, col: 4, char: 'c', question: 5 },
      { row: 11, col: 4, char: 'a' },
      { row: 12, col: 4, char: 'r' },
      
      
      
      { row: 1, col: 6, char: 'b', question: 6 },
      { row: 2, col: 6, char: 'o' },
      { row: 3, col: 6, char: 'a' },
      { row: 4, col: 6, char: 't' },
      
      
      { row: 2, col: 8, char: 'a', question: 7 },
      { row: 3, col: 8, char: 'e' },
      { row: 4, col: 8, char: 'r' },
      { row: 5, col: 8, char: 'o' },
      { row: 6, col: 8, char: 'p' },
      { row: 7, col: 8, char: 'l' },
      { row: 8, col: 8, char: 'a' },
      { row: 9, col: 8, char: 'n' },
      { row: 10, col: 8, char: 'e' },
      
 




      // Add more cells for level 1 as needed
    ],
    hints: {
      across: [
        " ",
        " ",
        " is a road vehicle that carries significantly more passengers than an average car or van.",
        "vehicles which run on tracks  pulled by an engine.",
        "a four-wheeled road vehicle that is powered by an engine and is able to carry people. ",
        "a small vessel for travelling over water.",
        "a powered flying vehicle with fixed wings and a weight greater than that of the air. ",
        
        
        
        // Add more across hints as needed
      ],
      down: [
        "a powerful vehicle used for pulling farm machinery, hauling loads, etc.",
        "a two-wheeled vehicle that is powered by a motor and has no pedals.",
        "also called a pedal cycle.",

       
        
        // Add more down hints as needed
      ],
    },
  },
  // Add more levels as needed
];

// Function to get a random background image URL
function getRandomBackgroundImage() {
  var images = [
      'url(./src/img/letter.png)',
      'url(./src/img/letter2.png)',
      'url(./src/img/letter3.png)',
      'url(./src/img/letter4.png)',
      'url(./src/img/letter5.png)',
      'url(./src/img/letter6.png)'
  ];
  var randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Function to change the background image of elements with the specified class
function changeBackgroundImage(className) {
  var randomImageUrl = getRandomBackgroundImage();
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundImage = randomImageUrl;
  }
  console.log("Image"+randomImageUrl )
}

// Function to save the current level to localStorage
const saveCurrentLevel = () => {
  localStorage.setItem("currentLevel", currentLevel);
};

// Change isCellCompleted to a let variable
let isCellCompleted = Array(levels[currentLevel].activeCells.length).fill(false);

// Function to show the "Level Up" UI
const showLevelUpUI = () => {
  playWinSound();
  console.log("Level UP");
  LevelUpUI.style.display = "block"; // Show level up Pop Up
};

const correctSound = new Audio('src/sound/Pop.wav');
const wrongSound = new Audio('src/sound/Negative Feedback.wav');
const winSound = new Audio('src/sound/win.wav');

// Function to play the correct sound effect
const playCorrectSound = () => {
  correctSound.play();
};

// Function to play the wrong sound effect
const playWrongSound = () => {
  wrongSound.play();
};

// Function to play the win sound effect
const playWinSound = () => {
  winSound.play();
};

const generateCells = () => {
  levels[currentLevel].activeCells.forEach((cell, index) => {
    const wordCell = document.createElement("div");
    const charInput = document.createElement("input");
    charInput.type = "text";
    charInput.maxLength = 1;
    charInput.classList.add("char-input");
    charInput.setAttribute("data-current", index);

    charInput.addEventListener("focus", () => {
      charInput.value = "";
      charInput.classList.remove("bg-error");
      currentCellIndex = index;
    });

    charInput.addEventListener("input", () => {
      charInput.value = charInput.value.slice(0, 1);
    });

    charInput.addEventListener("input", (event) => {
      // This event will be triggered when the input value changes.
      if (checkValue(event.target.value.toLowerCase(), cell.char)) {
          playCorrectSound();//play sound
        charInput.classList.add("bg-success");
        charInput.disabled = true;
        focusNext(index + 1);
    
        isCellCompleted[index] = true;
    
        if (isCellCompleted.every((completed) => completed)) {
          console.log("All cells are filled, calling showLevelUpUI");
          // Call the function to show the "Level Up" UI when all cells are filled
          showLevelUpUI();
        }

      } else {
        if (event.target.value.length !== 0 || event.target.value !== "") {
          event.preventDefault();
          playWrongSound();
          charInput.classList.add("bg-error");
        } else {
          charInput.classList.remove("bg-error");
        } 
      }

    });
    
    wordCell.style.gridRowStart = cell.col;
    wordCell.style.gridColumnStart = cell.row;
    wordCell.classList.add("cell");
    wordCell.appendChild(charInput);
    if (cell.question) {
      const questionNumber = document.createElement("div");
      questionNumber.classList.add("question-number-label");
      questionNumber.innerText = cell.question;
      wordCell.appendChild(questionNumber);

      charInput.value = cell.char; // Display the letter of the cell
      charInput.classList.add("bg-success");
      charInput.disabled = true;
      isCellCompleted[index] = true;
    }
    crosswordGrid.appendChild(wordCell);
  });

  levelNo.innerText = `Level ${currentLevel + 1}`;// Update the level number element
};

const checkValue = (enteredValue, correctValue) => {
  return correctValue == enteredValue;
};

const focusNext = (next) => {
  const charInputs = Array.from(document.querySelectorAll(".char-input"));
  const nextInput = charInputs[next];
  if (nextInput) nextInput.focus();
};

const hintButton = document.getElementById("hint-btn");

hintButton.addEventListener("click", () => {
  hintSection.classList.toggle("hint");
  hintVisibility = !hintVisibility;

  // Toggle the text and visibility of the button
  if (hintVisibility) {
    hintButton.innerText = "expand_more";
  } else {
    hintButton.innerText = "expand_less";
  }
});

// Function to reset the game to level 1
const resetToLevel1 = () => {
  // Reset the current level to 0
  currentLevel = 0;

  // Save the current level in local storage
  saveCurrentLevel();

  // Reset isCellCompleted array for the new level
  isCellCompleted = Array(levels[currentLevel].activeCells.length).fill(false);

  // Hide the Level Up UI
  LevelUpUI.style.display = "none";

  // Clear the crossword grid
  crosswordGrid.innerHTML = "";

  // Generate cells for level 1
  generateCells();
  displayHints();
};

nextLevelButton.addEventListener("click", () => {
  changeBackgroundImage('char-input');
  if (currentLevel < levels.length - 1) {
    // Save the current level
    saveCurrentLevel();
    // Reset the isCellCompleted array for the new level
    isCellCompleted = Array(levels[currentLevel + 1].activeCells.length).fill(false);
    
    // Hide the Level Up UI
    LevelUpUI.style.display = "none";

    currentLevel++;
    currentCellIndex = 0;
    crosswordGrid.innerHTML = "";
    generateCells();
    displayHints();
  } else {
    // Handle case where all levels are completed
    console.log("All levels completed");

    resetToLevel1();

  }
});

const displayHints = () => {
  const levelData = levels[currentLevel].hints;

  // Access the HTML element to display hints
  const hintSection = document.getElementById("hintSecData");

  // Clear existing hints
  hintSection.innerHTML = "";

  // Display "Across" hints
  const acrossHints = document.createElement("b");
  acrossHints.innerText = "Across";
  hintSection.appendChild(acrossHints);

  for (const key in levelData) {
    if (key === "across") {
      const hints = levelData[key];
      hints.forEach((hint, index) => {
        if (hint.trim() !== "") {
          const hintElement = document.createElement("p");
          hintElement.innerText = `${index + 1}. ${hint}`;
          hintSection.appendChild(hintElement);
        } else {
          const hintElement = document.createElement("p");
          hintElement.innerText = hint;
          hintSection.appendChild(hintElement);
        }
      });
    }
  }

  // Add a line break
  hintSection.appendChild(document.createElement("br"));

  // Display "Downwards" hints
  const downwardsHints = document.createElement("b");
  downwardsHints.innerText = "Downwards";
  hintSection.appendChild(downwardsHints);

  for (const key in levelData) {
    if (key === "down") {
      const hints = levelData[key];
      hints.forEach((hint, index) => {
        if (hint.trim() !== "") {
          const hintElement = document.createElement("p");
          hintElement.innerText = `${index + 1}. ${hint}`;
          hintSection.appendChild(hintElement);
        } else {
          const hintElement = document.createElement("p");
          hintElement.innerText = hint;
          hintSection.appendChild(hintElement);
        }
      });
    }
  }
};

const isLevelCompleted = () => {
  const levelData = levels[currentLevel];

  for (const cell of levelData.activeCells) {
    const charInput = document.querySelector('[data-current="' + cell.question + '"]');
    if (!charInput || charInput.value.toLowerCase() !== cell.char) {
      return false;
    }
  }

  // Check if all cells without questions are filled correctly
  const inputsWithoutQuestions = document.querySelectorAll('.char-input:not([data-current])');
  for (const input of inputsWithoutQuestions) {
    if (!input.value || input.value.trim().toLowerCase() !== input.dataset.char) {
      return false;
    }
  }

  return true;
};

// Function to load the saved level from localStorage and load the next level
const loadSavedLevel = () => {
  const savedLevel = localStorage.getItem("currentLevel");
  if (savedLevel !== null) {
    currentLevel = parseInt(savedLevel);
    isCellCompleted = Array(levels[currentLevel].activeCells.length).fill(false);
    
    // Load the next level
    if (currentLevel < levels.length - 1) {
      currentLevel++; // Increase the level by 1 to load the next level
    }
  } else {
    // Set the default level to 1 if no saved level is found
    currentLevel = 0; // Change this to 1 if the levels are 1-based
  }

  generateCells();
  displayHints();
}; 

// Load the saved level when the page loads
loadSavedLevel();

changeBackgroundImage('char-input');
