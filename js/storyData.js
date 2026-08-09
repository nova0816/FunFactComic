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
  }
};


