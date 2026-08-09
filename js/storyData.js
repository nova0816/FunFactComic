/**
 * FunFact Comics - Story Data & Vocabulary Dictionary
 * Target Audience: ESL Learners (A1 / A2 Level, Ages 5-9)
 */

const STORIES_DATA = {
  fiona_pink_secret: {
    id: "fiona_pink_secret",
    title: "Fiona's Pink Secret!",
    subtitle: "Why are flamingos pink?",
    coverImage: "assets/illustrations/panel1.jpg",
    themeColor: "#FF6B8B",
    cefrLevel: "A1 / A2",
    targetVocab: ["pink", "green", "shrimp", "broccoli", "eat", "turn", "monster", "strong"],
    targetGrammar: [
      "Why are you [adjective]?",
      "I am [adjective] because I eat [noun].",
      "If I [verb], will I [verb]?"
    ],
    characters: {
      pip: {
        name: "Pip",
        role: "The Curious Cat",
        avatar: "assets/avatars/pip.jpg",
        color: "#FF9F43",
        voiceConfig: { pitch: 1.45, rate: 0.92 },
        sillyReaction: "Meow! I am so curious!"
      },
      dot: {
        name: "Dot",
        role: "The Smart Bunny",
        avatar: "assets/avatars/dot.jpg",
        color: "#54A0FF",
        voiceConfig: { pitch: 1.25, rate: 0.88 },
        sillyReaction: "Hop hop! Let's learn together!"
      },
      fiona: {
        name: "Fiona",
        role: "The Pink Flamingo",
        avatar: "assets/avatars/fiona.jpg",
        color: "#FF6B8B",
        voiceConfig: { pitch: 1.15, rate: 0.95 },
        sillyReaction: "Flap flap! Pink is my favorite color!"
      }
    },
    panels: [
      {
        panelIndex: 1,
        panelTitle: "Panel 1: The Setup & Discovery",
        image: "assets/illustrations/panel1.jpg",
        altText: "Pip the orange cat and Dot the white rabbit looking up at Fiona the tall pink flamingo standing in the pond.",
        narratorText: "Pip and Dot meet Fiona at the sunny pond.",
        bubbles: [
          {
            id: "p1_b1",
            speaker: "pip",
            position: { top: "32%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Hi Fiona! Why are you so bright pink?",
            words: [
              { word: "Hi", clean: "hi", isVocab: false, time: 0.05 },
              { word: "Fiona!", clean: "fiona", isVocab: false, time: 0.45 },
              { word: "Why", clean: "why", isVocab: true, emoji: "❓", meaning: "Used to ask for a reason.", time: 1.45 },
              { word: "are", clean: "are", isVocab: false, time: 1.70 },
              { word: "you", clean: "you", isVocab: false, time: 1.95 },
              { word: "so", clean: "so", isVocab: false, time: 2.15 },
              { word: "bright", clean: "bright", isVocab: true, emoji: "✨", meaning: "Very shiny and full of light!", time: 2.45 },
              { word: "pink?", clean: "pink", isVocab: true, emoji: "🌸", meaning: "A sweet color like strawberries!", time: 2.75 }
            ]
          },
          {
            id: "p1_b2",
            speaker: "dot",
            position: { top: "36%", left: "42%" },
            tailDirection: "bottom-left",
            text: "You look like sweet cotton candy!",
            words: [
              { word: "You", clean: "you", isVocab: false, time: 0.05 },
              { word: "look", clean: "look", isVocab: true, emoji: "👀", meaning: "To see or appear like something.", time: 0.30 },
              { word: "like", clean: "like", isVocab: false, time: 0.60 },
              { word: "sweet", clean: "sweet", isVocab: true, emoji: "🍬", meaning: "Tasting like sugar or honey!", time: 0.90 },
              { word: "cotton", clean: "cotton", isVocab: false, time: 1.25 },
              { word: "candy!", clean: "candy", isVocab: true, emoji: "🍭", meaning: "A fluffy, sweet pink treat!", time: 1.60 }
            ]
          }
        ]
      },
      {
        panelIndex: 2,
        panelTitle: "Panel 2: The Reveal & Fun Fact",
        image: "assets/illustrations/panel2.jpg",
        altText: "Fiona happily dipping her beak in water, catching tiny pink shrimp with splashing droplets.",
        narratorText: "Fiona catches yummy snacks in the water.",
        bubbles: [
          {
            id: "p2_b1",
            speaker: "fiona",
            position: { top: "22%", left: "26%" },
            tailDirection: "bottom-left",
            text: "I am pink because I eat yummy pink shrimp!",
            words: [
              { word: "I", clean: "i", isVocab: false, time: 0.05 },
              { word: "am", clean: "am", isVocab: false, time: 0.25 },
              { word: "pink", clean: "pink", isVocab: true, emoji: "🦩", meaning: "Pink feathers from pink food!", time: 0.45 },
              { word: "because", clean: "because", isVocab: true, emoji: "💡", meaning: "Gives the reason why.", time: 0.75 },
              { word: "I", clean: "i", isVocab: false, time: 1.15 },
              { word: "eat", clean: "eat", isVocab: true, emoji: "🍽️", meaning: "To put food in your mouth.", time: 1.35 },
              { word: "yummy", clean: "yummy", isVocab: true, emoji: "😋", meaning: "Delicious! Very good to eat.", time: 1.60 },
              { word: "pink", clean: "pink", isVocab: true, emoji: "🦐", meaning: "The color of the shrimp.", time: 1.95 },
              { word: "shrimp!", clean: "shrimp", isVocab: true, emoji: "🦐", meaning: "Small pink animals that live in water.", time: 2.25 }
            ]
          },
          {
            id: "p2_b2",
            speaker: "pip",
            position: { top: "30%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Wait! What you eat changes your color?!",
            words: [
              { word: "Wait!", clean: "wait", isVocab: true, emoji: "✋", meaning: "Stop and listen for a moment!", time: 0.05 },
              { word: "What", clean: "what", isVocab: false, time: 1.15 },
              { word: "you", clean: "you", isVocab: false, time: 1.40 },
              { word: "eat", clean: "eat", isVocab: true, emoji: "🍴", meaning: "Food you enjoy.", time: 1.60 },
              { word: "changes", clean: "changes", isVocab: true, emoji: "🔄", meaning: "Becomes different.", time: 1.85 },
              { word: "your", clean: "your", isVocab: false, time: 2.25 },
              { word: "color?!", clean: "color", isVocab: true, emoji: "🎨", meaning: "Pink, blue, orange, or green!", time: 2.45 }
            ]
          }
        ]
      },
      {
        panelIndex: 3,
        panelTitle: "Panel 3: The Silly Misapplication",
        image: "assets/illustrations/panel3.jpg",
        altText: "Pip the orange cat holding his paws on his cheeks in comical panic, staring at a green broccoli floret in his lunchbox.",
        narratorText: "Pip opens his lunchbox and gets a funny idea!",
        bubbles: [
          {
            id: "p3_b1",
            speaker: "pip",
            position: { top: "22%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Oh no! If I eat green broccoli, will I turn green?!",
            words: [
              { word: "Oh", clean: "oh", isVocab: false, time: 0.05 },
              { word: "no!", clean: "no", isVocab: false, time: 0.40 },
              { word: "If", clean: "if", isVocab: true, emoji: "🤔", meaning: "What happens when you do something?", time: 1.25 },
              { word: "I", clean: "i", isVocab: false, time: 1.45 },
              { word: "eat", clean: "eat", isVocab: true, emoji: "🥦", meaning: "Eating vegetables!", time: 1.65 },
              { word: "green", clean: "green", isVocab: true, emoji: "🟢", meaning: "The color of grass and trees!", time: 1.90 },
              { word: "broccoli,", clean: "broccoli", isVocab: true, emoji: "🥦", meaning: "A healthy, tree-shaped green vegetable.", time: 2.25 },
              { word: "will", clean: "will", isVocab: false, time: 2.85 },
              { word: "I", clean: "i", isVocab: false, time: 3.05 },
              { word: "turn", clean: "turn", isVocab: true, emoji: "🪄", meaning: "To change into something new.", time: 3.25 },
              { word: "green?!", clean: "green", isVocab: true, emoji: "👽", meaning: "A green cat?! Silly Pip!", time: 3.50 }
            ]
          },
          {
            id: "p3_b2",
            speaker: "dot",
            position: { top: "26%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha! Pip, you are an orange cat!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "Pip,", clean: "pip", isVocab: false, time: 1.10 },
              { word: "you", clean: "you", isVocab: false, time: 1.60 },
              { word: "are", clean: "are", isVocab: false, time: 1.80 },
              { word: "an", clean: "an", isVocab: false, time: 1.95 },
              { word: "orange", clean: "orange", isVocab: true, emoji: "🟠", meaning: "Bright warm color like an orange fruit!", time: 2.15 },
              { word: "cat!", clean: "cat", isVocab: true, emoji: "🐱", meaning: "A cute furry pet with whiskers.", time: 2.60 }
            ]
          }
        ]
      },
      {
        panelIndex: 4,
        panelTitle: "Panel 4: The Punchline & Resolution",
        image: "assets/illustrations/panel4.jpg",
        altText: "Pip wearing a piece of broccoli like a crown pretending to be a monster, Dot and Fiona laughing joyfully.",
        narratorText: "Everyone laughs and has fun together!",
        bubbles: [
          {
            id: "p4_b1",
            speaker: "pip",
            position: { top: "18%", left: "22%" },
            tailDirection: "bottom-left",
            text: "Roar! Look at me! I am the Green Monster Cat!",
            words: [
              { word: "Roar!", clean: "roar", isVocab: true, emoji: "🦁", meaning: "A loud, playful monster sound!", time: 0.05 },
              { word: "Look", clean: "look", isVocab: true, emoji: "👀", meaning: "See with your eyes.", time: 1.15 },
              { word: "at", clean: "at", isVocab: false, time: 1.50 },
              { word: "me!", clean: "me", isVocab: false, time: 1.70 },
              { word: "I", clean: "i", isVocab: false, time: 2.40 },
              { word: "am", clean: "am", isVocab: false, time: 2.60 },
              { word: "the", clean: "the", isVocab: false, time: 2.80 },
              { word: "Green", clean: "green", isVocab: true, emoji: "🟢", meaning: "Green like broccoli!", time: 3.00 },
              { word: "Monster", clean: "monster", isVocab: true, emoji: "👾", meaning: "A funny, playful creature.", time: 3.35 },
              { word: "Cat!", clean: "cat", isVocab: true, emoji: "🐱", meaning: "Pip the cute kitty!", time: 3.85 }
            ]
          },
          {
            id: "p4_b2",
            speaker: "dot",
            position: { top: "24%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha, silly Pip! Broccoli just makes you strong!",
            words: [
              { word: "Haha,", clean: "haha", isVocab: false, time: 0.05 },
              { word: "silly", clean: "silly", isVocab: true, emoji: "🤪", meaning: "Funny and playful, not serious!", time: 0.65 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 1.10 },
              { word: "Broccoli", clean: "broccoli", isVocab: true, emoji: "🥦", meaning: "Healthy green food.", time: 1.85 },
              { word: "just", clean: "just", isVocab: false, time: 2.45 },
              { word: "makes", clean: "makes", isVocab: true, emoji: "💪", meaning: "Causes you to become.", time: 2.70 },
              { word: "you", clean: "you", isVocab: false, time: 3.00 },
              { word: "strong!", clean: "strong", isVocab: true, emoji: "💪", meaning: "Full of energy and power!", time: 3.25 }
            ]
          }
        ]
      }
    ],
    funFactCard: {
      animal: "Flamingo (Fiona)",
      factTitle: "Why Are Flamingos Pink?",
      summary: "Flamingo chicks are actually born with grey and white feathers! They turn bright pink because their favorite food—pink shrimp and red algae—contains a natural pink dye called carotenoids.",
      funQuestion: "If you eat green vegetables, will you turn green? No! But you will grow big and strong like a superhero! 🥦💪"
    },
    quizQuestions: [
      {
        id: "q1",
        question: "Why is Fiona the flamingo bright pink?",
        audioPrompt: "Why is Fiona the flamingo bright pink?",
        options: [
          { audioId: "quiz_q1_opt1", text: "Because she eats yummy pink shrimp! 🦐", isCorrect: true, emoji: "🦐" },
          { audioId: "quiz_q1_opt2", text: "Because she paints her feathers! 🎨", isCorrect: false, emoji: "🎨" },
          { audioId: "quiz_q1_opt3", text: "Because she drinks strawberry milk! 🍓", isCorrect: false, emoji: "🍓" }
        ],
        explanation: "Super job! Flamingos eat lots of pink shrimp, which turns their feathers pink!"
      },
      {
        id: "q2",
        question: "If Pip the cat eats green broccoli, will he turn green?",
        audioPrompt: "If Pip eats broccoli, will he turn green?",
        options: [
          { audioId: "quiz_q2_opt1", text: "No, silly! Pip stays an orange cat! 🐱", isCorrect: true, emoji: "🐱" },
          { audioId: "quiz_q2_opt2", text: "Yes, he turns into an alien cat! 👽", isCorrect: false, emoji: "👽" }
        ],
        explanation: "That's right! Pip will always be an orange cat, but broccoli makes him healthy!"
      },
      {
        id: "q3",
        question: "What does eating healthy broccoli do for you?",
        audioPrompt: "What does eating broccoli do for you?",
        options: [
          { audioId: "quiz_q3_opt1", text: "It makes you strong and healthy! 💪", isCorrect: true, emoji: "💪" },
          { audioId: "quiz_q3_opt2", text: "It makes you fly in the sky! 🦅", isCorrect: false, emoji: "🦅" },
          { audioId: "quiz_q3_opt3", text: "It makes you sleep all day! 😴", isCorrect: false, emoji: "😴" }
        ],
        explanation: "Awesome! Green vegetables give you vitamins to make you strong and happy!"
      }
    ]
  },

  cammy_color_magic: {
    id: "cammy_color_magic",
    title: "Cammy's Color Magic!",
    subtitle: "Why do chameleons change color?",
    coverImage: "assets/illustrations/ep2_panel1.jpg",
    themeColor: "#10AC84",
    cefrLevel: "A1 / A2",
    targetVocab: ["yellow", "happy", "feelings", "chameleon", "angry", "change", "mood", "friend"],
    targetGrammar: [
      "Why did you turn [color]?",
      "I change color when I feel [emotion].",
      "If I get [adjective], will I turn [color]?"
    ],
    characters: {
      pip: {
        name: "Pip",
        role: "The Curious Cat",
        avatar: "assets/avatars/pip.jpg",
        color: "#FF9F43",
        sillyReaction: "Meow! I am so curious!"
      },
      dot: {
        name: "Dot",
        role: "The Smart Bunny",
        avatar: "assets/avatars/dot.jpg",
        color: "#54A0FF",
        sillyReaction: "Hop hop! Let's learn together!"
      },
      cammy: {
        name: "Cammy",
        role: "The Color Chameleon",
        avatar: "assets/avatars/cammy.jpg",
        color: "#10AC84",
        sillyReaction: "Squeak! I love bright happy colors!"
      }
    },
    panels: [
      {
        panelIndex: 1,
        panelTitle: "Panel 1: The Setup & Discovery",
        image: "assets/illustrations/ep2_panel1.jpg",
        altText: "Pip the orange cat and Dot the white rabbit looking up at Cammy the bright yellow chameleon on a branch.",
        narratorText: "Pip and Dot spot Cammy on a sunny tree branch.",
        bubbles: [
          {
            id: "ep2_p1_b1",
            speaker: "pip",
            position: { top: "34%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Hi Cammy! Why did you turn bright yellow?",
            words: [
              { word: "Hi", clean: "hi", isVocab: false, time: 0.05 },
              { word: "Cammy!", clean: "cammy", isVocab: false, time: 0.45 },
              { word: "Why", clean: "why", isVocab: true, emoji: "❓", meaning: "Used to ask for a reason.", time: 1.25 },
              { word: "did", clean: "did", isVocab: false, time: 1.45 },
              { word: "you", clean: "you", isVocab: false, time: 1.65 },
              { word: "turn", clean: "turn", isVocab: true, emoji: "🪄", meaning: "To change into a new color.", time: 1.85 },
              { word: "bright", clean: "bright", isVocab: true, emoji: "✨", meaning: "Full of bright light!", time: 2.15 },
              { word: "yellow?", clean: "yellow", isVocab: true, emoji: "🟡", meaning: "Sunny color like bananas!", time: 2.45 }
            ]
          },
          {
            id: "ep2_p1_b2",
            speaker: "dot",
            position: { top: "38%", left: "42%" },
            tailDirection: "bottom-left",
            text: "Are you trying to hide like a banana?!",
            words: [
              { word: "Are", clean: "are", isVocab: false, time: 0.05 },
              { word: "you", clean: "you", isVocab: false, time: 0.20 },
              { word: "trying", clean: "trying", isVocab: false, time: 0.35 },
              { word: "to", clean: "to", isVocab: false, time: 0.55 },
              { word: "hide", clean: "hide", isVocab: true, emoji: "🙈", meaning: "Stay out of sight so no one sees you.", time: 0.70 },
              { word: "like", clean: "like", isVocab: false, time: 0.95 },
              { word: "a", clean: "a", isVocab: false, time: 1.10 },
              { word: "banana?!", clean: "banana", isVocab: true, emoji: "🍌", meaning: "A sweet yellow fruit!", time: 1.25 }
            ]
          }
        ]
      },
      {
        panelIndex: 2,
        panelTitle: "Panel 2: The Reveal & Science Fact",
        image: "assets/illustrations/ep2_panel2.jpg",
        altText: "Cammy the chameleon smiling joyfully under sunshine with sparkling glow, Dot looking amazed.",
        narratorText: "Cammy glows with happy sunshine sparkles.",
        bubbles: [
          {
            id: "ep2_p2_b1",
            speaker: "cammy",
            position: { top: "24%", left: "26%" },
            tailDirection: "bottom-left",
            text: "Haha! Chameleons change color to show our feelings! Yellow means I am super happy!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "Chameleons", clean: "chameleon", isVocab: true, emoji: "🦎", meaning: "Special lizards that change color!", time: 0.85 },
              { word: "change", clean: "change", isVocab: true, emoji: "🔄", meaning: "To become different.", time: 1.45 },
              { word: "color", clean: "color", isVocab: true, emoji: "🎨", meaning: "Yellow, green, pink, or red!", time: 1.75 },
              { word: "to", clean: "to", isVocab: false, time: 2.05 },
              { word: "show", clean: "show", isVocab: true, emoji: "👀", meaning: "Let others see.", time: 2.20 },
              { word: "our", clean: "our", isVocab: false, time: 2.45 },
              { word: "feelings!", clean: "feelings", isVocab: true, emoji: "💖", meaning: "Emotions like happy, excited, or silly!", time: 2.65 },
              { word: "Yellow", clean: "yellow", isVocab: true, emoji: "🟡", meaning: "Bright sunny yellow color.", time: 3.35 },
              { word: "means", clean: "means", isVocab: false, time: 3.70 },
              { word: "I", clean: "i", isVocab: false, time: 3.90 },
              { word: "am", clean: "am", isVocab: false, time: 4.05 },
              { word: "super", clean: "super", isVocab: true, emoji: "⭐", meaning: "Very very much!", time: 4.25 },
              { word: "happy!", clean: "happy", isVocab: true, emoji: "😄", meaning: "Feeling joyful and full of smiles!", time: 4.55 }
            ]
          },
          {
            id: "ep2_p2_b2",
            speaker: "dot",
            position: { top: "30%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Wow! Your colors show your mood!",
            words: [
              { word: "Wow!", clean: "wow", isVocab: false, time: 0.05 },
              { word: "Your", clean: "your", isVocab: false, time: 0.80 },
              { word: "colors", clean: "colors", isVocab: true, emoji: "🌈", meaning: "Different shades like yellow and green.", time: 1.05 },
              { word: "show", clean: "show", isVocab: true, emoji: "✨", meaning: "Express clearly.", time: 1.45 },
              { word: "your", clean: "your", isVocab: false, time: 1.70 },
              { word: "mood!", clean: "mood", isVocab: true, emoji: "🎭", meaning: "How you are feeling inside.", time: 1.90 }
            ]
          }
        ]
      },
      {
        panelIndex: 3,
        panelTitle: "Panel 3: The Silly Misapplication",
        image: "assets/illustrations/ep2_panel3.jpg",
        altText: "Pip the orange cat puffing his cheeks making a funny grumpy monster face trying to turn red, Dot giggling.",
        narratorText: "Pip puffs up his cheeks to test chameleon magic!",
        bubbles: [
          {
            id: "ep2_p3_b1",
            speaker: "pip",
            position: { top: "22%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Look at me! If I get angry, will I turn fiery red?!",
            words: [
              { word: "Look", clean: "look", isVocab: true, emoji: "👀", meaning: "Look with your eyes!", time: 0.05 },
              { word: "at", clean: "at", isVocab: false, time: 0.35 },
              { word: "me!", clean: "me", isVocab: false, time: 0.55 },
              { word: "If", clean: "if", isVocab: false, time: 1.25 },
              { word: "I", clean: "i", isVocab: false, time: 1.45 },
              { word: "get", clean: "get", isVocab: false, time: 1.65 },
              { word: "angry,", clean: "angry", isVocab: true, emoji: "😡", meaning: "Grumpy or mad feeling.", time: 1.85 },
              { word: "will", clean: "will", isVocab: false, time: 2.45 },
              { word: "I", clean: "i", isVocab: false, time: 2.65 },
              { word: "turn", clean: "turn", isVocab: true, emoji: "🪄", meaning: "Change into a color.", time: 2.85 },
              { word: "fiery", clean: "fiery", isVocab: true, emoji: "🔥", meaning: "Hot and bright like fire!", time: 3.10 },
              { word: "red?!", clean: "red", isVocab: true, emoji: "🔴", meaning: "Bright red color!", time: 3.45 }
            ]
          },
          {
            id: "ep2_p3_b2",
            speaker: "dot",
            position: { top: "26%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha, silly Pip! You just look like a puffy tomato!",
            words: [
              { word: "Haha,", clean: "haha", isVocab: false, time: 0.05 },
              { word: "silly", clean: "silly", isVocab: true, emoji: "🤪", meaning: "Playful and funny!", time: 0.65 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 1.10 },
              { word: "You", clean: "you", isVocab: false, time: 1.70 },
              { word: "just", clean: "just", isVocab: false, time: 1.90 },
              { word: "look", clean: "look", isVocab: true, emoji: "👀", meaning: "Appear like something.", time: 2.15 },
              { word: "like", clean: "like", isVocab: false, time: 2.40 },
              { word: "a", clean: "a", isVocab: false, time: 2.55 },
              { word: "puffy", clean: "puffy", isVocab: true, emoji: "🐡", meaning: "Big and round full of air!", time: 2.70 },
              { word: "tomato!", clean: "tomato", isVocab: true, emoji: "🍅", meaning: "A round red vegetable!", time: 3.05 }
            ]
          }
        ]
      },
      {
        panelIndex: 4,
        panelTitle: "Panel 4: The Punchline & Resolution",
        image: "assets/illustrations/ep2_panel4.jpg",
        altText: "Pip smiling hugging Cammy with rainbow sparkles, Dot laughing happily in friendship.",
        narratorText: "Everyone giggles and shares a happy friendship hug!",
        bubbles: [
          {
            id: "ep2_p4_b1",
            speaker: "pip",
            position: { top: "18%", left: "22%" },
            tailDirection: "bottom-left",
            text: "Okay, I am not angry! Now I am happy orange!",
            words: [
              { word: "Okay,", clean: "okay", isVocab: false, time: 0.05 },
              { word: "I", clean: "i", isVocab: false, time: 0.65 },
              { word: "am", clean: "am", isVocab: false, time: 0.85 },
              { word: "not", clean: "not", isVocab: false, time: 1.05 },
              { word: "angry!", clean: "angry", isVocab: true, emoji: "😊", meaning: "No longer mad!", time: 1.25 },
              { word: "Now", clean: "now", isVocab: false, time: 2.05 },
              { word: "I", clean: "i", isVocab: false, time: 2.25 },
              { word: "am", clean: "am", isVocab: false, time: 2.45 },
              { word: "happy", clean: "happy", isVocab: true, emoji: "😄", meaning: "Full of joyful smiles!", time: 2.65 },
              { word: "orange!", clean: "orange", isVocab: true, emoji: "🐱", meaning: "Pip's cute kitty color!", time: 3.00 }
            ]
          },
          {
            id: "ep2_p4_b2",
            speaker: "cammy",
            position: { top: "24%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Yay! Happy friends are the best color!",
            words: [
              { word: "Yay!", clean: "yay", isVocab: false, time: 0.05 },
              { word: "Happy", clean: "happy", isVocab: true, emoji: "🎉", meaning: "Joyful and excited!", time: 0.80 },
              { word: "friends", clean: "friends", isVocab: true, emoji: "🤝", meaning: "Buddies who play together!", time: 1.15 },
              { word: "are", clean: "are", isVocab: false, time: 1.55 },
              { word: "the", clean: "the", isVocab: false, time: 1.70 },
              { word: "best", clean: "best", isVocab: true, emoji: "🏆", meaning: "Number one greatest!", time: 1.85 },
              { word: "color!", clean: "color", isVocab: true, emoji: "🌈", meaning: "Bright cheerful rainbow!", time: 2.15 }
            ]
          }
        ]
      }
    ],
    funFactCard: {
      animal: "Chameleon (Cammy)",
      factTitle: "Why Do Chameleons Change Color?",
      summary: "Chameleons change color mostly to talk to friends and express their feelings! When they are warm and happy, they turn bright sunny yellow or green. When they are angry or scared, they turn darker colors to show their mood.",
      funQuestion: "Can you change color when you are happy? No, but you can share a big warm smile with your friends! 🦎✨"
    },
    quizQuestions: [
      {
        id: "ep2_q1",
        question: "Why did Cammy the chameleon turn bright yellow?",
        audioPrompt: "Why did Cammy the chameleon turn bright yellow?",
        options: [
          { audioId: "quiz_ep2_q1_opt1", text: "Because he is feeling super happy! 🌞", isCorrect: true, emoji: "🌞" },
          { audioId: "quiz_ep2_q1_opt2", text: "Because he ate a yellow lemon! 🍋", isCorrect: false, emoji: "🍋" },
          { audioId: "quiz_ep2_q1_opt3", text: "Because he fell in yellow paint! 🎨", isCorrect: false, emoji: "🎨" }
        ],
        explanation: "Super job! Cammy was feeling super happy, so he turned bright sunny yellow!"
      },
      {
        id: "ep2_q2",
        question: "If Pip the cat gets angry, will he turn red like a chameleon?",
        audioPrompt: "If Pip gets angry, will he turn red?",
        options: [
          { audioId: "quiz_ep2_q2_opt1", text: "No, Pip is an orange cat, not a chameleon! 🐱", isCorrect: true, emoji: "🐱" },
          { audioId: "quiz_ep2_q2_opt2", text: "Yes, he turns into a fiery red dragon! 🐲", isCorrect: false, emoji: "🐲" }
        ],
        explanation: "That's right! Cats do not change color, but friends can share big smiles!"
      },
      {
        id: "ep2_q3",
        question: "What do chameleon colors tell us?",
        audioPrompt: "What do chameleon colors tell us?",
        options: [
          { audioId: "quiz_ep2_q3_opt1", text: "They show their feelings and mood! 🎭", isCorrect: true, emoji: "🎭" },
          { audioId: "quiz_ep2_q3_opt2", text: "They show what time it is! ⏰", isCorrect: false, emoji: "⏰" },
          { audioId: "quiz_ep2_q3_opt3", text: "They show how to do math! 🔢", isCorrect: false, emoji: "🔢" }
        ],
        explanation: "Awesome! A chameleon's color shows how they feel inside!"
      }
    ]
  },

  percy_warm_tuxedo: {
    id: "percy_warm_tuxedo",
    title: "Percy's Warm Tuxedo!",
    subtitle: "Why don't penguins freeze in ice water?",
    coverImage: "assets/illustrations/ep3_panel1.jpg",
    themeColor: "#0984E3",
    cefrLevel: "A1 / A2",
    targetVocab: ["freezing", "penguin", "waterproof", "feathers", "warm", "coats", "cocoa", "slide"],
    targetGrammar: [
      "Aren't you freezing in [noun]?",
      "My feathers are [adjective] and trap [noun].",
      "If I wear [number] coats, can I [verb]?"
    ],
    characters: {
      pip: {
        name: "Pip",
        role: "The Curious Cat",
        avatar: "assets/avatars/pip.jpg",
        color: "#FF9F43",
        sillyReaction: "Meow! I am so curious!"
      },
      dot: {
        name: "Dot",
        role: "The Smart Bunny",
        avatar: "assets/avatars/dot.jpg",
        color: "#54A0FF",
        sillyReaction: "Hop hop! Let's learn together!"
      },
      percy: {
        name: "Percy",
        role: "The Tuxedo Penguin",
        avatar: "assets/avatars/percy.jpg",
        color: "#0984E3",
        sillyReaction: "Waddle waddle! I love sliding on icy snow!"
      }
    },
    panels: [
      {
        panelIndex: 1,
        panelTitle: "Panel 1: The Setup & Discovery",
        image: "assets/illustrations/ep3_panel1.jpg",
        altText: "Pip the cat and Dot the bunny shivering in winter scarves looking at Percy the cute baby penguin sliding on the snow.",
        narratorText: "Pip and Dot shiver on the snowy icy shore.",
        bubbles: [
          {
            id: "ep3_p1_b1",
            speaker: "pip",
            position: { top: "34%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Brrr! Percy, aren't you freezing in this ice water?!",
            words: [
              { word: "Brrr!", clean: "brrr", isVocab: false, time: 0.05 },
              { word: "Percy,", clean: "percy", isVocab: false, time: 0.80 },
              { word: "aren't", clean: "arent", isVocab: false, time: 1.35 },
              { word: "you", clean: "you", isVocab: false, time: 1.55 },
              { word: "freezing", clean: "freezing", isVocab: true, emoji: "🥶", meaning: "Extremely cold like ice and snow!", time: 1.75 },
              { word: "in", clean: "in", isVocab: false, time: 2.20 },
              { word: "this", clean: "this", isVocab: false, time: 2.35 },
              { word: "ice", clean: "ice", isVocab: true, emoji: "🧊", meaning: "Frozen solid cold water.", time: 2.50 },
              { word: "water?!", clean: "water", isVocab: false, time: 2.80 }
            ]
          },
          {
            id: "ep3_p1_b2",
            speaker: "dot",
            position: { top: "38%", left: "42%" },
            tailDirection: "bottom-left",
            text: "You look like you are wearing a fancy tuxedo!",
            words: [
              { word: "You", clean: "you", isVocab: false, time: 0.05 },
              { word: "look", clean: "look", isVocab: true, emoji: "👀", meaning: "To appear like something.", time: 0.25 },
              { word: "like", clean: "like", isVocab: false, time: 0.50 },
              { word: "you", clean: "you", isVocab: false, time: 0.70 },
              { word: "are", clean: "are", isVocab: false, time: 0.85 },
              { word: "wearing", clean: "wearing", isVocab: true, emoji: "👔", meaning: "Having clothes on your body.", time: 1.05 },
              { word: "a", clean: "a", isVocab: false, time: 1.35 },
              { word: "fancy", clean: "fancy", isVocab: true, emoji: "✨", meaning: "Very special and dressed up!", time: 1.50 },
              { word: "tuxedo!", clean: "tuxedo", isVocab: true, emoji: "🐧", meaning: "A handsome black-and-white suit!", time: 1.85 }
            ]
          }
        ]
      },
      {
        panelIndex: 2,
        panelTitle: "Panel 2: The Reveal & Science Fact",
        image: "assets/illustrations/ep3_panel2.jpg",
        altText: "Percy splashing joyfully in cold water with sparkling droplets and a warm golden glow around his feathers.",
        narratorText: "Percy splashes happily with warm waterproof feathers.",
        bubbles: [
          {
            id: "ep3_p2_b1",
            speaker: "percy",
            position: { top: "24%", left: "26%" },
            tailDirection: "bottom-left",
            text: "Haha! My feathers are waterproof and trap warm air like a built-in winter coat!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "My", clean: "my", isVocab: false, time: 0.75 },
              { word: "feathers", clean: "feathers", isVocab: true, emoji: "🪶", meaning: "Soft waterproof coats on birds!", time: 0.95 },
              { word: "are", clean: "are", isVocab: false, time: 1.45 },
              { word: "waterproof", clean: "waterproof", isVocab: true, emoji: "🛡️", meaning: "Keeps water out so you stay dry!", time: 1.65 },
              { word: "and", clean: "and", isVocab: false, time: 2.30 },
              { word: "trap", clean: "trap", isVocab: true, emoji: "🔒", meaning: "Hold tightly inside.", time: 2.50 },
              { word: "warm", clean: "warm", isVocab: true, emoji: "☀️", meaning: "Cozy and comfortable.", time: 2.75 },
              { word: "air", clean: "air", isVocab: false, time: 3.10 },
              { word: "like", clean: "like", isVocab: false, time: 3.35 },
              { word: "a", clean: "a", isVocab: false, time: 3.50 },
              { word: "built-in", clean: "built-in", isVocab: false, time: 3.65 },
              { word: "winter", clean: "winter", isVocab: true, emoji: "❄️", meaning: "Cold snowy season.", time: 4.05 },
              { word: "coat!", clean: "coat", isVocab: true, emoji: "🧥", meaning: "Warm jacket you wear outside.", time: 4.45 }
            ]
          },
          {
            id: "ep3_p2_b2",
            speaker: "dot",
            position: { top: "30%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Wow! Your feathers keep you warm and dry!",
            words: [
              { word: "Wow!", clean: "wow", isVocab: false, time: 0.05 },
              { word: "Your", clean: "your", isVocab: false, time: 0.80 },
              { word: "feathers", clean: "feathers", isVocab: true, emoji: "🪶", meaning: "Bird's protective coat.", time: 1.05 },
              { word: "keep", clean: "keep", isVocab: false, time: 1.45 },
              { word: "you", clean: "you", isVocab: false, time: 1.70 },
              { word: "warm", clean: "warm", isVocab: true, emoji: "🔥", meaning: "Not cold at all!", time: 1.85 },
              { word: "and", clean: "and", isVocab: false, time: 2.20 },
              { word: "dry!", clean: "dry", isVocab: true, emoji: "☀️", meaning: "Without water or wetness.", time: 2.40 }
            ]
          }
        ]
      },
      {
        panelIndex: 3,
        panelTitle: "Panel 3: The Silly Misapplication",
        image: "assets/illustrations/ep3_panel3.jpg",
        altText: "Pip the orange cat bundled in five thick colorful winter coats like a giant round orange ball on ice.",
        narratorText: "Pip bundles up in five giant colorful winter coats!",
        bubbles: [
          {
            id: "ep3_p3_b1",
            speaker: "pip",
            position: { top: "22%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Look at me! If I wear five coats, can I swim with icebergs?!",
            words: [
              { word: "Look", clean: "look", isVocab: true, emoji: "👀", meaning: "See with eyes!", time: 0.05 },
              { word: "at", clean: "at", isVocab: false, time: 0.35 },
              { word: "me!", clean: "me", isVocab: false, time: 0.55 },
              { word: "If", clean: "if", isVocab: false, time: 1.25 },
              { word: "I", clean: "i", isVocab: false, time: 1.45 },
              { word: "wear", clean: "wear", isVocab: true, emoji: "🧥", meaning: "Put on clothes.", time: 1.65 },
              { word: "five", clean: "five", isVocab: true, emoji: "5️⃣", meaning: "Number 5!", time: 1.95 },
              { word: "coats,", clean: "coats", isVocab: true, emoji: "🧥", meaning: "Thick winter jackets.", time: 2.25 },
              { word: "can", clean: "can", isVocab: false, time: 2.75 },
              { word: "I", clean: "i", isVocab: false, time: 2.95 },
              { word: "swim", clean: "swim", isVocab: true, emoji: "🏊", meaning: "Move through water.", time: 3.10 },
              { word: "with", clean: "with", isVocab: false, time: 3.45 },
              { word: "icebergs?!", clean: "icebergs", isVocab: true, emoji: "🏔️", meaning: "Giant floating mountains of ice!", time: 3.65 }
            ]
          },
          {
            id: "ep3_p3_b2",
            speaker: "dot",
            position: { top: "26%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha, silly Pip! You look like a giant orange ball! You will just roll away!",
            words: [
              { word: "Haha,", clean: "haha", isVocab: false, time: 0.05 },
              { word: "silly", clean: "silly", isVocab: true, emoji: "🤪", meaning: "Playful and funny!", time: 0.65 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 1.10 },
              { word: "You", clean: "you", isVocab: false, time: 1.70 },
              { word: "look", clean: "look", isVocab: false, time: 1.90 },
              { word: "like", clean: "like", isVocab: false, time: 2.10 },
              { word: "a", clean: "a", isVocab: false, time: 2.30 },
              { word: "giant", clean: "giant", isVocab: true, emoji: "🐘", meaning: "Huge and enormous!", time: 2.45 },
              { word: "orange", clean: "orange", isVocab: false, time: 2.80 },
              { word: "ball!", clean: "ball", isVocab: true, emoji: "⚽", meaning: "Round shape that rolls!", time: 3.10 },
              { word: "You", clean: "you", isVocab: false, time: 3.75 },
              { word: "will", clean: "will", isVocab: false, time: 3.90 },
              { word: "just", clean: "just", isVocab: false, time: 4.05 },
              { word: "roll", clean: "roll", isVocab: true, emoji: "🔄", meaning: "Tumble over and over!", time: 4.25 },
              { word: "away!", clean: "away", isVocab: false, time: 4.65 }
            ]
          }
        ]
      },
      {
        panelIndex: 4,
        panelTitle: "Panel 4: The Punchline & Resolution",
        image: "assets/illustrations/ep3_panel4.jpg",
        altText: "Pip, Dot, and Percy sitting by snowy log holding warm mugs of hot cocoa, laughing together.",
        narratorText: "Pip rolls into the snow and everyone drinks warm hot cocoa!",
        bubbles: [
          {
            id: "ep3_p4_b1",
            speaker: "pip",
            position: { top: "18%", left: "22%" },
            tailDirection: "bottom-left",
            text: "Wheee! I am rolling! Catch me, Percy!",
            words: [
              { word: "Wheee!", clean: "wheee", isVocab: false, time: 0.05 },
              { word: "I", clean: "i", isVocab: false, time: 0.70 },
              { word: "am", clean: "am", isVocab: false, time: 0.85 },
              { word: "rolling!", clean: "rolling", isVocab: true, emoji: "🌀", meaning: "Rolling in the soft snow!", time: 1.05 },
              { word: "Catch", clean: "catch", isVocab: true, emoji: "🤲", meaning: "Grab with your hands!", time: 1.65 },
              { word: "me,", clean: "me", isVocab: false, time: 2.00 },
              { word: "Percy!", clean: "percy", isVocab: false, time: 2.20 }
            ]
          },
          {
            id: "ep3_p4_b2",
            speaker: "percy",
            position: { top: "24%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha! Warm cocoa by the fire is better than ice water anyway!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "Warm", clean: "warm", isVocab: true, emoji: "☕", meaning: "Comforting hot drink.", time: 0.70 },
              { word: "cocoa", clean: "cocoa", isVocab: true, emoji: "🍫", meaning: "Sweet hot chocolate drink!", time: 1.05 },
              { word: "by", clean: "by", isVocab: false, time: 1.45 },
              { word: "the", clean: "the", isVocab: false, time: 1.60 },
              { word: "fire", clean: "fire", isVocab: true, emoji: "🔥", meaning: "Warm campfire.", time: 1.75 },
              { word: "is", clean: "is", isVocab: false, time: 2.10 },
              { word: "better", clean: "better", isVocab: true, emoji: "⭐", meaning: "More fun and delicious!", time: 2.25 },
              { word: "than", clean: "than", isVocab: false, time: 2.65 },
              { word: "ice", clean: "ice", isVocab: false, time: 2.85 },
              { word: "water", clean: "water", isVocab: false, time: 3.05 },
              { word: "anyway!", clean: "anyway", isVocab: false, time: 3.40 }
            ]
          }
        ]
      }
    ],
    funFactCard: {
      animal: "Penguin (Percy)",
      factTitle: "Why Don't Penguins Freeze in Ice Water?",
      summary: "Penguins have thousands of tightly packed, waterproof feathers and a thick layer of fat called blubber. They trap a layer of warm air right next to their skin, keeping them cozy and dry even in freezing polar oceans!",
      funQuestion: "Do you wear a waterproof coat in the rain? Just like Percy the penguin wears his tuxedo feathers! 🐧❄️"
    },
    quizQuestions: [
      {
        id: "ep3_q1",
        question: "Why doesn't Percy the penguin freeze in cold ice water?",
        audioPrompt: "Why doesn't Percy the penguin freeze in ice water?",
        options: [
          { audioId: "quiz_ep3_q1_opt1", text: "Because his feathers are waterproof and trap warm air! 🧥", isCorrect: true, emoji: "🧥" },
          { audioId: "quiz_ep3_q1_opt2", text: "Because he wears an electric heater! 🔌", isCorrect: false, emoji: "🔌" },
          { audioId: "quiz_ep3_q1_opt3", text: "Because penguins are made of ice cream! 🍦", isCorrect: false, emoji: "🍦" }
        ],
        explanation: "Super job! Percy's waterproof feathers trap warm air to keep him cozy!"
      },
      {
        id: "ep3_q2",
        question: "What happened when Pip put on five winter coats?",
        audioPrompt: "What happened when Pip put on five winter coats?",
        options: [
          { audioId: "quiz_ep3_q2_opt1", text: "He became a round puffy ball and rolled away! ⚽", isCorrect: true, emoji: "⚽" },
          { audioId: "quiz_ep3_q2_opt2", text: "He flew up into the moon! 🌙", isCorrect: false, emoji: "🌙" }
        ],
        explanation: "Haha, that's right! Pip turned into a round puffy ball and rolled in the snow!"
      },
      {
        id: "ep3_q3",
        question: "What do Pip, Dot, and Percy drink to stay warm together?",
        audioPrompt: "What do Pip, Dot, and Percy drink to stay warm?",
        options: [
          { audioId: "quiz_ep3_q3_opt1", text: "Yummy warm hot cocoa! ☕", isCorrect: true, emoji: "☕" },
          { audioId: "quiz_ep3_q3_opt2", text: "Ice cold lemonade! 🍋", isCorrect: false, emoji: "🍋" },
          { audioId: "quiz_ep3_q3_opt3", text: "Salty seawater! 🌊", isCorrect: false, emoji: "🌊" }
        ],
        explanation: "Yummy! Warm hot cocoa with sweet marshmallows!"
      }
    ]
  },

  ollie_owl_twist: {
    id: "ollie_owl_twist",
    title: "Ollie's 270° Twist!",
    subtitle: "How can owls spin their heads backwards?",
    coverImage: "assets/illustrations/ep4_panel1.jpg",
    themeColor: "#E17055",
    cefrLevel: "A1 / A2",
    targetVocab: ["twist", "neck", "bones", "owl", "spin", "pretzel", "circle", "behind"],
    targetGrammar: [
      "Your head spun [direction]!",
      "Owls have [number] neck bones.",
      "Watch me! I can [verb]!"
    ],
    characters: {
      pip: {
        name: "Pip",
        role: "The Curious Cat",
        avatar: "assets/avatars/pip.jpg",
        color: "#FF9F43",
        sillyReaction: "Meow! I am so curious!"
      },
      dot: {
        name: "Dot",
        role: "The Smart Bunny",
        avatar: "assets/avatars/dot.jpg",
        color: "#54A0FF",
        sillyReaction: "Hop hop! Let's learn together!"
      },
      ollie: {
        name: "Ollie",
        role: "The Wise Owl",
        avatar: "assets/avatars/ollie.jpg",
        color: "#E17055",
        sillyReaction: "Hoot hoot! I can see behind me without turning my body!"
      }
    },
    panels: [
      {
        panelIndex: 1,
        panelTitle: "Panel 1: The Superpower Flex",
        image: "assets/illustrations/ep4_panel1.jpg",
        altText: "Ollie the owl sitting on a branch facing forward with his head rotated backwards looking at Pip and Dot.",
        narratorText: "Ollie the owl surprises Pip and Dot in the evening forest.",
        bubbles: [
          {
            id: "ep4_p1_b1",
            speaker: "pip",
            position: { top: "34%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Whoa! Ollie, your head just spun all the way around!",
            words: [
              { word: "Whoa!", clean: "whoa", isVocab: false, time: 0.05 },
              { word: "Ollie,", clean: "ollie", isVocab: false, time: 0.85 },
              { word: "your", clean: "your", isVocab: false, time: 1.40 },
              { word: "head", clean: "head", isVocab: true, emoji: "🦉", meaning: "The top part of the body.", time: 1.60 },
              { word: "just", clean: "just", isVocab: false, time: 1.80 },
              { word: "spun", clean: "spun", isVocab: true, emoji: "🔄", meaning: "Turned around in a circle.", time: 2.00 },
              { word: "all", clean: "all", isVocab: false, time: 2.30 },
              { word: "the", clean: "the", isVocab: false, time: 2.45 },
              { word: "way", clean: "way", isVocab: false, time: 2.60 },
              { word: "around!", clean: "around", isVocab: true, emoji: "🔄", meaning: "In a full circle!", time: 2.75 }
            ]
          },
          {
            id: "ep4_p1_b2",
            speaker: "dot",
            position: { top: "38%", left: "42%" },
            tailDirection: "bottom-left",
            text: "Are you doing head gymnastics?!",
            words: [
              { word: "Are", clean: "are", isVocab: false, time: 0.05 },
              { word: "you", clean: "you", isVocab: false, time: 0.20 },
              { word: "doing", clean: "doing", isVocab: false, time: 0.35 },
              { word: "head", clean: "head", isVocab: false, time: 0.60 },
              { word: "gymnastics?!", clean: "gymnastics", isVocab: true, emoji: "🤸", meaning: "Flexible, acrobatic body moves!", time: 0.85 }
            ]
          }
        ]
      },
      {
        panelIndex: 2,
        panelTitle: "Panel 2: The Anatomy Reality",
        image: "assets/illustrations/ep4_panel2.jpg",
        altText: "Ollie the owl smiling with an open wing explaining his 14 neck bones, Dot clapping in wonder.",
        narratorText: "Ollie explains the magic of owl neck bones.",
        bubbles: [
          {
            id: "ep4_p2_b1",
            speaker: "ollie",
            position: { top: "24%", left: "26%" },
            tailDirection: "bottom-left",
            text: "Haha! Owls have 14 neck bones so we can turn our heads almost full circle!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "Owls", clean: "owl", isVocab: true, emoji: "🦉", meaning: "Wise night birds.", time: 0.70 },
              { word: "have", clean: "have", isVocab: false, time: 1.05 },
              { word: "14", clean: "14", isVocab: true, emoji: "1️⃣4️⃣", meaning: "Fourteen neck bones!", time: 1.25 },
              { word: "neck", clean: "neck", isVocab: true, emoji: "🦒", meaning: "Connects head to body.", time: 1.75 },
              { word: "bones", clean: "bones", isVocab: true, emoji: "🦴", meaning: "Hard skeleton parts.", time: 2.05 },
              { word: "so", clean: "so", isVocab: false, time: 2.45 },
              { word: "we", clean: "we", isVocab: false, time: 2.65 },
              { word: "can", clean: "can", isVocab: false, time: 2.80 },
              { word: "turn", clean: "turn", isVocab: true, emoji: "🔄", meaning: "Rotate.", time: 3.00 },
              { word: "our", clean: "our", isVocab: false, time: 3.25 },
              { word: "heads", clean: "heads", isVocab: false, time: 3.40 },
              { word: "almost", clean: "almost", isVocab: false, time: 3.75 },
              { word: "full", clean: "full", isVocab: false, time: 4.10 },
              { word: "circle!", clean: "circle", isVocab: true, emoji: "⭕", meaning: "270 degrees around!", time: 4.35 }
            ]
          },
          {
            id: "ep4_p2_b2",
            speaker: "dot",
            position: { top: "30%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Your eyes are fixed, so your neck does the looking!",
            words: [
              { word: "Your", clean: "your", isVocab: false, time: 0.05 },
              { word: "eyes", clean: "eyes", isVocab: true, emoji: "👀", meaning: "Organs for seeing.", time: 0.25 },
              { word: "are", clean: "are", isVocab: false, time: 0.60 },
              { word: "fixed,", clean: "fixed", isVocab: true, emoji: "🔒", meaning: "Cannot move in sockets.", time: 0.75 },
              { word: "so", clean: "so", isVocab: false, time: 1.25 },
              { word: "your", clean: "your", isVocab: false, time: 1.45 },
              { word: "neck", clean: "neck", isVocab: false, time: 1.65 },
              { word: "does", clean: "does", isVocab: false, time: 1.95 },
              { word: "the", clean: "the", isVocab: false, time: 2.10 },
              { word: "looking!", clean: "looking", isVocab: true, emoji: "🔍", meaning: "Searching with eyes.", time: 2.25 }
            ]
          }
        ]
      },
      {
        panelIndex: 3,
        panelTitle: "Panel 3: The Challenge & Clumsy Fail",
        image: "assets/illustrations/ep4_panel3.jpg",
        altText: "Pip the orange cat twisted into a comical pretzel knot with tangled paws and tail, Dot laughing.",
        narratorText: "Pip tries the owl twist challenge and gets tangled!",
        bubbles: [
          {
            id: "ep4_p3_b1",
            speaker: "pip",
            position: { top: "22%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Watch me! I can do the 360-degree super kitty twist!",
            words: [
              { word: "Watch", clean: "watch", isVocab: true, emoji: "👀", meaning: "Look at me!", time: 0.05 },
              { word: "me!", clean: "me", isVocab: false, time: 0.35 },
              { word: "I", clean: "i", isVocab: false, time: 1.05 },
              { word: "can", clean: "can", isVocab: false, time: 1.20 },
              { word: "do", clean: "do", isVocab: false, time: 1.35 },
              { word: "the", clean: "the", isVocab: false, time: 1.50 },
              { word: "360-degree", clean: "360", isVocab: true, emoji: "🔄", meaning: "Full spin!", time: 1.65 },
              { word: "super", clean: "super", isVocab: false, time: 2.30 },
              { word: "kitty", clean: "kitty", isVocab: true, emoji: "🐱", meaning: "Little cat.", time: 2.65 },
              { word: "twist!", clean: "twist", isVocab: true, emoji: "🥨", meaning: "Spinning turn!", time: 2.95 }
            ]
          },
          {
            id: "ep4_p3_b2",
            speaker: "dot",
            position: { top: "26%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Oh no, Pip! You tied yourself into a tangled pretzel cat!",
            words: [
              { word: "Oh", clean: "oh", isVocab: false, time: 0.05 },
              { word: "no,", clean: "no", isVocab: false, time: 0.20 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 0.40 },
              { word: "You", clean: "you", isVocab: false, time: 0.95 },
              { word: "tied", clean: "tied", isVocab: true, emoji: "🪢", meaning: "Knotted tightly.", time: 1.15 },
              { word: "yourself", clean: "yourself", isVocab: false, time: 1.45 },
              { word: "into", clean: "into", isVocab: false, time: 1.75 },
              { word: "a", clean: "a", isVocab: false, time: 1.90 },
              { word: "tangled", clean: "tangled", isVocab: true, emoji: "🌀", meaning: "Messy knot.", time: 2.05 },
              { word: "pretzel", clean: "pretzel", isVocab: true, emoji: "🥨", meaning: "Twisted baked snack!", time: 2.45 },
              { word: "cat!", clean: "cat", isVocab: false, time: 2.85 }
            ]
          }
        ]
      },
      {
        panelIndex: 4,
        panelTitle: "Panel 4: The Untangling & Resolution",
        image: "assets/illustrations/ep4_panel4.jpg",
        altText: "Ollie and Dot helping untangle Pip, all three laughing warmly together in the forest.",
        narratorText: "Ollie and Dot untangle Pip and share a cheerful laugh!",
        bubbles: [
          {
            id: "ep4_p4_b1",
            speaker: "pip",
            position: { top: "18%", left: "22%" },
            tailDirection: "bottom-left",
            text: "Help! My tail is on my nose! Cats only have 7 neck bones!",
            words: [
              { word: "Help!", clean: "help", isVocab: false, time: 0.05 },
              { word: "My", clean: "my", isVocab: false, time: 0.70 },
              { word: "tail", clean: "tail", isVocab: true, emoji: "🐈", meaning: "Furry back end of cat.", time: 0.90 },
              { word: "is", clean: "is", isVocab: false, time: 1.15 },
              { word: "on", clean: "on", isVocab: false, time: 1.30 },
              { word: "my", clean: "my", isVocab: false, time: 1.45 },
              { word: "nose!", clean: "nose", isVocab: true, emoji: "👃", meaning: "Face part for smelling.", time: 1.60 },
              { word: "Cats", clean: "cats", isVocab: false, time: 2.25 },
              { word: "only", clean: "only", isVocab: false, time: 2.50 },
              { word: "have", clean: "have", isVocab: false, time: 2.70 },
              { word: "7", clean: "7", isVocab: true, emoji: "7️⃣", meaning: "Seven neck bones.", time: 2.90 },
              { word: "neck", clean: "neck", isVocab: false, time: 3.25 },
              { word: "bones!", clean: "bones", isVocab: false, time: 3.50 }
            ]
          },
          {
            id: "ep4_p4_b2",
            speaker: "ollie",
            position: { top: "24%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha, good try Pip! Leave the head spinning to the owls!",
            words: [
              { word: "Haha,", clean: "haha", isVocab: false, time: 0.05 },
              { word: "good", clean: "good", isVocab: false, time: 0.75 },
              { word: "try", clean: "try", isVocab: true, emoji: "💪", meaning: "Attempt.", time: 0.95 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 1.25 },
              { word: "Leave", clean: "leave", isVocab: false, time: 1.85 },
              { word: "the", clean: "the", isVocab: false, time: 2.05 },
              { word: "head", clean: "head", isVocab: false, time: 2.20 },
              { word: "spinning", clean: "spinning", isVocab: true, emoji: "💫", meaning: "Rotating around.", time: 2.40 },
              { word: "to", clean: "to", isVocab: false, time: 2.85 },
              { word: "the", clean: "the", isVocab: false, time: 3.00 },
              { word: "owls!", clean: "owls", isVocab: true, emoji: "🦉", meaning: "Wise birds!", time: 3.15 }
            ]
          }
        ]
      }
    ],
    funFactCard: {
      animal: "Owl (Ollie)",
      factTitle: "Why Can Owls Turn Their Heads 270°?",
      summary: "Owls have tube-shaped eyes that cannot move inside their eye sockets. To look around, nature gave owls 14 neck vertebrae — twice as many as humans and cats! They can rotate their heads 270 degrees safely without pinching their blood vessels!",
      funQuestion: "Can you turn your head all the way behind you? No, humans only have 7 neck bones! 🦉✨"
    },
    quizQuestions: [
      {
        id: "ep4_q1",
        question: "How many neck bones do owls have to turn their heads?",
        audioPrompt: "How many neck bones do owls have?",
        options: [
          { audioId: "quiz_ep4_q1_opt1", text: "14 neck bones! 🦴", isCorrect: true, emoji: "🦴" },
          { audioId: "quiz_ep4_q1_opt2", text: "Only 2 neck bones! 2️⃣", isCorrect: false, emoji: "2️⃣" },
          { audioId: "quiz_ep4_q1_opt3", text: "100 neck bones! 💯", isCorrect: false, emoji: "💯" }
        ],
        explanation: "Brilliant! Owls have 14 neck bones, which is twice as many as humans!"
      },
      {
        id: "ep4_q2",
        question: "Why do owls need to turn their heads so far?",
        audioPrompt: "Why do owls need to turn their heads so far?",
        options: [
          { audioId: "quiz_ep4_q2_opt1", text: "Because their eyes are fixed and cannot move! 👀", isCorrect: true, emoji: "👀" },
          { audioId: "quiz_ep4_q2_opt2", text: "Because they like getting dizzy! 😵", isCorrect: false, emoji: "😵" }
        ],
        explanation: "That's right! Owl eyes are fixed in place, so they turn their heads to see!"
      },
      {
        id: "ep4_q3",
        question: "What happened to Pip when he tried the owl head twist?",
        audioPrompt: "What happened to Pip when he tried the twist?",
        options: [
          { audioId: "quiz_ep4_q3_opt1", text: "He got tangled up like a pretzel! 🥨", isCorrect: true, emoji: "🥨" },
          { audioId: "quiz_ep4_q3_opt2", text: "He turned into an owl! 🦉", isCorrect: false, emoji: "🦉" },
          { audioId: "quiz_ep4_q3_opt3", text: "He flew to the tree top! 🌲", isCorrect: false, emoji: "🌲" }
        ],
        explanation: "Haha, yes! Pip tied himself into a tangled pretzel cat!"
      }
    ]
  },

  barnaby_bat_sonar: {
    id: "barnaby_bat_sonar",
    title: "Barnaby's Sonar Radar!",
    subtitle: "How do bats 'see' with sound in the dark?",
    coverImage: "assets/illustrations/ep5_panel1.jpg",
    themeColor: "#6C5CE7",
    cefrLevel: "A1 / A2",
    targetVocab: ["echo", "cave", "radar", "bat", "dark", "sound", "bounce", "waves"],
    targetGrammar: [
      "It's so [adjective] in here!",
      "My sound clicks bounce back like a [noun].",
      "Found your [noun] behind that [noun]!"
    ],
    characters: {
      pip: {
        name: "Pip",
        role: "The Curious Cat",
        avatar: "assets/avatars/pip.jpg",
        color: "#FF9F43",
        sillyReaction: "Meow! I am so curious!"
      },
      dot: {
        name: "Dot",
        role: "The Smart Bunny",
        avatar: "assets/avatars/dot.jpg",
        color: "#54A0FF",
        sillyReaction: "Hop hop! Let's learn together!"
      },
      barnaby: {
        name: "Barnaby",
        role: "The Radar Bat",
        avatar: "assets/avatars/barnaby.jpg",
        color: "#6C5CE7",
        sillyReaction: "Squeak! Ping ping! My super ears can hear a mosquito flap its wings!"
      }
    },
    panels: [
      {
        panelIndex: 1,
        panelTitle: "Panel 1: The Dark Mystery",
        image: "assets/illustrations/ep5_panel1.jpg",
        altText: "Pip stumbling in a dark glowing crystal cave while Barnaby the baby bat swoops down gracefully.",
        narratorText: "Pip and Dot enter a dark crystal cave to find Dot's lost bell.",
        bubbles: [
          {
            id: "ep5_p1_b1",
            speaker: "pip",
            position: { top: "34%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Ouch! It's so dark in here! We need giant flashlights!",
            words: [
              { word: "Ouch!", clean: "ouch", isVocab: false, time: 0.05 },
              { word: "It's", clean: "its", isVocab: false, time: 0.70 },
              { word: "so", clean: "so", isVocab: false, time: 0.90 },
              { word: "dark", clean: "dark", isVocab: true, emoji: "🌑", meaning: "Without light.", time: 1.05 },
              { word: "in", clean: "in", isVocab: false, time: 1.35 },
              { word: "here!", clean: "here", isVocab: false, time: 1.50 },
              { word: "We", clean: "we", isVocab: false, time: 1.95 },
              { word: "need", clean: "need", isVocab: false, time: 2.10 },
              { word: "giant", clean: "giant", isVocab: true, emoji: "🐘", meaning: "Very large.", time: 2.30 },
              { word: "flashlights!", clean: "flashlights", isVocab: true, emoji: "🔦", meaning: "Electric torches that shine bright light!", time: 2.65 }
            ]
          },
          {
            id: "ep5_p1_b2",
            speaker: "dot",
            position: { top: "38%", left: "42%" },
            tailDirection: "bottom-left",
            text: "How does Barnaby fly so fast without bumping into cave walls?!",
            words: [
              { word: "How", clean: "how", isVocab: false, time: 0.05 },
              { word: "does", clean: "does", isVocab: false, time: 0.25 },
              { word: "Barnaby", clean: "barnaby", isVocab: false, time: 0.40 },
              { word: "fly", clean: "fly", isVocab: true, emoji: "🦇", meaning: "Move in air.", time: 0.85 },
              { word: "so", clean: "so", isVocab: false, time: 1.10 },
              { word: "fast", clean: "fast", isVocab: true, emoji: "⚡", meaning: "Quickly.", time: 1.25 },
              { word: "without", clean: "without", isVocab: false, time: 1.60 },
              { word: "bumping", clean: "bumping", isVocab: true, emoji: "💥", meaning: "Hitting into.", time: 1.85 },
              { word: "into", clean: "into", isVocab: false, time: 2.25 },
              { word: "cave", clean: "cave", isVocab: true, emoji: "🪨", meaning: "Hollow rock space.", time: 2.45 },
              { word: "walls?!", clean: "walls", isVocab: false, time: 2.75 }
            ]
          }
        ]
      },
      {
        panelIndex: 2,
        panelTitle: "Panel 2: The Echolocation Secret",
        image: "assets/illustrations/ep5_panel2.jpg",
        altText: "Barnaby the bat clicking with glowing blue sound waves expanding into an echo map, Dot watching in awe.",
        narratorText: "Barnaby demonstrates his superpower of echolocation.",
        bubbles: [
          {
            id: "ep5_p2_b1",
            speaker: "barnaby",
            position: { top: "24%", left: "26%" },
            tailDirection: "bottom-left",
            text: "I use Echolocation! My sound clicks bounce back to my ears like a 3D sound map!",
            words: [
              { word: "I", clean: "i", isVocab: false, time: 0.05 },
              { word: "use", clean: "use", isVocab: false, time: 0.20 },
              { word: "Echolocation!", clean: "echolocation", isVocab: true, emoji: "📡", meaning: "Seeing with sound waves!", time: 0.40 },
              { word: "My", clean: "my", isVocab: false, time: 1.45 },
              { word: "sound", clean: "sound", isVocab: true, emoji: "🔊", meaning: "Vibrations you hear.", time: 1.65 },
              { word: "clicks", clean: "clicks", isVocab: true, emoji: "🎙️", meaning: "Short tapping noises.", time: 1.95 },
              { word: "bounce", clean: "bounce", isVocab: true, emoji: "🏀", meaning: "Rebound off surfaces.", time: 2.30 },
              { word: "back", clean: "back", isVocab: false, time: 2.65 },
              { word: "to", clean: "to", isVocab: false, time: 2.85 },
              { word: "my", clean: "my", isVocab: false, time: 2.95 },
              { word: "ears", clean: "ears", isVocab: true, emoji: "👂", meaning: "Body parts for hearing.", time: 3.10 },
              { word: "like", clean: "like", isVocab: false, time: 3.45 },
              { word: "a", clean: "a", isVocab: false, time: 3.60 },
              { word: "3D", clean: "3d", isVocab: true, emoji: "🗺️", meaning: "Three-dimensional depth map.", time: 3.75 },
              { word: "sound", clean: "sound", isVocab: false, time: 4.15 },
              { word: "map!", clean: "map", isVocab: true, emoji: "🗺️", meaning: "Picture guide of area.", time: 4.35 }
            ]
          },
          {
            id: "ep5_p2_b2",
            speaker: "dot",
            position: { top: "30%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Wow! You can 'see' using sound waves!",
            words: [
              { word: "Wow!", clean: "wow", isVocab: false, time: 0.05 },
              { word: "You", clean: "you", isVocab: false, time: 0.70 },
              { word: "can", clean: "can", isVocab: false, time: 0.85 },
              { word: "'see'", clean: "see", isVocab: true, emoji: "👀", meaning: "Perceive environment.", time: 1.05 },
              { word: "using", clean: "using", isVocab: false, time: 1.35 },
              { word: "sound", clean: "sound", isVocab: true, emoji: "🔊", meaning: "Audio echoes.", time: 1.65 },
              { word: "waves!", clean: "waves", isVocab: true, emoji: "〰️", meaning: "Ripples moving through air.", time: 1.95 }
            ]
          }
        ]
      },
      {
        panelIndex: 3,
        panelTitle: "Panel 3: Pip's Clumsy Radar Test",
        image: "assets/illustrations/ep5_panel3.jpg",
        altText: "Pip putting giant cardboard ear cones on his head and shouting MEOW at the wall, Dot giggling.",
        narratorText: "Pip puts on giant paper cones to test cat echolocation!",
        bubbles: [
          {
            id: "ep5_p3_b1",
            speaker: "pip",
            position: { top: "22%", left: "18%" },
            tailDirection: "bottom-left",
            text: "MEOW! ECHOLOCATION! Did my sound find the toy bell?!",
            words: [
              { word: "MEOW!", clean: "meow", isVocab: false, time: 0.05 },
              { word: "ECHOLOCATION!", clean: "echolocation", isVocab: true, emoji: "📡", meaning: "Bat radar power!", time: 0.80 },
              { word: "Did", clean: "did", isVocab: false, time: 1.95 },
              { word: "my", clean: "my", isVocab: false, time: 2.15 },
              { word: "sound", clean: "sound", isVocab: false, time: 2.30 },
              { word: "find", clean: "find", isVocab: true, emoji: "🔍", meaning: "Discover.", time: 2.60 },
              { word: "the", clean: "the", isVocab: false, time: 2.85 },
              { word: "toy", clean: "toy", isVocab: true, emoji: "🧸", meaning: "Play thing.", time: 3.00 },
              { word: "bell?!", clean: "bell", isVocab: true, emoji: "🔔", meaning: "Shiny ringing object.", time: 3.25 }
            ]
          },
          {
            id: "ep5_p3_b2",
            speaker: "dot",
            position: { top: "26%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha! Shouting 'meow' just made the cave echo back 'MEOW'!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "Shouting", clean: "shouting", isVocab: true, emoji: "📢", meaning: "Yelling loudly.", time: 0.70 },
              { word: "'meow'", clean: "meow", isVocab: false, time: 1.15 },
              { word: "just", clean: "just", isVocab: false, time: 1.60 },
              { word: "made", clean: "made", isVocab: false, time: 1.80 },
              { word: "the", clean: "the", isVocab: false, time: 1.95 },
              { word: "cave", clean: "cave", isVocab: false, time: 2.10 },
              { word: "echo", clean: "echo", isVocab: true, emoji: "🗣️", meaning: "Sound bouncing back.", time: 2.35 },
              { word: "back", clean: "back", isVocab: false, time: 2.70 },
              { word: "'MEOW'!", clean: "meow", isVocab: false, time: 2.95 }
            ]
          }
        ]
      },
      {
        panelIndex: 4,
        panelTitle: "Panel 4: The Mystery Solved",
        image: "assets/illustrations/ep5_panel4.jpg",
        altText: "Barnaby hanging upside down from a crystal handing Dot her lost gold bell, Pip smiling happily.",
        narratorText: "Barnaby finds the shiny bell and saves the day!",
        bubbles: [
          {
            id: "ep5_p4_b1",
            speaker: "barnaby",
            position: { top: "18%", left: "22%" },
            tailDirection: "bottom-left",
            text: "Ping! Found your bell behind that big rock! Sound never lies!",
            words: [
              { word: "Ping!", clean: "ping", isVocab: false, time: 0.05 },
              { word: "Found", clean: "found", isVocab: true, emoji: "🎉", meaning: "Discovered.", time: 0.65 },
              { word: "your", clean: "your", isVocab: false, time: 0.95 },
              { word: "bell", clean: "bell", isVocab: true, emoji: "🔔", meaning: "Shiny toy bell.", time: 1.15 },
              { word: "behind", clean: "behind", isVocab: true, emoji: "⬅️", meaning: "At the back of.", time: 1.45 },
              { word: "that", clean: "that", isVocab: false, time: 1.75 },
              { word: "big", clean: "big", isVocab: false, time: 1.90 },
              { word: "rock!", clean: "rock", isVocab: true, emoji: "🪨", meaning: "Large cave stone.", time: 2.10 },
              { word: "Sound", clean: "sound", isVocab: false, time: 2.65 },
              { word: "never", clean: "never", isVocab: false, time: 2.95 },
              { word: "lies!", clean: "lies", isVocab: true, emoji: "✅", meaning: "Is always true!", time: 3.20 }
            ]
          },
          {
            id: "ep5_p4_b2",
            speaker: "pip",
            position: { top: "24%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Hooray for bat radar! Now let's echolocate some yummy fish snacks!",
            words: [
              { word: "Hooray", clean: "hooray", isVocab: false, time: 0.05 },
              { word: "for", clean: "for", isVocab: false, time: 0.65 },
              { word: "bat", clean: "bat", isVocab: false, time: 0.80 },
              { word: "radar!", clean: "radar", isVocab: true, emoji: "📡", meaning: "Sound detector.", time: 0.95 },
              { word: "Now", clean: "now", isVocab: false, time: 1.65 },
              { word: "let's", clean: "lets", isVocab: false, time: 1.85 },
              { word: "echolocate", clean: "echolocate", isVocab: true, emoji: "🔍", meaning: "Find with sound!", time: 2.10 },
              { word: "some", clean: "some", isVocab: false, time: 2.80 },
              { word: "yummy", clean: "yummy", isVocab: true, emoji: "😋", meaning: "Delicious.", time: 2.95 },
              { word: "fish", clean: "fish", isVocab: true, emoji: "🐟", meaning: "Pip's favorite snack!", time: 3.25 },
              { word: "snacks!", clean: "snacks", isVocab: true, emoji: "🍪", meaning: "Small bites of food.", time: 3.55 }
            ]
          }
        ]
      }
    ],
    funFactCard: {
      animal: "Bat (Barnaby)",
      factTitle: "How Do Bats 'See' in the Dark?",
      summary: "Bats use Echolocation! They emit high-pitched sound clicks through their mouth or nose. When these sound waves bounce off objects and return as echoes, the bat's super-sensitive ears calculate the exact size, distance, and shape of everything around them!",
      funQuestion: "Can you close your eyes and clap your hands in a tunnel? Hear the echo bounce right back! 🦇🔊"
    },
    quizQuestions: [
      {
        id: "ep5_q1",
        question: "What superpower does Barnaby the bat use to navigate dark caves?",
        audioPrompt: "What superpower does Barnaby the bat use?",
        options: [
          { audioId: "quiz_ep5_q1_opt1", text: "Echolocation with sound waves! 📡", isCorrect: true, emoji: "📡" },
          { audioId: "quiz_ep5_q1_opt2", text: "Giant night-vision goggles! 🥽", isCorrect: false, emoji: "🥽" },
          { audioId: "quiz_ep5_q1_opt3", text: "Glowing laser eyes! ⚡", isCorrect: false, emoji: "⚡" }
        ],
        explanation: "Awesome job! Bats use Echolocation to see with sound waves!"
      },
      {
        id: "ep5_q2",
        question: "How does Echolocation work for bats?",
        audioPrompt: "How does Echolocation work for bats?",
        options: [
          { audioId: "quiz_ep5_q2_opt1", text: "Sound clicks bounce back like an echo map! 🗺️", isCorrect: true, emoji: "🗺️" },
          { audioId: "quiz_ep5_q2_opt2", text: "Bats smell the rocks with their toes! 👣", isCorrect: false, emoji: "👣" }
        ],
        explanation: "Spot on! Sound clicks bounce off walls and objects back to the bat's ears!"
      },
      {
        id: "ep5_q3",
        question: "Where did Barnaby find Dot's lost toy bell?",
        audioPrompt: "Where did Barnaby find Dot's lost toy bell?",
        options: [
          { audioId: "quiz_ep5_q3_opt1", text: "Behind a big cave rock! 🪨", isCorrect: true, emoji: "🪨" },
          { audioId: "quiz_ep5_q3_opt2", text: "Under Pip's hat! 🎩", isCorrect: false, emoji: "🎩" },
          { audioId: "quiz_ep5_q3_opt3", text: "In a treasure chest! 💎", isCorrect: false, emoji: "💎" }
        ],
        explanation: "Super! Barnaby found the bell hidden behind a big rock!"
      }
    ]
  },

  twiggy_stick_prank: {
    id: "twiggy_stick_prank",
    title: "Twiggy's Camouflage Prank!",
    subtitle: "Is that a real wooden stick or a living creature?",
    coverImage: "assets/illustrations/ep6_panel1.jpg",
    themeColor: "#00B894",
    cefrLevel: "A1 / A2",
    targetVocab: ["camouflage", "mimic", "sway", "stick", "magic", "bush", "alive", "breeze"],
    targetGrammar: [
      "I found a [adjective] stick to [verb]!",
      "The [noun] is alive with legs!",
      "I mimic [noun] so birds [verb]!"
    ],
    characters: {
      pip: {
        name: "Pip",
        role: "The Curious Cat",
        avatar: "assets/avatars/pip.jpg",
        color: "#FF9F43",
        sillyReaction: "Meow! I am so curious!"
      },
      dot: {
        name: "Dot",
        role: "The Smart Bunny",
        avatar: "assets/avatars/dot.jpg",
        color: "#54A0FF",
        sillyReaction: "Hop hop! Let's learn together!"
      },
      twiggy: {
        name: "Twiggy",
        role: "The Stick Insect",
        avatar: "assets/avatars/twiggy.jpg",
        color: "#00B894",
        sillyReaction: "Sway sway! I am one with the green garden!"
      }
    },
    panels: [
      {
        panelIndex: 1,
        panelTitle: "Panel 1: The 'Magic Stick'",
        image: "assets/illustrations/ep6_panel1.jpg",
        altText: "Pip in a flower garden holding up a brown twig like a magic wand pretending to cast spells.",
        narratorText: "Pip finds what looks like a magic wooden wand in the garden.",
        bubbles: [
          {
            id: "ep6_p1_b1",
            speaker: "pip",
            position: { top: "34%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Look, Dot! I found a magic wooden stick to cast spells!",
            words: [
              { word: "Look,", clean: "look", isVocab: true, emoji: "👀", meaning: "See with eyes.", time: 0.05 },
              { word: "Dot!", clean: "dot", isVocab: false, time: 0.65 },
              { word: "I", clean: "i", isVocab: false, time: 1.15 },
              { word: "found", clean: "found", isVocab: true, emoji: "🔍", meaning: "Discovered.", time: 1.35 },
              { word: "a", clean: "a", isVocab: false, time: 1.65 },
              { word: "magic", clean: "magic", isVocab: true, emoji: "🪄", meaning: "Mystical powers.", time: 1.80 },
              { word: "wooden", clean: "wooden", isVocab: true, emoji: "🪵", meaning: "Made of tree wood.", time: 2.15 },
              { word: "stick", clean: "stick", isVocab: true, emoji: "🌿", meaning: "Tree twig.", time: 2.50 },
              { word: "to", clean: "to", isVocab: false, time: 2.80 },
              { word: "cast", clean: "cast", isVocab: true, emoji: "✨", meaning: "Make magic happen.", time: 2.95 },
              { word: "spells!", clean: "spells", isVocab: true, emoji: "🪄", meaning: "Magical tricks!", time: 3.25 }
            ]
          },
          {
            id: "ep6_p1_b2",
            speaker: "dot",
            position: { top: "38%", left: "42%" },
            tailDirection: "bottom-left",
            text: "Abracadabra! Make a yummy fish appear!",
            words: [
              { word: "Abracadabra!", clean: "abracadabra", isVocab: true, emoji: "🪄", meaning: "Magic spell word!", time: 0.05 },
              { word: "Make", clean: "make", isVocab: false, time: 1.15 },
              { word: "a", clean: "a", isVocab: false, time: 1.40 },
              { word: "yummy", clean: "yummy", isVocab: true, emoji: "😋", meaning: "Delicious.", time: 1.55 },
              { word: "fish", clean: "fish", isVocab: true, emoji: "🐟", meaning: "Aquatic animal.", time: 1.85 },
              { word: "appear!", clean: "appear", isVocab: true, emoji: "✨", meaning: "Show up like magic!", time: 2.15 }
            ]
          }
        ]
      },
      {
        panelIndex: 2,
        panelTitle: "Panel 2: The Stick Wakes Up!",
        image: "assets/illustrations/ep6_panel2.jpg",
        altText: "The twig standing up on 6 tiny legs with cute eyes, waving hello to a shocked Pip.",
        narratorText: "The magic stick suddenly sprouts legs and speaks!",
        bubbles: [
          {
            id: "ep6_p2_b1",
            speaker: "twiggy",
            position: { top: "24%", left: "26%" },
            tailDirection: "bottom-left",
            text: "Yawn! Excuse me, kitty! I am not a stick, I am Twiggy the Stick Insect!",
            words: [
              { word: "Yawn!", clean: "yawn", isVocab: false, time: 0.05 },
              { word: "Excuse", clean: "excuse", isVocab: false, time: 0.85 },
              { word: "me,", clean: "me", isVocab: false, time: 1.15 },
              { word: "kitty!", clean: "kitty", isVocab: false, time: 1.35 },
              { word: "I", clean: "i", isVocab: false, time: 1.95 },
              { word: "am", clean: "am", isVocab: false, time: 2.15 },
              { word: "not", clean: "not", isVocab: false, time: 2.35 },
              { word: "a", clean: "a", isVocab: false, time: 2.50 },
              { word: "stick,", clean: "stick", isVocab: false, time: 2.65 },
              { word: "I", clean: "i", isVocab: false, time: 3.10 },
              { word: "am", clean: "am", isVocab: false, time: 3.25 },
              { word: "Twiggy", clean: "twiggy", isVocab: false, time: 3.45 },
              { word: "the", clean: "the", isVocab: false, time: 3.75 },
              { word: "Stick", clean: "stick", isVocab: true, emoji: "🌿", meaning: "Twig shaped.", time: 3.90 },
              { word: "Insect!", clean: "insect", isVocab: true, emoji: "🦗", meaning: "Six-legged small creature!", time: 4.15 }
            ]
          },
          {
            id: "ep6_p2_b2",
            speaker: "pip",
            position: { top: "30%", left: "68%" },
            tailDirection: "bottom-right",
            text: "AHHH! The stick is alive! It has legs and big eyes!",
            words: [
              { word: "AHHH!", clean: "ahhh", isVocab: false, time: 0.05 },
              { word: "The", clean: "the", isVocab: false, time: 0.95 },
              { word: "stick", clean: "stick", isVocab: false, time: 1.10 },
              { word: "is", clean: "is", isVocab: false, time: 1.30 },
              { word: "alive!", clean: "alive", isVocab: true, emoji: "🌱", meaning: "Living and moving!", time: 1.45 },
              { word: "It", clean: "it", isVocab: false, time: 2.10 },
              { word: "has", clean: "has", isVocab: false, time: 2.25 },
              { word: "legs", clean: "legs", isVocab: true, emoji: "🦵", meaning: "Limbs for walking.", time: 2.45 },
              { word: "and", clean: "and", isVocab: false, time: 2.80 },
              { word: "big", clean: "big", isVocab: false, time: 2.95 },
              { word: "eyes!", clean: "eyes", isVocab: true, emoji: "👀", meaning: "Visual organs.", time: 3.15 }
            ]
          }
        ]
      },
      {
        panelIndex: 3,
        panelTitle: "Panel 3: The Swaying Camouflage Dance",
        image: "assets/illustrations/ep6_panel3.jpg",
        altText: "Twiggy rocking gently on a branch like a leaf in the wind showing her camouflage, Dot clapping.",
        narratorText: "Twiggy sways in the wind to show her perfect camouflage.",
        bubbles: [
          {
            id: "ep6_p3_b1",
            speaker: "twiggy",
            position: { top: "22%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Haha! I mimic tree branches and sway in the wind so hungry birds ignore me!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "I", clean: "i", isVocab: false, time: 0.65 },
              { word: "mimic", clean: "mimic", isVocab: true, emoji: "🎭", meaning: "Copy the appearance.", time: 0.85 },
              { word: "tree", clean: "tree", isVocab: false, time: 1.25 },
              { word: "branches", clean: "branches", isVocab: true, emoji: "🌳", meaning: "Woody tree limbs.", time: 1.45 },
              { word: "and", clean: "and", isVocab: false, time: 1.95 },
              { word: "sway", clean: "sway", isVocab: true, emoji: "〰️", meaning: "Rock gently side to side.", time: 2.15 },
              { word: "in", clean: "in", isVocab: false, time: 2.50 },
              { word: "the", clean: "the", isVocab: false, time: 2.65 },
              { word: "wind", clean: "wind", isVocab: true, emoji: "💨", meaning: "Moving air breeze.", time: 2.80 },
              { word: "so", clean: "so", isVocab: false, time: 3.20 },
              { word: "hungry", clean: "hungry", isVocab: true, emoji: "😋", meaning: "Needing food.", time: 3.40 },
              { word: "birds", clean: "birds", isVocab: true, emoji: "🐦", meaning: "Feathered animals.", time: 3.75 },
              { word: "ignore", clean: "ignore", isVocab: true, emoji: "🙈", meaning: "Do not notice.", time: 4.15 },
              { word: "me!", clean: "me", isVocab: false, time: 4.55 }
            ]
          },
          {
            id: "ep6_p3_b2",
            speaker: "dot",
            position: { top: "26%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Your camouflage is totally invisible!",
            words: [
              { word: "Your", clean: "your", isVocab: false, time: 0.05 },
              { word: "camouflage", clean: "camouflage", isVocab: true, emoji: "🌿", meaning: "Natural disguise in nature.", time: 0.30 },
              { word: "is", clean: "is", isVocab: false, time: 1.05 },
              { word: "totally", clean: "totally", isVocab: false, time: 1.25 },
              { word: "invisible!", clean: "invisible", isVocab: true, emoji: "👻", meaning: "Cannot be seen!", time: 1.55 }
            ]
          }
        ]
      },
      {
        panelIndex: 4,
        panelTitle: "Panel 4: Pip's Wagging Tail Bush",
        image: "assets/illustrations/ep6_panel4.jpg",
        altText: "Pip standing stiff with leaves on ears trying to camouflage, but his orange tail is wagging happily, everyone laughing.",
        narratorText: "Pip tries to hide as a garden bush, but his tail gives him away!",
        bubbles: [
          {
            id: "ep6_p4_b1",
            speaker: "pip",
            position: { top: "18%", left: "22%" },
            tailDirection: "bottom-left",
            text: "Look, I am a bush now! You can't see me, Twiggy!",
            words: [
              { word: "Look,", clean: "look", isVocab: false, time: 0.05 },
              { word: "I", clean: "i", isVocab: false, time: 0.65 },
              { word: "am", clean: "am", isVocab: false, time: 0.85 },
              { word: "a", clean: "a", isVocab: false, time: 1.05 },
              { word: "bush", clean: "bush", isVocab: true, emoji: "🌳", meaning: "Dense green garden shrub.", time: 1.20 },
              { word: "now!", clean: "now", isVocab: false, time: 1.65 },
              { word: "You", clean: "you", isVocab: false, time: 2.15 },
              { word: "can't", clean: "cant", isVocab: false, time: 2.35 },
              { word: "see", clean: "see", isVocab: true, emoji: "👀", meaning: "Spot with eyes.", time: 2.55 },
              { word: "me,", clean: "me", isVocab: false, time: 2.85 },
              { word: "Twiggy!", clean: "twiggy", isVocab: false, time: 3.05 }
            ]
          },
          {
            id: "ep6_p4_b2",
            speaker: "twiggy",
            position: { top: "24%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha, silly Pip! Your fluffy orange tail is still wagging!",
            words: [
              { word: "Haha,", clean: "haha", isVocab: false, time: 0.05 },
              { word: "silly", clean: "silly", isVocab: true, emoji: "🤪", meaning: "Playful and funny.", time: 0.65 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 1.10 },
              { word: "Your", clean: "your", isVocab: false, time: 1.65 },
              { word: "fluffy", clean: "fluffy", isVocab: true, emoji: "☁️", meaning: "Soft and puffy.", time: 1.85 },
              { word: "orange", clean: "orange", isVocab: false, time: 2.20 },
              { word: "tail", clean: "tail", isVocab: true, emoji: "🐈", meaning: "Cat's back tail.", time: 2.55 },
              { word: "is", clean: "is", isVocab: false, time: 2.85 },
              { word: "still", clean: "still", isVocab: false, time: 3.00 },
              { word: "wagging!", clean: "wagging", isVocab: true, emoji: "🐕", meaning: "Moving back and forth with joy!", time: 3.25 }
            ]
          }
        ]
      }
    ],
    funFactCard: {
      animal: "Stick Insect (Twiggy)",
      factTitle: "Why Do Stick Insects Look Like Twigs?",
      summary: "Stick insects are the ultimate masters of camouflage! Their bodies, legs, and colors match tree branches and green leaves. When the wind blows, they gently rock back and forth to mimic swaying twigs so birds and predators can't spot them!",
      funQuestion: "Can you freeze completely still like a stick insect? Watch out, don't let your tail wag! 🌿🦗"
    },
    quizQuestions: [
      {
        id: "ep6_q1",
        question: "Why do stick insects look exactly like wooden tree twigs?",
        audioPrompt: "Why do stick insects look like tree twigs?",
        options: [
          { audioId: "quiz_ep6_q1_opt1", text: "To hide from birds using plant camouflage! 🌿", isCorrect: true, emoji: "🌿" },
          { audioId: "quiz_ep6_q1_opt2", text: "Because they are made of real wood! 🪵", isCorrect: false, emoji: "🪵" },
          { audioId: "quiz_ep6_q1_opt3", text: "To pretend to be wizard wands! 🪄", isCorrect: false, emoji: "🪄" }
        ],
        explanation: "Fantastic! Their camouflage helps them hide from hungry birds!"
      },
      {
        id: "ep6_q2",
        question: "What special dance do stick insects do in the breeze?",
        audioPrompt: "What special dance do stick insects do in the breeze?",
        options: [
          { audioId: "quiz_ep6_q2_opt1", text: "They rock and sway like tree branches! 🌳", isCorrect: true, emoji: "🌳" },
          { audioId: "quiz_ep6_q2_opt2", text: "They do a backflip! 🤸", isCorrect: false, emoji: "🤸" }
        ],
        explanation: "That's right! They sway back and forth just like real twigs in the wind!"
      },
      {
        id: "ep6_q3",
        question: "Why couldn't Pip hide successfully as a garden bush?",
        audioPrompt: "Why couldn't Pip hide as a garden bush?",
        options: [
          { audioId: "quiz_ep6_q3_opt1", text: "Because his fluffy orange tail was wagging! 🐈", isCorrect: true, emoji: "🐈" },
          { audioId: "quiz_ep6_q3_opt2", text: "Because he sneezed too loud! 🤧", isCorrect: false, emoji: "🤧" },
          { audioId: "quiz_ep6_q3_opt3", text: "Because he was eating popcorn! 🍿", isCorrect: false, emoji: "🍿" }
        ],
        explanation: "Haha, yes! Pip's fluffy bright orange tail was wagging happily!"
      }
    ]
  },

  sid_slow_secret: {
    id: "sid_slow_secret",
    title: "Sid's Slow-Motion Secret!",
    subtitle: "Why do sloths move so slowly in the rainforest?",
    coverImage: "assets/illustrations/ep7_panel1.jpg",
    themeColor: "#10AC84",
    cefrLevel: "A1 / A2",
    targetVocab: ["energy", "sloth", "leaves", "sprint", "slow", "fast", "nap", "hurry"],
    targetGrammar: [
      "Wake up! Time for [noun]!",
      "Moving slow saves my [noun].",
      "Naps are the best [noun]!"
    ],
    characters: {
      pip: {
        name: "Pip",
        role: "The Energetic Coach Cat",
        avatar: "assets/avatars/pip.jpg",
        color: "#FF9F43",
        sillyReaction: "Meow! I am so curious!"
      },
      dot: {
        name: "Dot",
        role: "The Smart Bunny",
        avatar: "assets/avatars/dot.jpg",
        color: "#54A0FF",
        sillyReaction: "Hop hop! Let's learn together!"
      },
      sid: {
        name: "Sid",
        role: "The Chill Sloth",
        avatar: "assets/avatars/sid.jpg",
        color: "#10AC84",
        sillyReaction: "Yawn... Slow down, take a deep breath, and enjoy the sunny leaves!"
      }
    },
    panels: [
      {
        panelIndex: 1,
        panelTitle: "Panel 1: Coach Pip's Morning Sprints",
        image: "assets/illustrations/ep7_panel1.jpg",
        altText: "Pip wearing a coach whistle holding a stopwatch jumping with energy trying to coach a sleepy upside down sloth Sid.",
        narratorText: "Coach Pip tries to train Sid the sloth for morning sports!",
        bubbles: [
          {
            id: "ep7_p1_b1",
            speaker: "pip",
            position: { top: "34%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Wake up, Sid! Coach Pip is here! Time for fast kitty sprints!",
            words: [
              { word: "Wake", clean: "wake", isVocab: true, emoji: "⏰", meaning: "Stop sleeping.", time: 0.05 },
              { word: "up,", clean: "up", isVocab: false, time: 0.35 },
              { word: "Sid!", clean: "sid", isVocab: false, time: 0.55 },
              { word: "Coach", clean: "coach", isVocab: true, emoji: "🧢", meaning: "Sports trainer teacher.", time: 1.15 },
              { word: "Pip", clean: "pip", isVocab: false, time: 1.65 },
              { word: "is", clean: "is", isVocab: false, time: 1.85 },
              { word: "here!", clean: "here", isVocab: false, time: 2.05 },
              { word: "Time", clean: "time", isVocab: false, time: 2.55 },
              { word: "for", clean: "for", isVocab: false, time: 2.75 },
              { word: "fast", clean: "fast", isVocab: true, emoji: "⚡", meaning: "Quick speed.", time: 2.90 },
              { word: "kitty", clean: "kitty", isVocab: false, time: 3.25 },
              { word: "sprints!", clean: "sprints", isVocab: true, emoji: "🏃", meaning: "Super fast short runs!", time: 3.55 }
            ]
          },
          {
            id: "ep7_p1_b2",
            speaker: "dot",
            position: { top: "38%", left: "42%" },
            tailDirection: "bottom-left",
            text: "Pip, I think Sid is enjoying his morning nap!",
            words: [
              { word: "Pip,", clean: "pip", isVocab: false, time: 0.05 },
              { word: "I", clean: "i", isVocab: false, time: 0.65 },
              { word: "think", clean: "think", isVocab: false, time: 0.80 },
              { word: "Sid", clean: "sid", isVocab: false, time: 1.05 },
              { word: "is", clean: "is", isVocab: false, time: 1.35 },
              { word: "enjoying", clean: "enjoying", isVocab: true, emoji: "😊", meaning: "Having a good time.", time: 1.55 },
              { word: "his", clean: "his", isVocab: false, time: 2.00 },
              { word: "morning", clean: "morning", isVocab: true, emoji: "🌅", meaning: "Early start of the day.", time: 2.20 },
              { word: "nap!", clean: "nap", isVocab: true, emoji: "💤", meaning: "Short cozy sleep.", time: 2.65 }
            ]
          }
        ]
      },
      {
        panelIndex: 2,
        panelTitle: "Panel 2: The Energy Secret",
        image: "assets/illustrations/ep7_panel2.jpg",
        altText: "Sid chewing one green leaf peacefully with sparkles around him explaining slow metabolism to Dot.",
        narratorText: "Sid explains why moving slowly is a clever survival trick.",
        bubbles: [
          {
            id: "ep7_p2_b1",
            speaker: "sid",
            position: { top: "24%", left: "26%" },
            tailDirection: "bottom-left",
            text: "Yawn... No rushing, Coach Pip! Leaves give very little energy, so moving slowly saves my life!",
            words: [
              { word: "Yawn...", clean: "yawn", isVocab: false, time: 0.05 },
              { word: "No", clean: "no", isVocab: false, time: 1.15 },
              { word: "rushing,", clean: "rushing", isVocab: true, emoji: "⏳", meaning: "Hurry up.", time: 1.45 },
              { word: "Coach", clean: "coach", isVocab: false, time: 2.15 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 2.60 },
              { word: "Leaves", clean: "leaves", isVocab: true, emoji: "🍃", meaning: "Tree green food.", time: 3.40 },
              { word: "give", clean: "give", isVocab: false, time: 4.10 },
              { word: "very", clean: "very", isVocab: false, time: 4.45 },
              { word: "little", clean: "little", isVocab: false, time: 4.85 },
              { word: "energy,", clean: "energy", isVocab: true, emoji: "⚡", meaning: "Power to move.", time: 5.25 },
              { word: "so", clean: "so", isVocab: false, time: 6.10 },
              { word: "moving", clean: "moving", isVocab: false, time: 6.45 },
              { word: "slowly", clean: "slowly", isVocab: true, emoji: "🦥", meaning: "At a gentle calm pace.", time: 6.95 },
              { word: "saves", clean: "saves", isVocab: true, emoji: "🛡️", meaning: "Protects.", time: 7.75 },
              { word: "my", clean: "my", isVocab: false, time: 8.20 },
              { word: "life!", clean: "life", isVocab: true, emoji: "💚", meaning: "Living well.", time: 8.55 }
            ]
          },
          {
            id: "ep7_p2_b2",
            speaker: "dot",
            position: { top: "30%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Wow! Being slow is your survival superpower!",
            words: [
              { word: "Wow!", clean: "wow", isVocab: false, time: 0.05 },
              { word: "Being", clean: "being", isVocab: false, time: 0.65 },
              { word: "slow", clean: "slow", isVocab: true, emoji: "🦥", meaning: "Not fast.", time: 0.90 },
              { word: "is", clean: "is", isVocab: false, time: 1.30 },
              { word: "your", clean: "your", isVocab: false, time: 1.45 },
              { word: "survival", clean: "survival", isVocab: true, emoji: "🌟", meaning: "Staying alive and safe.", time: 1.65 },
              { word: "superpower!", clean: "superpower", isVocab: true, emoji: "🦸", meaning: "Special amazing ability!", time: 2.25 }
            ]
          }
        ]
      },
      {
        panelIndex: 3,
        panelTitle: "Panel 3: Pip's Clumsy Slow-Motion Test",
        image: "assets/illustrations/ep7_panel3.jpg",
        altText: "Pip hanging upside down from a branch with shaking paws slipping into a soft pile of green leaves.",
        narratorText: "Pip tries to hang like a sloth and slips into the leaves!",
        bubbles: [
          {
            id: "ep7_p3_b1",
            speaker: "pip",
            position: { top: "22%", left: "18%" },
            tailDirection: "bottom-left",
            text: "Look at me! I am moving in ultra slow motion... Whoa, my paws slipped!",
            words: [
              { word: "Look", clean: "look", isVocab: false, time: 0.05 },
              { word: "at", clean: "at", isVocab: false, time: 0.25 },
              { word: "me!", clean: "me", isVocab: false, time: 0.40 },
              { word: "I", clean: "i", isVocab: false, time: 0.95 },
              { word: "am", clean: "am", isVocab: false, time: 1.10 },
              { word: "moving", clean: "moving", isVocab: false, time: 1.25 },
              { word: "in", clean: "in", isVocab: false, time: 1.60 },
              { word: "ultra", clean: "ultra", isVocab: true, emoji: "🚀", meaning: "Extremely.", time: 1.80 },
              { word: "slow", clean: "slow", isVocab: false, time: 2.15 },
              { word: "motion...", clean: "motion", isVocab: true, emoji: "🎥", meaning: "Movement.", time: 2.50 },
              { word: "Whoa,", clean: "whoa", isVocab: false, time: 3.35 },
              { word: "my", clean: "my", isVocab: false, time: 3.85 },
              { word: "paws", clean: "paws", isVocab: true, emoji: "🐾", meaning: "Cat feet.", time: 4.05 },
              { word: "slipped!", clean: "slipped", isVocab: true, emoji: "🍌", meaning: "Lost grip and fell.", time: 4.45 }
            ]
          },
          {
            id: "ep7_p3_b2",
            speaker: "dot",
            position: { top: "26%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Haha! Pip, hanging like a sloth made you land in a soft leaf bed!",
            words: [
              { word: "Haha!", clean: "haha", isVocab: false, time: 0.05 },
              { word: "Pip,", clean: "pip", isVocab: false, time: 0.65 },
              { word: "hanging", clean: "hanging", isVocab: true, emoji: "🐒", meaning: "Suspended from above.", time: 1.10 },
              { word: "like", clean: "like", isVocab: false, time: 1.45 },
              { word: "a", clean: "a", isVocab: false, time: 1.60 },
              { word: "sloth", clean: "sloth", isVocab: false, time: 1.75 },
              { word: "made", clean: "made", isVocab: false, time: 2.15 },
              { word: "you", clean: "you", isVocab: false, time: 2.30 },
              { word: "land", clean: "land", isVocab: true, emoji: "🛬", meaning: "Come down to rest.", time: 2.50 },
              { word: "in", clean: "in", isVocab: false, time: 2.80 },
              { word: "a", clean: "a", isVocab: false, time: 2.90 },
              { word: "soft", clean: "soft", isVocab: true, emoji: "🧸", meaning: "Cushioned and gentle.", time: 3.05 },
              { word: "leaf", clean: "leaf", isVocab: false, time: 3.45 },
              { word: "bed!", clean: "bed", isVocab: true, emoji: "🛏️", meaning: "Cozy sleeping place.", time: 3.75 }
            ]
          }
        ]
      },
      {
        panelIndex: 4,
        panelTitle: "Panel 4: The Cozy Afternoon Nap",
        image: "assets/illustrations/ep7_panel4.jpg",
        altText: "Pip, Dot, and Sid all curled up together taking a cozy peaceful nap on a sunny mossy tree branch in the rainforest.",
        narratorText: "Coach Pip retires and joins Sid for a cozy rainforest nap!",
        bubbles: [
          {
            id: "ep7_p4_b1",
            speaker: "pip",
            position: { top: "18%", left: "22%" },
            tailDirection: "bottom-left",
            text: "Zzz... Actually, this cozy leaf bed is nice. I am a sleepy sloth now!",
            words: [
              { word: "Zzz...", clean: "zzz", isVocab: false, time: 0.05 },
              { word: "Actually,", clean: "actually", isVocab: false, time: 0.95 },
              { word: "this", clean: "this", isVocab: false, time: 1.45 },
              { word: "cozy", clean: "cozy", isVocab: true, emoji: "🛋️", meaning: "Warm and comfortable.", time: 1.65 },
              { word: "leaf", clean: "leaf", isVocab: false, time: 2.05 },
              { word: "bed", clean: "bed", isVocab: false, time: 2.30 },
              { word: "is", clean: "is", isVocab: false, time: 2.55 },
              { word: "nice.", clean: "nice", isVocab: false, time: 2.75 },
              { word: "I", clean: "i", isVocab: false, time: 3.35 },
              { word: "am", clean: "am", isVocab: false, time: 3.50 },
              { word: "a", clean: "a", isVocab: false, time: 3.65 },
              { word: "sleepy", clean: "sleepy", isVocab: true, emoji: "🥱", meaning: "Ready for sleep.", time: 3.80 },
              { word: "sloth", clean: "sloth", isVocab: false, time: 4.25 },
              { word: "now!", clean: "now", isVocab: false, time: 4.65 }
            ]
          },
          {
            id: "ep7_p4_b2",
            speaker: "sid",
            position: { top: "24%", left: "68%" },
            tailDirection: "bottom-right",
            text: "Welcome to the slow club, Pip! Naps are the best medicine!",
            words: [
              { word: "Welcome", clean: "welcome", isVocab: true, emoji: "🤝", meaning: "Glad you arrived.", time: 0.05 },
              { word: "to", clean: "to", isVocab: false, time: 0.65 },
              { word: "the", clean: "the", isVocab: false, time: 0.85 },
              { word: "slow", clean: "slow", isVocab: false, time: 1.10 },
              { word: "club,", clean: "club", isVocab: true, emoji: "🎪", meaning: "Group of friends.", time: 1.55 },
              { word: "Pip!", clean: "pip", isVocab: false, time: 2.15 },
              { word: "Naps", clean: "naps", isVocab: true, emoji: "💤", meaning: "Short rests.", time: 2.95 },
              { word: "are", clean: "are", isVocab: false, time: 3.55 },
              { word: "the", clean: "the", isVocab: false, time: 3.80 },
              { word: "best", clean: "best", isVocab: true, emoji: "🏆", meaning: "Number one.", time: 4.05 },
              { word: "medicine!", clean: "medicine", isVocab: true, emoji: "💊", meaning: "Healing care.", time: 4.55 }
            ]
          }
        ]
      }
    ],
    funFactCard: {
      animal: "Sloth (Sid)",
      factTitle: "Why Do Sloths Move So Slowly?",
      summary: "Sloths have the slowest metabolism of any mammal on Earth! They eat tough rainforest leaves that provide very few calories and take up to 30 days to digest. Moving slowly saves their energy and makes them almost invisible to predators in the treetops!",
      funQuestion: "Can you yawn and stretch like Sid the sloth? Slow down and enjoy the sunny day! 🦥🍃"
    },
    quizQuestions: [
      {
        id: "ep7_q1",
        question: "Why do sloths move so slowly in the rainforest?",
        audioPrompt: "Why do sloths move so slowly in the rainforest?",
        options: [
          { audioId: "quiz_ep7_q1_opt1", text: "To save energy on their healthy leaf diet! 🍃", isCorrect: true, emoji: "🍃" },
          { audioId: "quiz_ep7_q1_opt2", text: "Because their batteries ran out! 🔋", isCorrect: false, emoji: "🔋" },
          { audioId: "quiz_ep7_q1_opt3", text: "Because they are wearing heavy boots! 🥾", isCorrect: false, emoji: "🥾" }
        ],
        explanation: "Super job! Sloths eat leaves with low energy, so moving slowly saves their energy!"
      },
      {
        id: "ep7_q2",
        question: "How long can it take for a sloth to digest a single leaf meal?",
        audioPrompt: "How long can it take for a sloth to digest a leaf meal?",
        options: [
          { audioId: "quiz_ep7_q2_opt1", text: "Up to thirty whole days! 🗓️", isCorrect: true, emoji: "🗓️" },
          { audioId: "quiz_ep7_q2_opt2", text: "Only five seconds! ⏱️", isCorrect: false, emoji: "⏱️" }
        ],
        explanation: "Amazing fact! A sloth's stomach can take up to thirty days to digest leaves!"
      },
      {
        id: "ep7_q3",
        question: "What did Coach Pip do after trying to move like a sloth?",
        audioPrompt: "What did Coach Pip do after trying to move like a sloth?",
        options: [
          { audioId: "quiz_ep7_q3_opt1", text: "He took a cozy nap in the leaves! 💤", isCorrect: true, emoji: "💤" },
          { audioId: "quiz_ep7_q3_opt2", text: "He ran a marathon! 🏃", isCorrect: false, emoji: "🏃" },
          { audioId: "quiz_ep7_q3_opt3", text: "He cooked pizza! 🍕", isCorrect: false, emoji: "🍕" }
        ],
        explanation: "Haha, that's right! Pip fell asleep taking a cozy afternoon nap with Sid!"
      }
    ]
  }
};




