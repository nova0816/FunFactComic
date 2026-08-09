import os
from PIL import Image

GRID_IMG_PATH = r"C:\Users\nova\.gemini\antigravity\brain\f835a011-563b-4b59-b116-4053d323a47a\ep3_penguin_4grid_1786239337961.jpg"
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

    # Inset slightly to avoid dividing borders
    pad_x = int(w * 0.005)
    pad_y = int(h * 0.005)

    # 4 Quadrants
    panels = {
        "ep3_panel1.jpg": (0, 0, mid_x - pad_x, mid_y - pad_y),
        "ep3_panel2.jpg": (mid_x + pad_x, 0, w, mid_y - pad_y),
        "ep3_panel3.jpg": (0, mid_y + pad_y, mid_x - pad_x, h),
        "ep3_panel4.jpg": (mid_x + pad_x, mid_y + pad_y, w, h),
    }

    for filename, box in panels.items():
        panel_img = img.crop(box)
        out_path = os.path.join(ILLUST_DIR, filename)
        panel_img.save(out_path, quality=95)
        print(f"Saved: {out_path} ({panel_img.size[0]}x{panel_img.size[1]})")

    # Extract Percy's face avatar from Panel 1 (Percy is sliding on the right side of Panel 1)
    panel1 = Image.open(os.path.join(ILLUST_DIR, "ep3_panel1.jpg"))
    p1_w, p1_h = panel1.size
    avatar_box = (int(p1_w * 0.50), int(p1_h * 0.20), int(p1_w * 0.90), int(p1_h * 0.70))
    percy_avatar = panel1.crop(avatar_box)
    percy_avatar = percy_avatar.resize((256, 256), Image.Resampling.LANCZOS)
    avatar_out = os.path.join(AVATAR_DIR, "percy.jpg")
    percy_avatar.save(avatar_out, quality=95)
    print(f"Saved Percy avatar: {avatar_out}")

    print("All Episode 3 panels and Percy avatar sliced successfully!")

if __name__ == "__main__":
    slice_grid()
