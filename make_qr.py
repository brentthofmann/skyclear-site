#!/usr/bin/env python3
"""Generate two branded QR codes (site + review) with the Skyclear logo centered."""
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image, ImageDraw
import os

BASE = "/Users/brent/Projects/skyclear tx"
LOGO = os.path.join(BASE, "skyclear-logo.png")
OUT = os.path.join(BASE, "qr")
os.makedirs(OUT, exist_ok=True)

DARK = "#0B1426"   # deep brand navy — high-contrast, scans clean
LIGHT = "#FFFFFF"
PX = 1200          # final size, print-ready

def make(url, fname, label):
    qr = qrcode.QRCode(error_correction=ERROR_CORRECT_H, box_size=40, border=4)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color=DARK, back_color=LIGHT).convert("RGBA")
    img = img.resize((PX, PX), Image.LANCZOS)

    # logo sized to ~22% of the QR (safe with H-level error correction)
    logo = Image.open(LOGO).convert("RGBA")
    lsize = int(PX * 0.22)
    logo.thumbnail((lsize, lsize), Image.LANCZOS)

    # white rounded pad behind the logo so the finder pattern stays readable
    pad = int(lsize * 1.28)
    badge = Image.new("RGBA", (pad, pad), (0, 0, 0, 0))
    d = ImageDraw.Draw(badge)
    d.rounded_rectangle([0, 0, pad, pad], radius=int(pad * 0.18), fill=LIGHT)
    bx = (PX - pad) // 2
    by = (PX - pad) // 2
    img.paste(badge, (bx, by), badge)

    lx = (PX - logo.width) // 2
    ly = (PX - logo.height) // 2
    img.paste(logo, (lx, ly), logo)

    path = os.path.join(OUT, fname)
    img.convert("RGB").save(path, "PNG")
    print(f"  {label}: {path}  ({url})")

print("Generating QR codes:")
make("https://skycleartx.com", "skyclear-site-qr.png", "Website")
make(
    "https://www.google.com/search?si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_wv3LlXipogvq9y9gLIG7ejdcNc4qha3cxqSVJqLaTrnfyBeqUzQoetZsI_JamD2lBPZE6_xZ4HyEHBAnpUEMJJKCnUSSV0mGozTPiXcJJrlqppPnA%3D%3D&q=Skyclear+exterior+services+Reviews",
    "skyclear-review-qr.png",
    "Leave a Review",
)
print("Done.")
