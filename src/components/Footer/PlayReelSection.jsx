"use client";

import { useRef, useState } from "react";
import { IoCloudUpload, IoLink, IoClose } from "react-icons/io5";

const PlayButton = "/images/PlayButton.svg";

const getEmbedUrl = (url) => {
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }
  if (url.includes("youtube.com/shorts/")) {
    const videoId = url.split("/shorts/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }
  return null;
};

const isLocalVideo = (url) => url?.startsWith("blob:");

const isYouTube = (url) =>
  url?.includes("youtube.com") || url?.includes("youtu.be");

const getSocialPlatform = (url) => {
  if (!url) return null;
  if (url.includes("facebook.com")) return { name: "Facebook", color: "#1877F2" };
  if (url.includes("instagram.com")) return { name: "Instagram", color: "#F03745" };
  if (url.includes("linkedin.com")) return { name: "LinkedIn", color: "#0A66C2"};
  if (url.includes("x.com") || url.includes("twitter.com")) return { name: "X (Twitter)", color: "#000000" };
  return null;
};

export default function PlayReelSection() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkValue, setLinkValue] = useState("");
  const videoRef = useRef(null);

  const handleVideoUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setVideoUrl(URL.createObjectURL(file));
        setIsPlaying(false);
      }
    };
    input.click();
  };

  const handleLinkSubmit = () => {
    if (linkValue.trim()) {
      setVideoUrl(linkValue.trim());
      setLinkValue("");
      setShowLinkInput(false);
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRemove = () => {
    setVideoUrl(null);
    setIsPlaying(false);
  };

  const embedUrl = isYouTube(videoUrl) ? getEmbedUrl(videoUrl) : null;
  const socialPlatform = !isLocalVideo(videoUrl) && !isYouTube(videoUrl) ? getSocialPlatform(videoUrl) : null;

  return (
    <div>
      <div className="relative w-[220px] h-[165px] rounded-[16px] overflow-hidden bg-gray-800">
        {videoUrl ? (
          <>
            {isLocalVideo(videoUrl) ? (
              <>
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                  onClick={handlePlayPause}
                >
                  <div className="w-12 h-12 bg-[#8CE100] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-black text-xl">{isPlaying ? "⏸" : "▶"}</span>
                  </div>
                </div>
              </>
            ) : embedUrl ? (
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  src={embedUrl}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: "177.78%",
                    height: "177.78%",
                    transform: "translate(-50%, -50%)",
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : socialPlatform ? (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: socialPlatform.color }}
              >
                <span className="text-white text-2xl font-bold">{socialPlatform.name}</span>
                <span className="text-white/80 text-xs px-3 text-center">Click to open</span>
              </a>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900 p-3">
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8CE100] text-xs text-center underline break-all"
                >
                  {videoUrl}
                </a>
              </div>
            )}

            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors z-10"
            >
              <IoClose size={12} />
            </button>
          </>
        ) : showLinkInput ? (
          <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center gap-2 p-3">
            <input
              type="url"
              placeholder="Paste video link..."
              value={linkValue}
              onChange={(e) => setLinkValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLinkSubmit()}
              className="w-full px-2 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20 focus:border-[#8CE100] focus:outline-none placeholder-white/30"
              autoFocus
            />
            <p className="text-white/30 text-[10px] text-center">
              YouTube embeds • Facebook/Instagram/X opens in new tab
            </p>
            <div className="flex gap-2 w-full">
              <button
                onClick={handleLinkSubmit}
                disabled={!linkValue.trim()}
                className="flex-1 py-1 bg-[#8CE100] text-black text-xs rounded-lg disabled:opacity-40"
              >
                Add
              </button>
              <button
                onClick={() => { setShowLinkInput(false); setLinkValue(""); }}
                className="flex-1 py-1 bg-white/10 text-white text-xs rounded-lg hover:bg-white/20"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-700 flex flex-col items-center justify-center gap-3">
            <button
              onClick={handleVideoUpload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#8CE100] text-black text-xs rounded-full hover:bg-[#7CCE00] transition-colors"
            >
              <IoCloudUpload size={13} /> Upload
            </button>
            <button
              onClick={() => setShowLinkInput(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-xs rounded-full hover:bg-white/20 transition-colors"
            >
              <IoLink size={13} /> Add Link
            </button>
          </div>
        )}
      </div>

      <button
        className="flex items-center gap-2 mt-4 text-white text-[16px] font-medium hover:text-[#8CE100] transition-colors"
        onClick={isLocalVideo(videoUrl) ? handlePlayPause : undefined}
      >
        <img src={PlayButton} alt="" className="w-[13px] h-[14px]" />
        Play Reel
      </button>
    </div>
  );
}
