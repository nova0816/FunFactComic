import asyncio
import json
import os
import edge_tts

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "..", "assets", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

# 100% Authentic Adorable Distinct Kid Voices
VOICE_MAP = {
    "pip": {
        "voice": "en-US-AnaNeural",      # Energetic US Kid voice (playful boy kitty)
        "rate": "+6%",
        "pitch": "+14Hz"
    },
    "dot": {
        "voice": "en-GB-MaisieNeural",   # Sweet British Kid voice (gentle bunny storytelling)
        "rate": "-2%",
        "pitch": "+6Hz"
    },
    "fiona": {
        "voice": "en-IE-EmilyNeural",    # Melodic Irish kid/youth voice (cheerful flamingo)
        "rate": "-1%",
        "pitch": "+8Hz"
    },
    "cammy": {
        "voice": "en-CA-LiamNeural",     # Enthusiastic Canadian kid voice (playful chameleon)
        "rate": "+2%",
        "pitch": "+6Hz"
    },
    "narrator": {
        "voice": "en-GB-MaisieNeural",
        "rate": "-3%",
        "pitch": "+4Hz"
    }
}

DIALOGUES = [
    # ==========================================
    # EPISODE 1: Fiona's Pink Secret
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
    # EPISODE 2: Cammy's Color Magic!
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
    {"id": "vocab_happy", "speaker": "cammy", "text": "Happy! Full of joy, smiles, and sunny warmth!"}
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
