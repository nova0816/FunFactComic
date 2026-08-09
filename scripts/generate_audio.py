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
        "voice": "en-IE-EmilyNeural",    # Melodic Irish youth/kid voice (sweet & cheerful flamingo)
        "rate": "-1%",
        "pitch": "+8Hz"
    },
    "narrator": {
        "voice": "en-GB-MaisieNeural",
        "rate": "-3%",
        "pitch": "+4Hz"
    }
}

DIALOGUES = [
    # Panel 1
    {"id": "p1_b1", "speaker": "pip", "text": "Hi Fiona! Why are you so bright pink?"},
    {"id": "p1_b2", "speaker": "dot", "text": "You look like sweet cotton candy!"},
    # Panel 2
    {"id": "p2_b1", "speaker": "fiona", "text": "I am pink because I eat yummy pink shrimp!"},
    {"id": "p2_b2", "speaker": "pip", "text": "Wait! What you eat changes your color?!"},
    # Panel 3
    {"id": "p3_b1", "speaker": "pip", "text": "Oh no! If I eat green broccoli, will I turn green?!"},
    {"id": "p3_b2", "speaker": "dot", "text": "Haha! Pip, you are an orange cat!"},
    # Panel 4
    {"id": "p4_b1", "speaker": "pip", "text": "Roar! Look at me! I am the Green Monster Cat!"},
    {"id": "p4_b2", "speaker": "dot", "text": "Haha, silly Pip! Broccoli just makes you strong!"},
    # Character Emotes
    {"id": "emote_pip", "speaker": "pip", "text": "Meow! I am so curious!"},
    {"id": "emote_dot", "speaker": "dot", "text": "Hop hop! Let's learn together!"},
    {"id": "emote_fiona", "speaker": "fiona", "text": "Flap flap! Pink is my favorite color!"},
    # Animal Fact
    {"id": "fact_fiona", "speaker": "dot", "text": "Why Are Flamingos Pink? Flamingo chicks are actually born with grey and white feathers! They turn bright pink because their favorite food, pink shrimp and red algae, contains a natural pink dye called carotenoids."},
    # Quiz Questions & Feedback
    {"id": "quiz_q1", "speaker": "dot", "text": "Why is Fiona the flamingo bright pink?"},
    {"id": "quiz_q1_correct", "speaker": "dot", "text": "Super job! Flamingos eat lots of pink shrimp, which turns their feathers pink!"},
    {"id": "quiz_q2", "speaker": "dot", "text": "If Pip the cat eats green broccoli, will he turn green?"},
    {"id": "quiz_q2_correct", "speaker": "dot", "text": "That's right! Pip will always be an orange cat, but broccoli makes him healthy!"},
    {"id": "quiz_q3", "speaker": "dot", "text": "What does eating healthy broccoli do for you?"},
    {"id": "quiz_q3_correct", "speaker": "dot", "text": "Awesome! Green vegetables give you vitamins to make you strong and happy!"},
    {"id": "quiz_win", "speaker": "pip", "text": "Super job! You are a FunFact Animal Champion! Meow and yay!"},
    # Quiz Options with Kid Voices
    {"id": "quiz_q1_opt1", "speaker": "dot", "text": "Because she eats yummy pink shrimp!"},
    {"id": "quiz_q1_opt2", "speaker": "dot", "text": "Because she paints her feathers!"},
    {"id": "quiz_q1_opt3", "speaker": "dot", "text": "Because she drinks strawberry milk!"},
    {"id": "quiz_q2_opt1", "speaker": "pip", "text": "No, silly! Pip stays an orange cat!"},
    {"id": "quiz_q2_opt2", "speaker": "pip", "text": "Yes, he turns into an alien cat!"},
    {"id": "quiz_q3_opt1", "speaker": "dot", "text": "It makes you strong and healthy!"},
    {"id": "quiz_q3_opt2", "speaker": "pip", "text": "It makes you fly in the sky!"},
    {"id": "quiz_q3_opt3", "speaker": "pip", "text": "It makes you sleep all day!"},
    # Vocabulary Words
    {"id": "vocab_pink", "speaker": "dot", "text": "Pink. A sweet color like strawberries and flamingos."},
    {"id": "vocab_shrimp", "speaker": "dot", "text": "Shrimp. Small pink animals that swim in the water."},
    {"id": "vocab_broccoli", "speaker": "dot", "text": "Broccoli. A healthy, tree-shaped green vegetable."},
    {"id": "vocab_monster", "speaker": "pip", "text": "Monster! A silly, playful green creature! Roar!"},
    {"id": "vocab_strong", "speaker": "dot", "text": "Strong! Full of power and healthy energy!"}
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
