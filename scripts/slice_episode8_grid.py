import os
from PIL import Image

GRID_IMG_PATH = r"C:\Users\nova\.gemini\antigravity\brain\f835a011-563b-4b59-b116-4053d323a47a\ep8_bee_4grid_1786286935579.jpg"
ILLUST_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "illustrations"))
AVATAR_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "avatars"))

os.makedirs(ILLUST_DIR, exist_ok=True)
os.makedirs(AVATAR_DIR, exist_ok=True)

def slice_grid():
    if not os.path.exists(GRID_IMG_PATH):
        print(f"Error: Grid image not found at {GRID_IMG_PATH}")
        return

    img = Image.open(GRID_IMG_PATH)
    w, h = img.size
    print(f"Original image size: {w}x{h}")

    mid_x = w // 2
    mid_y = h // 2
    pad_x = int(w * 0.005)
    pad_y = int(h * 0.005)

    panels = {
        "ep8_panel1.jpg": (0, 0, mid_x - pad_x, mid_y - pad_y),
        "ep8_panel2.jpg": (mid_x + pad_x, 0, w, mid_y - pad_y),
        "ep8_panel3.jpg": (0, mid_y + pad_y, mid_x - pad_x, h),
        "ep8_panel4.jpg": (mid_x + pad_x, mid_y + pad_y, w, h),
    }

    for filename, box in panels.items():
        panel_img = img.crop(box)
        out_path = os.path.join(ILLUST_DIR, filename)
        panel_img.save(out_path, quality=95)
        print(f"Saved: {filename}")

    # Extract Bella's cute bee face avatar from Panel 2
    panel2 = Image.open(os.path.join(ILLUST_DIR, "ep8_panel2.jpg"))
    p2_w, p2_h = panel2.size
    avatar_box = (int(p2_w * 0.10), int(p2_h * 0.10), int(p2_w * 0.60), int(p2_h * 0.60))
    bella_avatar = panel2.crop(avatar_box).resize((256, 256), Image.Resampling.LANCZOS)
    avatar_out = os.path.join(AVATAR_DIR, "bella.jpg")
    bella_avatar.save(avatar_out, quality=95)
    print(f"Saved Avatar: bella.jpg")

    print("\nEpisode 8 panels and Bella avatar sliced successfully!")

if __name__ == "__main__":
    slice_grid()
