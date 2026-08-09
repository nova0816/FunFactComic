import os
from PIL import Image

GRID_IMG_PATH = r"C:\Users\nova\.gemini\antigravity\brain\f835a011-563b-4b59-b116-4053d323a47a\ep2_chameleon_4grid_1786239047808.jpg"
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

    # Inset slightly to avoid outer or divider borders if any
    pad_x = int(w * 0.005)
    pad_y = int(h * 0.005)

    # 4 Quadrants
    panels = {
        "ep2_panel1.jpg": (0, 0, mid_x - pad_x, mid_y - pad_y),
        "ep2_panel2.jpg": (mid_x + pad_x, 0, w, mid_y - pad_y),
        "ep2_panel3.jpg": (0, mid_y + pad_y, mid_x - pad_x, h),
        "ep2_panel4.jpg": (mid_x + pad_x, mid_y + pad_y, w, h),
    }

    for filename, box in panels.items():
        panel_img = img.crop(box)
        out_path = os.path.join(ILLUST_DIR, filename)
        panel_img.save(out_path, quality=95)
        print(f"Saved: {out_path} ({panel_img.size[0]}x{panel_img.size[1]})")

    # Extract Cammy's face avatar from Panel 1 or Panel 2
    # In Panel 1, Cammy is sitting on the branch on the right-hand side of Panel 1
    panel1 = Image.open(os.path.join(ILLUST_DIR, "ep2_panel1.jpg"))
    p1_w, p1_h = panel1.size
    # Crop Cammy's face area (upper right quadrant of panel 1)
    avatar_box = (int(p1_w * 0.50), int(p1_h * 0.15), int(p1_w * 0.92), int(p1_h * 0.65))
    cammy_avatar = panel1.crop(avatar_box)
    cammy_avatar = cammy_avatar.resize((256, 256), Image.Resampling.LANCZOS)
    avatar_out = os.path.join(AVATAR_DIR, "cammy.jpg")
    cammy_avatar.save(avatar_out, quality=95)
    print(f"Saved Cammy avatar: {avatar_out}")

    print("All 4 panels and character avatar sliced successfully!")

if __name__ == "__main__":
    slice_grid()
