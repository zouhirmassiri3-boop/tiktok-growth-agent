#!/usr/bin/env bash
# Build a 1080x1920 H.264 MP4 from 3 slide images so the post goes out as a
# VIDEO (true fullscreen, no Photo-mode zoom/letterbox) instead of a photo slideshow.
#
# Usage:  slides-to-mp4.sh OUT.mp4 SLIDE1 SLIDE2 SLIDE3 [SECONDS_PER_SLIDE]
# Default 2.8s per slide  ->  ~8.4s total.
set -euo pipefail

OUT="$1"; S1="$2"; S2="$3"; S3="$4"; DUR="${5:-2.8}"

for f in "$S1" "$S2" "$S3"; do
  [ -f "$f" ] || { echo "missing: $f" >&2; exit 1; }
done

TOTAL=$(awk "BEGIN{print $DUR*3}")
VF="scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1,fps=30,format=yuv420p"

ffmpeg -y -loglevel error \
  -loop 1 -t "$DUR" -i "$S1" \
  -loop 1 -t "$DUR" -i "$S2" \
  -loop 1 -t "$DUR" -i "$S3" \
  -f lavfi -t "$TOTAL" -i anullsrc=channel_layout=stereo:sample_rate=44100 \
  -filter_complex "[0:v]${VF}[v0];[1:v]${VF}[v1];[2:v]${VF}[v2];[v0][v1][v2]concat=n=3:v=1:a=0[v]" \
  -map "[v]" -map 3:a \
  -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 128k -shortest \
  "$OUT"

echo "built: $OUT"
