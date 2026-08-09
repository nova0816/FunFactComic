import asyncio
import json
import os
import edge_tts

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "..", "assets", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

VOICE_MAP = {
    "pip": {
        "voice": "en-US-AnaNeural",
        "rate": "+6%",
        "pitch": "+14Hz"
    },
    "dot": {
        "voice": "en-GB-MaisieNeural",
        "rate": "-2%",
        "pitch": "+6Hz"
    },
    "fiona": {
        "voice": "en-IE-EmilyNeural",
        "rate": "-1%",
        "pitch": "+8Hz"
    },
    "cammy": {
        "voice": "en-CA-LiamNeural",
        "rate": "+2%",
        "pitch": "+6Hz"
    },
    "percy": {
        "voice": "en-GB-RyanNeural",
        "rate": "+4%",
        "pitch": "+8Hz"
    },
    "ollie": {
        "voice": "en-GB-ThomasNeural",
        "rate": "+1%",
        "pitch": "+6Hz"
    },
    "barnaby": {
        "voice": "en-US-AndrewMultilingualNeural",
        "rate": "+4%",
        "pitch": "+10Hz"
    },
    "twiggy": {
        "voice": "en-AU-NatashaNeural",
        "rate": "+2%",
        "pitch": "+10Hz"
    },
    "sid": {
        "voice": "en-CA-LiamNeural",
        "rate": "-12%",
        "pitch": "-2Hz"
    },
    "bella": {
        "voice": "en-IE-EmilyNeural",
        "rate": "+4%",
        "pitch": "+12Hz"
    },
    "narrator": {
        "voice": "en-GB-MaisieNeural",
        "rate": "-3%",
        "pitch": "+4Hz"
    }
}

