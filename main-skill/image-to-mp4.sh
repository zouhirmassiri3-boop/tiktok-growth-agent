#!/usr/bin/env bash
# Single 1080x1920 image -> short static MP4 for the TikTok Video upload flow
# (so a one-image post still gets true-fullscreen video display, not Photo-mode
# fit/zoom). Pass an already-1080x1920 image (run pad-to-vertical.sh first if 2:3).
#
# Usage: image-to-mp4.sh IN.png OUT.mp4 [SECONDS]   (default 6s)
set -euo pipefail
IN="$1"; OUT="$2"; DUR="${3:-6}"
[ -f "$IN" ] || { echo "missing: $IN" >&2; exit 1; }

ffmpeg -y -loglevel error \
  -loop 1 -t "$DUR" -i "$IN" \
  -f lavfi -t "$DUR" -i anullsrc=channel_layout=stereo:sample_rate=44100 \
  -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1,fps=30,format=yuv420p" \
  -map 0:v -map 1:a \
  -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 128k -shortest \
  "$OUT"

echo "built: $OUT"
