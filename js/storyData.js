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
  }
};
