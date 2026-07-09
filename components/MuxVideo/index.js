import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function MuxVideo({
  autoPlay = false,
  caption,
  controls = false,
  id,
  loop = true,
  preload = true,
  playsInline = false,
  poster,
  muted = true,
  width,
  height,
  className,
}) {
  const playerRef = useRef(null)

  const posterSrc =
    poster == undefined
      ? undefined
      : `https://image.mux.com/${id}/thumbnail.webp?time=${poster}`

  const src = `https://stream.mux.com/${id}.m3u8`

  useEffect(() => {
    let hls

    function _initPlayer() {
      if (hls != null) {
        hls.destroy()
      }

      const newHls = new Hls({
        enableWorker: false
      })

      if (playerRef.current != null) {
        newHls.attachMedia(playerRef.current)
      }

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(src)

        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            playerRef?.current
              ?.play()
              .catch(() => {
                console.log("Unable to autoplay prior to user interaction with the DOM")
              })
          }
        })
      })

      newHls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError()
              break
            default:
              _initPlayer()
              break
          }
        }
      })

      hls = newHls
    }

    if (Hls.isSupported()) {
      _initPlayer()
    }

    return () => {
      if (hls != null) {
        hls.destroy()
      }
    }
  }, [autoPlay, playerRef, src])

  const props = {
    autoPlay,
    className,
    playsInline,
    loop,
    controls,
    width,
    height,
    poster: posterSrc,
    muted,
    preload: preload ? "auto" : "none",
    suppressHydrationWarning: true
  }

  const videoElement = Hls.isSupported() ? <video ref={playerRef} {...props} /> : <video
    ref={playerRef}
    src={src}
    {...props}
  />

  return (
    <figure>
      {videoElement}

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
