import React from "react";

export default function VideoThree() {
  return (
    <div className="tp-video-3-area">
      <div className="tp-video-3-wrap p-relative">
        <video
          data-speed=".7"
          className="play-video"
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
        >
          <source
            src="/assets/video/Treppan%20Serenique%20Residences%20By%20Fakhruddin%20Properties%20%20%20Dubai%20Islands.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
