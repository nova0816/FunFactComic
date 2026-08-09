import os
from PIL import Image

EPISODES = [
    {
        "grid_path": r"C:\Users\nova\.gemini\antigravity\brain\f835a011-563b-4b59-b116-4053d323a47a\ep4_owl_4grid_1786239802645.jpg",
        "prefix": "ep4",
        "avatar_name": "ollie.jpg",
        "avatar_crop_panel": "ep4_panel1.jpg",
        "avatar_box_rel": (0.50, 0.15, 0.90, 0.65)
    },
    {
        "grid_path": r"C:\Users\nova\.gemini\antigravity\brain\f835a011-563b-4b59-b116-4053d323a47a\ep5_bat_4grid_1786239815365.jpg",
        "prefix": "ep5",
        "avatar_name": "barnaby.jpg",
        "avatar_crop_panel": "ep5_panel2.jpg",
        "avatar_box_rel": (0.20, 0.15, 0.70, 0.65)
    },
    {
        "grid_path": r"C:\Users\nova\.gemini\antigravity\brain\f835a011-563b-4b59-b116-4053d323a47a\ep6_stick_4grid_1786239829956.jpg",
        "prefix": "ep6",
        "avatar_name": "twiggy.jpg",
        "avatar_crop_panel": "ep6_panel2.jpg",
        "avatar_box_rel": (0.25, 0.15, 0.75, 0.65)
    }
]

ILLUST_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "illustrations"))
AVATAR_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "avatars"))

os.makedirs(ILLUST_DIR, exist_ok=True)
os.makedirs(AVATAR_DIR, exist_ok=True)

def slice_all():
    for ep in EPISODES:
        grid_path = ep["grid_path"]
        prefix = ep["prefix"]
        if not os.path.exists(grid_path):
            print(f"Error: Not found {grid_path}")
            continue

        img = Image.open(grid_path)
        w, h = img.size
        mid_x, mid_y = w // 2, h // 2
        pad_x, pad_y = int(w * 0.005), int(h * 0.005)

        panels = {
            f"{prefix}_panel1.jpg": (0, 0, mid_x - pad_x, mid_y - pad_y),
            f"{prefix}_panel2.jpg": (mid_x + pad_x, 0, w, mid_y - pad_y),
            f"{prefix}_panel3.jpg": (0, mid_y + pad_y, mid_x - pad_x, h),
            f"{prefix}_panel4.jpg": (mid_x + pad_x, mid_y + pad_y, w, h),
        }

        for filename, box in panels.items():
            panel_img = img.crop(box)
            out_path = os.path.join(ILLUST_DIR, filename)
            panel_img.save(out_path, quality=95)
            print(f"Saved: {filename}")

        # Crop Avatar
        crop_panel_path = os.path.join(ILLUST_DIR, ep["avatar_crop_panel"])
        p_img = Image.open(crop_panel_path)
        pw, ph = p_img.size
        r = ep["avatar_box_rel"]
        crop_box = (int(pw * r[0]), int(ph * r[1]), int(pw * r[2]), int(ph * r[3]))
        avatar_img = p_img.crop(crop_box).resize((256, 256), Image.Resampling.LANCZOS)
        avatar_out = os.path.join(AVATAR_DIR, ep["avatar_name"])
        avatar_img.save(avatar_out, quality=95)
        print(f"Saved Avatar: {ep['avatar_name']}")

    print("\nAll 3 episodes sliced and avatars created successfully!")

if __name__ == "__main__":
    slice_all()