DIALOGUES = [
    # ==========================================
    # EPISODE 1: Fiona's Pink Secret (Flamingo)
    # ==========================================
    {"id": "p1_b1", "speaker": "pip", "text": "Hi Fiona! Why are you so bright pink?"},
    {"id": "p1_b2", "speaker": "dot", "text": "You look like sweet cotton candy!"},
    {"id": "p2_b1", "speaker": "fiona", "text": "I am pink because I eat yummy pink shrimp!"},
    {"id": "p2_b2", "speaker": "pip", "text": "Wait! What you eat changes your color?!"},
    {"id": "p3_b1", "speaker": "pip", "text": "Oh no! If I eat green broccoli, will I turn green?!"},
    {"id": "p3_b2", "speaker": "dot", "text": "Haha! Pip, you are an orange cat!"},
    {"id": "p4_b1", "speaker": "pip", "text": "Roar! Look at me! I am the Green Monster Cat!"},
    {"id": "p4_b2", "speaker": "dot", "text": "Haha, silly Pip! Broccoli just makes you strong!"},
    {"id": "emote_pip", "speaker": "pip", "text": "Meow! I am so curious!"},
    {"id": "emote_dot", "speaker": "dot", "text": "Hop hop! Let's learn together!"},
    {"id": "emote_fiona", "speaker": "fiona", "text": "Flap flap! Pink is my favorite color!"},
    {"id": "fact_fiona", "speaker": "dot", "text": "Why Are Flamingos Pink? Flamingo chicks are actually born with grey and white feathers! They turn bright pink because their favorite food, pink shrimp and red algae, contains a natural pink dye called carotenoids."},
    {"id": "quiz_q1", "speaker": "dot", "text": "Why is Fiona the flamingo bright pink?"},
    {"id": "quiz_q1_correct", "speaker": "dot", "text": "Super job! Flamingos eat lots of pink shrimp, which turns their feathers pink!"},
    {"id": "quiz_q2", "speaker": "dot", "text": "If Pip the cat eats green broccoli, will he turn green?"},
    {"id": "quiz_q2_correct", "speaker": "dot", "text": "That's right! Pip will always be an orange cat, but broccoli makes him healthy!"},
    {"id": "quiz_q3", "speaker": "dot", "text": "What does eating healthy broccoli do for you?"},
    {"id": "quiz_q3_correct", "speaker": "dot", "text": "Awesome! Green vegetables give you vitamins to make you strong and happy!"},
    {"id": "quiz_win", "speaker": "pip", "text": "Super job! You are a FunFact Animal Champion! Meow and yay!"},
    {"id": "quiz_q1_opt1", "speaker": "dot", "text": "Because she eats yummy pink shrimp!"},
    {"id": "quiz_q1_opt2", "speaker": "dot", "text": "Because she paints her feathers!"},
    {"id": "quiz_q1_opt3", "speaker": "dot", "text": "Because she drinks strawberry milk!"},
    {"id": "quiz_q2_opt1", "speaker": "pip", "text": "No, silly! Pip stays an orange cat!"},
    {"id": "quiz_q2_opt2", "speaker": "pip", "text": "Yes, he turns into an alien cat!"},
    {"id": "quiz_q3_opt1", "speaker": "dot", "text": "It makes you strong and healthy!"},
    {"id": "quiz_q3_opt2", "speaker": "pip", "text": "It makes you fly in the sky!"},
    {"id": "quiz_q3_opt3", "speaker": "pip", "text": "It makes you sleep all day!"},
    {"id": "vocab_pink", "speaker": "dot", "text": "Pink. A sweet color like strawberries and flamingos."},
    {"id": "vocab_shrimp", "speaker": "dot", "text": "Shrimp. Small pink animals that swim in the water."},
    {"id": "vocab_broccoli", "speaker": "dot", "text": "Broccoli. A healthy, tree-shaped green vegetable."},
    {"id": "vocab_monster", "speaker": "pip", "text": "Monster! A silly, playful green creature! Roar!"},
    {"id": "vocab_strong", "speaker": "dot", "text": "Strong! Full of power and healthy energy!"},

    # ==========================================
    # EPISODE 2: Cammy's Color Magic (Chameleon)
    # ==========================================
    {"id": "ep2_p1_b1", "speaker": "pip", "text": "Hi Cammy! Why did you turn bright yellow?"},
    {"id": "ep2_p1_b2", "speaker": "dot", "text": "Are you trying to hide like a banana?!"},
    {"id": "ep2_p2_b1", "speaker": "cammy", "text": "Haha! Chameleons change color to show our feelings! Yellow means I am super happy!"},
    {"id": "ep2_p2_b2", "speaker": "dot", "text": "Wow! Your colors show your mood!"},
    {"id": "ep2_p3_b1", "speaker": "pip", "text": "Look at me! If I get angry, will I turn fiery red?!"},
    {"id": "ep2_p3_b2", "speaker": "dot", "text": "Haha, silly Pip! You just look like a puffy tomato!"},
    {"id": "ep2_p4_b1", "speaker": "pip", "text": "Okay, I am not angry! Now I am happy orange!"},
    {"id": "ep2_p4_b2", "speaker": "cammy", "text": "Yay! Happy friends are the best color!"},
    {"id": "emote_cammy", "speaker": "cammy", "text": "Squeak! I love bright happy colors!"},
    {"id": "fact_cammy", "speaker": "dot", "text": "Why Do Chameleons Change Color? Chameleons change their color mostly to express their feelings and talk to friends! When they are warm and happy, they turn bright sunny colors. When they are angry or scared, they turn darker colors!"},
    {"id": "quiz_ep2_q1", "speaker": "dot", "text": "Why did Cammy the chameleon turn bright yellow?"},
    {"id": "quiz_ep2_q1_correct", "speaker": "dot", "text": "Super job! Cammy was feeling super happy, so he turned bright sunny yellow!"},
    {"id": "quiz_ep2_q1_opt1", "speaker": "cammy", "text": "Because he is feeling super happy!"},
    {"id": "quiz_ep2_q1_opt2", "speaker": "cammy", "text": "Because he ate a yellow lemon!"},
    {"id": "quiz_ep2_q1_opt3", "speaker": "cammy", "text": "Because he fell in yellow paint!"},
    {"id": "quiz_ep2_q2", "speaker": "dot", "text": "If Pip the cat gets angry, will he turn red like a chameleon?"},
    {"id": "quiz_ep2_q2_correct", "speaker": "dot", "text": "That's right! Cats do not change color, but friends can share big smiles!"},
    {"id": "quiz_ep2_q2_opt1", "speaker": "pip", "text": "No, Pip is an orange cat, not a chameleon!"},
    {"id": "quiz_ep2_q2_opt2", "speaker": "pip", "text": "Yes, he turns into a fiery red dragon!"},
    {"id": "quiz_ep2_q3", "speaker": "dot", "text": "What do chameleon colors tell us?"},
    {"id": "quiz_ep2_q3_correct", "speaker": "dot", "text": "Awesome! A chameleon's color shows how they feel inside!"},
    {"id": "quiz_ep2_q3_opt1", "speaker": "cammy", "text": "They show their feelings and mood!"},
    {"id": "quiz_ep2_q3_opt2", "speaker": "cammy", "text": "They show what time it is!"},
    {"id": "quiz_ep2_q3_opt3", "speaker": "cammy", "text": "They show how to do math!"},
    {"id": "vocab_yellow", "speaker": "dot", "text": "Yellow. A bright sunny color like lemons and bananas."},
    {"id": "vocab_feelings", "speaker": "dot", "text": "Feelings. Emotions like happy, excited, and silly!"},
    {"id": "vocab_chameleon", "speaker": "dot", "text": "Chameleon. A special lizard that can change its color!"},
    {"id": "vocab_happy", "speaker": "cammy", "text": "Happy! Full of joy, smiles, and sunny warmth!"},

    # ==========================================
    # EPISODE 3: Percy's Warm Tuxedo (Penguin)
    # ==========================================
    {"id": "ep3_p1_b1", "speaker": "pip", "text": "Brrr! Percy, aren't you freezing in this ice water?!"},
    {"id": "ep3_p1_b2", "speaker": "dot", "text": "You look like you are wearing a fancy tuxedo!"},
    {"id": "ep3_p2_b1", "speaker": "percy", "text": "Haha! My feathers are waterproof and trap warm air like a built-in winter coat!"},
    {"id": "ep3_p2_b2", "speaker": "dot", "text": "Wow! Your feathers keep you warm and dry!"},
    {"id": "ep3_p3_b1", "speaker": "pip", "text": "Look at me! If I wear five coats, can I swim with icebergs?!"},
    {"id": "ep3_p3_b2", "speaker": "dot", "text": "Haha, silly Pip! You look like a giant orange ball! You will just roll away!"},
    {"id": "ep3_p4_b1", "speaker": "pip", "text": "Wheee! I am rolling! Catch me, Percy!"},
    {"id": "ep3_p4_b2", "speaker": "percy", "text": "Haha! Warm cocoa by the fire is better than ice water anyway!"},
    {"id": "emote_percy", "speaker": "percy", "text": "Waddle waddle! I love sliding on icy snow!"},
    {"id": "fact_percy", "speaker": "dot", "text": "Why Don't Penguins Freeze in Ice Water? Penguins have tightly packed, waterproof feathers and a thick layer of fat called blubber. They trap a layer of warm air right next to their skin, keeping them cozy and dry even in freezing polar oceans!"},
    {"id": "quiz_ep3_q1", "speaker": "dot", "text": "Why doesn't Percy the penguin freeze in cold ice water?"},
    {"id": "quiz_ep3_q1_correct", "speaker": "dot", "text": "Super job! Percy's waterproof feathers trap warm air to keep him cozy!"},
    {"id": "quiz_ep3_q1_opt1", "speaker": "percy", "text": "Because his feathers are waterproof and trap warm air!"},
    {"id": "quiz_ep3_q1_opt2", "speaker": "percy", "text": "Because he wears an electric heater!"},
    {"id": "quiz_ep3_q1_opt3", "speaker": "percy", "text": "Because penguins are made of ice cream!"},
    {"id": "quiz_ep3_q2", "speaker": "dot", "text": "What happened when Pip put on five winter coats?"},
    {"id": "quiz_ep3_q2_correct", "speaker": "dot", "text": "Haha, that's right! Pip turned into a round puffy ball and rolled in the snow!"},
    {"id": "quiz_ep3_q2_opt1", "speaker": "pip", "text": "He became a round puffy ball and rolled away!"},
    {"id": "quiz_ep3_q2_opt2", "speaker": "pip", "text": "He flew up into the moon!"},
    {"id": "quiz_ep3_q3", "speaker": "dot", "text": "What do Pip, Dot, and Percy drink to stay warm together?"},
    {"id": "quiz_ep3_q3_correct", "speaker": "dot", "text": "Yummy! Warm hot cocoa with sweet marshmallows!"},
    {"id": "quiz_ep3_q3_opt1", "speaker": "percy", "text": "Yummy warm hot cocoa!"},
    {"id": "quiz_ep3_q3_opt2", "speaker": "percy", "text": "Ice cold lemonade!"},
    {"id": "quiz_ep3_q3_opt3", "speaker": "percy", "text": "Salty seawater!"},
    {"id": "vocab_feathers", "speaker": "dot", "text": "Feathers. The soft, waterproof coat covering a bird's body."},
    {"id": "vocab_freezing", "speaker": "dot", "text": "Freezing. Super cold like ice and snow!"},
    {"id": "vocab_waterproof", "speaker": "dot", "text": "Waterproof. Keeps water out so you stay completely dry!"},
    {"id": "vocab_penguin", "speaker": "percy", "text": "Penguin! A cute bird that swims in icy oceans and waddles on snow!"},

    # ==========================================
    # EPISODE 4: Ollie's 270° Twist (Owl - Challenge Form)
    # ==========================================
    {"id": "ep4_p1_b1", "speaker": "pip", "text": "Whoa! Ollie, your head just spun all the way around!"},
    {"id": "ep4_p1_b2", "speaker": "dot", "text": "Are you doing head gymnastics?!"},
    {"id": "ep4_p2_b1", "speaker": "ollie", "text": "Haha! Owls have 14 neck bones so we can turn our heads almost full circle!"},
    {"id": "ep4_p2_b2", "speaker": "dot", "text": "Your eyes are fixed, so your neck does the looking!"},
    {"id": "ep4_p3_b1", "speaker": "pip", "text": "Watch me! I can do the 360-degree super kitty twist!"},
    {"id": "ep4_p3_b2", "speaker": "dot", "text": "Oh no, Pip! You tied yourself into a tangled pretzel cat!"},
    {"id": "ep4_p4_b1", "speaker": "pip", "text": "Help! My tail is on my nose! Cats only have 7 neck bones!"},
    {"id": "ep4_p4_b2", "speaker": "ollie", "text": "Haha, good try Pip! Leave the head spinning to the owls!"},
    {"id": "emote_ollie", "speaker": "ollie", "text": "Hoot hoot! I can see behind me without turning my body!"},
    {"id": "fact_ollie", "speaker": "dot", "text": "Why Can Owls Turn Their Heads So Far? Owls have tube-shaped eyes that cannot move in their sockets. To look around, nature gave owls 14 neck vertebrae — twice as many as humans and cats! They can rotate their heads 270 degrees safely without hurting their blood vessels!"},
    {"id": "quiz_ep4_q1", "speaker": "dot", "text": "How many neck bones do owls have to turn their heads?"},
    {"id": "quiz_ep4_q1_correct", "speaker": "dot", "text": "Brilliant! Owls have 14 neck bones, which is twice as many as humans!"},
    {"id": "quiz_ep4_q1_opt1", "speaker": "ollie", "text": "14 neck bones!"},
    {"id": "quiz_ep4_q1_opt2", "speaker": "ollie", "text": "Only 2 neck bones!"},
    {"id": "quiz_ep4_q1_opt3", "speaker": "ollie", "text": "100 neck bones!"},
    {"id": "quiz_ep4_q2", "speaker": "dot", "text": "Why do owls need to turn their heads so far?"},
    {"id": "quiz_ep4_q2_correct", "speaker": "dot", "text": "That's right! Owl eyes are fixed in place, so they turn their heads to see!"},
    {"id": "quiz_ep4_q2_opt1", "speaker": "ollie", "text": "Because their eyes are fixed and cannot move!"},
    {"id": "quiz_ep4_q2_opt2", "speaker": "ollie", "text": "Because they like getting dizzy!"},
    {"id": "quiz_ep4_q3", "speaker": "dot", "text": "What happened to Pip when he tried the owl head twist?"},
    {"id": "quiz_ep4_q3_correct", "speaker": "dot", "text": "Haha, yes! Pip tied himself into a tangled pretzel cat!"},
    {"id": "quiz_ep4_q3_opt1", "speaker": "pip", "text": "He got tangled up like a pretzel!"},
    {"id": "quiz_ep4_q3_opt2", "speaker": "pip", "text": "He turned into an owl!"},
    {"id": "quiz_ep4_q3_opt3", "speaker": "pip", "text": "He flew to the tree top!"},
    {"id": "vocab_twist", "speaker": "dot", "text": "Twist. To turn or spin in a circle."},
    {"id": "vocab_neck", "speaker": "dot", "text": "Neck. The part of the body that connects your head to your shoulders."},
    {"id": "vocab_bones", "speaker": "dot", "text": "Bones. Hard parts inside your body that help you move and stay strong."},

    # ==========================================
    # EPISODE 5: Barnaby's Sonar Radar (Bat - Detective Form)
    # ==========================================
    {"id": "ep5_p1_b1", "speaker": "pip", "text": "Ouch! It's so dark in here! We need giant flashlights!"},
    {"id": "ep5_p1_b2", "speaker": "dot", "text": "How does Barnaby fly so fast without bumping into cave walls?!"},
    {"id": "ep5_p2_b1", "speaker": "barnaby", "text": "I use Echolocation! My sound clicks bounce back to my ears like a 3D sound map!"},
    {"id": "ep5_p2_b2", "speaker": "dot", "text": "Wow! You can 'see' using sound waves!"},
    {"id": "ep5_p3_b1", "speaker": "pip", "text": "MEOW! ECHOLOCATION! Did my sound find the toy bell?!"},
    {"id": "ep5_p3_b2", "speaker": "dot", "text": "Haha! Shouting 'meow' just made the cave echo back 'MEOW'!"},
    {"id": "ep5_p4_b1", "speaker": "barnaby", "text": "Ping! Found your bell behind that big rock! Sound never lies!"},
    {"id": "ep5_p4_b2", "speaker": "pip", "text": "Hooray for bat radar! Now let's echolocate some yummy fish snacks!"},
    {"id": "emote_barnaby", "speaker": "barnaby", "text": "Squeak! Ping ping! My super ears can hear a mosquito flap its wings!"},
    {"id": "fact_barnaby", "speaker": "dot", "text": "How Do Bats See in the Dark? Bats use Echolocation! They emit high-pitched sound clicks through their mouth or nose. When these sound waves bounce off objects and return as echoes, the bat's super-sensitive ears calculate the exact size, distance, and shape of everything around them!"},
    {"id": "quiz_ep5_q1", "speaker": "dot", "text": "What superpower does Barnaby the bat use to navigate dark caves?"},
    {"id": "quiz_ep5_q1_correct", "speaker": "dot", "text": "Awesome job! Bats use Echolocation to see with sound waves!"},
    {"id": "quiz_ep5_q1_opt1", "speaker": "barnaby", "text": "Echolocation with sound waves!"},
    {"id": "quiz_ep5_q1_opt2", "speaker": "barnaby", "text": "Giant night-vision goggles!"},
    {"id": "quiz_ep5_q1_opt3", "speaker": "barnaby", "text": "Glowing laser eyes!"},
    {"id": "quiz_ep5_q2", "speaker": "dot", "text": "How does Echolocation work for bats?"},
    {"id": "quiz_ep5_q2_correct", "speaker": "dot", "text": "Spot on! Sound clicks bounce off walls and objects back to the bat's ears!"},
    {"id": "quiz_ep5_q2_opt1", "speaker": "barnaby", "text": "Sound clicks bounce back like an echo map!"},
    {"id": "quiz_ep5_q2_opt2", "speaker": "barnaby", "text": "Bats smell the rocks with their toes!"},
    {"id": "quiz_ep5_q3", "speaker": "dot", "text": "Where did Barnaby find Dot's lost toy bell?"},
    {"id": "quiz_ep5_q3_correct", "speaker": "dot", "text": "Super! Barnaby found the bell hidden behind a big rock!"},
    {"id": "quiz_ep5_q3_opt1", "speaker": "barnaby", "text": "Behind a big cave rock!"},
    {"id": "quiz_ep5_q3_opt2", "speaker": "barnaby", "text": "Under Pip's hat!"},
    {"id": "quiz_ep5_q3_opt3", "speaker": "barnaby", "text": "In a treasure chest!"},
    {"id": "vocab_echo", "speaker": "dot", "text": "Echo. A sound that bounces off a surface and repeats."},
    {"id": "vocab_cave", "speaker": "dot", "text": "Cave. A large, dark hollow space underground or inside a mountain."},
    {"id": "vocab_radar", "speaker": "barnaby", "text": "Radar! A system that uses waves to find objects in the dark!"},

    # ==========================================
    # EPISODE 6: Twiggy's Camouflage Prank (Stick Insect - Mimicry Form)
    # ==========================================
    {"id": "ep6_p1_b1", "speaker": "pip", "text": "Look, Dot! I found a magic wooden stick to cast spells!"},
    {"id": "ep6_p1_b2", "speaker": "dot", "text": "Abracadabra! Make a yummy fish appear!"},
    {"id": "ep6_p2_b1", "speaker": "twiggy", "text": "Yawn! Excuse me, kitty! I am not a stick, I am Twiggy the Stick Insect!"},
    {"id": "ep6_p2_b2", "speaker": "pip", "text": "AHHH! The stick is alive! It has legs and big eyes!"},
    {"id": "ep6_p3_b1", "speaker": "twiggy", "text": "Haha! I mimic tree branches and sway in the wind so hungry birds ignore me!"},
    {"id": "ep6_p3_b2", "speaker": "dot", "text": "Your camouflage is totally invisible!"},
    {"id": "ep6_p4_b1", "speaker": "pip", "text": "Look, I am a bush now! You can't see me, Twiggy!"},
    {"id": "ep6_p4_b2", "speaker": "twiggy", "text": "Haha, silly Pip! Your fluffy orange tail is still wagging!"},
    {"id": "emote_twiggy", "speaker": "twiggy", "text": "Sway sway! I am one with the green garden!"},
    {"id": "fact_twiggy", "speaker": "dot", "text": "Why Do Stick Insects Look Like Twigs? Stick insects are the ultimate masters of camouflage! Their bodies, legs, and colors match tree branches and green leaves. When the wind blows, they gently rock back and forth to mimic swaying twigs so birds can't spot them!"},
    {"id": "quiz_ep6_q1", "speaker": "dot", "text": "Why do stick insects look exactly like wooden tree twigs?"},
    {"id": "quiz_ep6_q1_correct", "speaker": "dot", "text": "Fantastic! Their camouflage helps them hide from hungry birds!"},
    {"id": "quiz_ep6_q1_opt1", "speaker": "twiggy", "text": "To hide from birds using plant camouflage!"},
    {"id": "quiz_ep6_q1_opt2", "speaker": "twiggy", "text": "Because they are made of real wood!"},
    {"id": "quiz_ep6_q1_opt3", "speaker": "twiggy", "text": "To pretend to be wizard wands!"},
    {"id": "quiz_ep6_q2", "speaker": "dot", "text": "What special dance do stick insects do in the breeze?"},
    {"id": "quiz_ep6_q2_correct", "speaker": "dot", "text": "That's right! They sway back and forth just like real twigs in the wind!"},
    {"id": "quiz_ep6_q2_opt1", "speaker": "twiggy", "text": "They rock and sway like tree branches!"},
    {"id": "quiz_ep6_q2_opt2", "speaker": "twiggy", "text": "They do a backflip!"},
    {"id": "quiz_ep6_q3", "speaker": "dot", "text": "Why couldn't Pip hide successfully as a garden bush?"},
    {"id": "quiz_ep6_q3_correct", "speaker": "dot", "text": "Haha, yes! Pip's fluffy bright orange tail was wagging happily!"},
    {"id": "quiz_ep6_q3_opt1", "speaker": "pip", "text": "Because his fluffy orange tail was wagging!"},
    {"id": "quiz_ep6_q3_opt2", "speaker": "pip", "text": "Because he sneezed too loud!"},
    {"id": "quiz_ep6_q3_opt3", "speaker": "pip", "text": "Because he was eating popcorn!"},
    {"id": "vocab_camouflage", "speaker": "dot", "text": "Camouflage. Colors and patterns that help animals hide in nature."},
    {"id": "vocab_mimic", "speaker": "dot", "text": "Mimic. To copy or look like something else."},
    {"id": "vocab_sway", "speaker": "twiggy", "text": "Sway! To rock gently side to side like leaves in the wind!"},

    # ==========================================
    # EPISODE 7: Sid's Slow-Motion Secret (Sloth - Role Reversal)
    # ==========================================
    {"id": "ep7_p1_b1", "speaker": "pip", "text": "Wake up, Sid! Coach Pip is here! Time for fast kitty sprints!"},
    {"id": "ep7_p1_b2", "speaker": "dot", "text": "Pip, I think Sid is enjoying his morning nap!"},
    {"id": "ep7_p2_b1", "speaker": "sid", "text": "Yawn... No rushing, Coach Pip! Leaves give very little energy, so moving slowly saves my life!"},
    {"id": "ep7_p2_b2", "speaker": "dot", "text": "Wow! Being slow is your survival superpower!"},
    {"id": "ep7_p3_b1", "speaker": "pip", "text": "Look at me! I am moving in ultra slow motion... Whoa, my paws slipped!"},
    {"id": "ep7_p3_b2", "speaker": "dot", "text": "Haha! Pip, hanging like a sloth made you land in a soft leaf bed!"},
    {"id": "ep7_p4_b1", "speaker": "pip", "text": "Zzz... Actually, this cozy leaf bed is nice. I am a sleepy sloth now!"},
    {"id": "ep7_p4_b2", "speaker": "sid", "text": "Welcome to the slow club, Pip! Naps are the best medicine!"},
    {"id": "emote_sid", "speaker": "sid", "text": "Yawn... Slow down, take a deep breath, and enjoy the sunny leaves!"},
    {"id": "fact_sid", "speaker": "dot", "text": "Why Do Sloths Move So Slowly? Sloths have the slowest metabolism of any mammal on Earth! They eat tough rainforest leaves that have very few calories and take up to thirty days to digest. Moving slowly saves their energy and makes them almost invisible to predators high in the treetops!"},
    {"id": "quiz_ep7_q1", "speaker": "dot", "text": "Why do sloths move so slowly in the rainforest?"},
    {"id": "quiz_ep7_q1_correct", "speaker": "dot", "text": "Super job! Sloths eat leaves with low energy, so moving slowly saves their energy!"},
    {"id": "quiz_ep7_q1_opt1", "speaker": "sid", "text": "To save energy on their healthy leaf diet!"},
    {"id": "quiz_ep7_q1_opt2", "speaker": "sid", "text": "Because their batteries ran out!"},
    {"id": "quiz_ep7_q1_opt3", "speaker": "sid", "text": "Because they are wearing heavy boots!"},
    {"id": "quiz_ep7_q2", "speaker": "dot", "text": "How long can it take for a sloth to digest a single leaf meal?"},
    {"id": "quiz_ep7_q2_correct", "speaker": "dot", "text": "Amazing fact! A sloth's stomach can take up to thirty days to digest leaves!"},
    {"id": "quiz_ep7_q2_opt1", "speaker": "sid", "text": "Up to thirty whole days!"},
    {"id": "quiz_ep7_q2_opt2", "speaker": "sid", "text": "Only five seconds!"},
    {"id": "quiz_ep7_q3", "speaker": "dot", "text": "What did Coach Pip do after trying to move like a sloth?"},
    {"id": "quiz_ep7_q3_correct", "speaker": "dot", "text": "Haha, that's right! Pip fell asleep taking a cozy afternoon nap with Sid!"},
    {"id": "quiz_ep7_q3_opt1", "speaker": "pip", "text": "He took a cozy nap in the leaves!"},
    {"id": "quiz_ep7_q3_opt2", "speaker": "pip", "text": "He ran a marathon!"},
    {"id": "quiz_ep7_q3_opt3", "speaker": "pip", "text": "He cooked pizza!"},
    {"id": "vocab_energy", "speaker": "dot", "text": "Energy. The power your body gets from food to play and move."},
    {"id": "vocab_sloth", "speaker": "dot", "text": "Sloth. A cute, slow-moving tree mammal from the rainforest."},
    {"id": "vocab_leaves", "speaker": "dot", "text": "Leaves. The flat green parts of trees that sloths love to eat."},
    {"id": "vocab_sprint", "speaker": "pip", "text": "Sprint! Running super fast for a short distance!"},

    # ==========================================
    # EPISODE 8: Bella's Wiggle Dance (Bee - Pure A1/A2, only 1 B1 word: "wiggle")
    # ==========================================
    {"id": "ep8_p1_b1", "speaker": "pip", "text": "Look, Dot! The little bee is dancing on a flower!"},
    {"id": "ep8_p1_b2", "speaker": "dot", "text": "Is she having a party?!"},
    {"id": "ep8_p2_b1", "speaker": "bella", "text": "Buzz! My wiggle dance tells my friends where sweet flowers are!"},
    {"id": "ep8_p2_b2", "speaker": "dot", "text": "Wow! Your dance is a map!"},
    {"id": "ep8_p3_b1", "speaker": "pip", "text": "Watch me! I can do the fish dance to find snacks!"},
    {"id": "ep8_p3_b2", "speaker": "dot", "text": "Haha! Silly Pip! You bumped into a soft bush!"},
    {"id": "ep8_p4_b1", "speaker": "bella", "text": "Haha! Follow me! Let's find sweet flowers together!"},
    {"id": "ep8_p4_b2", "speaker": "pip", "text": "Yay! Buzz buzz! I am a happy dancing cat!"},
    {"id": "emote_bella", "speaker": "bella", "text": "Buzz buzz! Let's dance and find sweet flowers!"},
    {"id": "fact_bella", "speaker": "dot", "text": "Why Do Bees Dance? Honeybees do a special wiggle dance to talk to their family! The dance shows their friends which way to fly to find sweet flowers and make yummy honey!"},
    {"id": "quiz_ep8_q1", "speaker": "dot", "text": "Why does Bella the bee dance?"},
    {"id": "quiz_ep8_q1_correct", "speaker": "dot", "text": "Super job! Bella dances to show her bee friends where sweet flowers are!"},
    {"id": "quiz_ep8_q1_opt1", "speaker": "bella", "text": "To show her friends where flowers are!"},
    {"id": "quiz_ep8_q1_opt2", "speaker": "bella", "text": "Because she likes rock music!"},
    {"id": "quiz_ep8_q1_opt3", "speaker": "bella", "text": "Because her shoes are too small!"},
    {"id": "quiz_ep8_q2", "speaker": "dot", "text": "What does Pip do to find fish snacks?"},
    {"id": "quiz_ep8_q2_correct", "speaker": "dot", "text": "Haha, yes! Pip tries to do a silly cat dance and bumps into a bush!"},
    {"id": "quiz_ep8_q2_opt1", "speaker": "pip", "text": "He tries to do a silly cat dance!"},
    {"id": "quiz_ep8_q2_opt2", "speaker": "pip", "text": "He turns into an airplane!"},
    {"id": "quiz_ep8_q3", "speaker": "dot", "text": "What do bees make from sweet flower food?"},
    {"id": "quiz_ep8_q3_correct", "speaker": "dot", "text": "Yummy! Bees make delicious sweet honey!"},
    {"id": "quiz_ep8_q3_opt1", "speaker": "bella", "text": "Yummy sweet honey!"},
    {"id": "quiz_ep8_q3_opt2", "speaker": "bella", "text": "Cold ice cream!"},
    {"id": "quiz_ep8_q3_opt3", "speaker": "bella", "text": "Hot soup!"},
    {"id": "vocab_bee", "speaker": "dot", "text": "Bee. A small flying insect that makes sweet honey."},
    {"id": "vocab_dance", "speaker": "dot", "text": "Dance. Moving your body happily to music or fun."},
    {"id": "vocab_flower", "speaker": "dot", "text": "Flower. A colorful, sweet plant in the garden."},
    {"id": "vocab_wiggle", "speaker": "bella", "text": "Wiggle! Moving quickly side to side with a happy shake!"}
]

async def main():
    print(f"Generating 100% Kid Voice Audio for {len(DIALOGUES)} items...")
    for item in DIALOGUES:
        char_info = VOICE_MAP.get(item["speaker"], VOICE_MAP["dot"])
        mp3_path = os.path.join(AUDIO_DIR, f"{item['id']}.mp3")
        comm = edge_tts.Communicate(item["text"], char_info["voice"], rate=char_info["rate"], pitch=char_info["pitch"])
        await comm.save(mp3_path)
        print(f"Generated: {item['id']}.mp3 [{char_info['voice']}]")

    print("\nAll kid voice audio files generated successfully!")

if __name__ == "__main__":
    asyncio.run(main())
