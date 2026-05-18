import React, { useCallback, useRef, useState } from 'react'
import { PlayCircleFilled } from '@ant-design/icons'
import { VIDEO_AVATAR_TAG } from './consts'
import styles from './styles.module.css'

const VideoAvatar: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayback = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video.play()
    } else {
      video.pause()
    }
  }, [])

  const handleEnded = useCallback(() => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
    }
    setIsPlaying(false)
  }, [])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        togglePlayback()
      }
    },
    [togglePlayback],
  )

  return (
    <div
      className={styles.container}
      aria-label="Anna Gevorgyan video avatar"
      role="button"
      tabIndex={0}
      onClick={togglePlayback}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.tag}>{VIDEO_AVATAR_TAG}</span>
      <video
        ref={videoRef}
        className={styles.video}
        src="/avatar.mp4"
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
      />
      {!isPlaying && (
        <PlayCircleFilled className={styles.playIcon} aria-hidden />
      )}
    </div>
  )
}

export default VideoAvatar
