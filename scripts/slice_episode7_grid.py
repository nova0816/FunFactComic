import os
from PIL import Image

GRID_IMG_PATH = r"C:\Users\nova\.gemini\antigravity\brain\f835a011-563b-4b59-b116-4053d323a47a\ep7_sloth_4grid_1786240847118.jpg"
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
        "ep7_panel1.jpg": (0, 0, mid_x - pad_x, mid_y - pad_y),
        "ep7_panel2.jpg": (mid_x + pad_x, 0, w, mid_y - pad_y),
        "ep7_panel3.jpg": (0, mid_y + pad_y, mid_x - pad_x, h),
        "ep7_panel4.jpg": (mid_x + pad_x, mid_y + pad_y, w, h),
    }

    for filename, box in panels.items():
        panel_img = img.crop(box)
        out_path = os.path.join(ILLUST_DIR, filename)
        panel_img.save(out_path, quality=95)
        print(f"Saved: {filename}")

    # Extract Sid's face avatar from Panel 1 or Panel 2
    panel2 = Image.open(os.path.join(ILLUST_DIR, "ep7_panel2.jpg"))
    p2_w, p2_h = panel2.size
    avatar_box = (int(p2_w * 0.15), int(p2_h * 0.15), int(p2_w * 0.65), int(p2_h * 0.65))
    sid_avatar = panel2.crop(avatar_box).resize((256, 256), Image.Resampling.LANCZOS)
    avatar_out = os.path.join(AVATAR_DIR, "sid.jpg")
    sid_avatar.save(avatar_out, quality=95)
    print(f"Saved Avatar: sid.jpg")

    print("\nEpisode 7 panels and Sid avatar sliced successfully!")

if __name__ == "__main__":
    slice_grid()
