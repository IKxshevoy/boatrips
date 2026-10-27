"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./tourClient.module.scss";

interface VideoFacadeProps {
  youtubeId: string;
  poster: string;
  title: string;
}

/** Lightweight YouTube embed: the heavy iframe loads only on click. */
const VideoFacade = ({ youtubeId, poster, title }: VideoFacadeProps) => {
  const t = useTranslations("tour_ui");
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.video}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.videoPoster}
          onClick={() => setPlaying(true)}
          aria-label={`${t("play_video")}: ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={styles.cover}
          />
          <span className={styles.play} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoFacade;
