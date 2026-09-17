#!/usr/bin/env bash
# Pad a 2:3 (e.g. 1024x1536) creative onto a 1080x1920 (9:16) canvas so it fills
# a TikTok screen. The sharp image is TOP-aligned (1080x1620); the bottom ~300px
# is a blurred/darkened extension of the same image = clean "safe" strip under
# TikTok's caption/handle UI. Use on GPT 2:3 outputs before the video build.
#
# Usage: pad-to-vertical.sh IN.png OUT.png
set -euo pipefail
IN="$1"; OUT="$2"
[ -f "$IN" ] || { echo "missing: $IN" >&2; exit 1; }

ffmpeg -y -loglevel error -i "$IN" -filter_complex \
"[0:v]scale=1080:-1:flags=lanczos[fg];\
 [0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,\
      boxblur=60:1,eq=brightness=-0.18:saturation=1.05[bg];\
 [bg][fg]overlay=x=(W-w)/2:y=0[v]" \
  -map "[v]" -frames:v 1 "$OUT"

echo "padded: $OUT"
