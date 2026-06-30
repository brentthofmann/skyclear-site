#!/usr/bin/env python3
"""Pull real, varied Skyclear media from Pexels into public/. Run once."""
import json, os, urllib.request, urllib.parse

KEY = "5YIhcwC5nJqfRv5RUCv0WJkakczvN8unFSli4b2I1weuEZ1zE9LjCOzs"
IMG_DIR = "public/images"
VID_DIR = "public/videos"
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(VID_DIR, exist_ok=True)

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

def api(path, params):
    url = "https://api.pexels.com/" + path + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Authorization": KEY, "User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.load(r)

def dl(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=90) as r, open(dest, "wb") as f:
        f.write(r.read())
    print(f"  saved {dest}  ({os.path.getsize(dest)//1024} KB)")

# (filename, query, pick-index) — index lets us skip weak first results
PHOTOS = [
    ("hero-home-dusk.jpg",      "luxury home exterior dusk lights", 0),
    ("lights-holiday.jpg",      "christmas lights house exterior night", 0),
    ("lights-warm-home.jpg",    "house exterior warm lights evening", 1),
    ("lights-patio.jpg",        "backyard string lights patio evening", 0),
    ("window-cleaning.jpg",     "window cleaner cleaning glass", 0),
    ("window-modern.jpg",       "modern house large glass windows", 0),
    ("window-reflection.jpg",   "clean glass window reflection sky", 1),
    ("solar-roof.jpg",          "solar panels roof house", 0),
    ("solar-cleaning.jpg",      "cleaning solar panels", 0),
    ("solar-array.jpg",         "solar panels blue sky", 1),
    ("home-night-1.jpg",        "luxury modern home night exterior", 0),
    ("home-night-2.jpg",        "suburban house evening lights", 0),
]

print("PHOTOS")
for name, q, idx in PHOTOS:
    try:
        data = api("v1/search", {"query": q, "orientation": "landscape",
                                 "per_page": 6, "size": "large"})
        photos = data.get("photos", [])
        if not photos:
            print(f"  [miss] {name} <- '{q}'"); continue
        p = photos[min(idx, len(photos)-1)]
        src = p["src"].get("large2x") or p["src"]["large"]
        dl(src, os.path.join(IMG_DIR, name))
        print(f"    by {p['photographer']}  (id {p['id']})")
    except Exception as e:
        print(f"  [err] {name}: {e}")

VIDEOS = [
    ("hero-bokeh.mp4",   "bokeh lights warm night"),
    ("hero-dusk.mp4",    "house neighborhood dusk aerial"),
    ("solar.mp4",        "solar panels"),
]
print("VIDEOS")
for name, q in VIDEOS:
    try:
        data = api("videos/search", {"query": q, "orientation": "landscape",
                                     "per_page": 6, "size": "medium"})
        vids = data.get("videos", [])
        if not vids:
            print(f"  [miss] {name} <- '{q}'"); continue
        v = vids[0]
        # pick an mp4 file ~1280-1920 wide
        files = [f for f in v["video_files"] if f.get("file_type") == "video/mp4"]
        files.sort(key=lambda f: abs((f.get("width") or 0) - 1600))
        dl(files[0]["link"], os.path.join(VID_DIR, name))
        print(f"    by {v['user']['name']}  (id {v['id']})")
    except Exception as e:
        print(f"  [err] {name}: {e}")

print("DONE")
