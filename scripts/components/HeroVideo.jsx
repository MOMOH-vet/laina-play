    function HeroVideo() {
      const videoRef = useRef(null);
      const [muted, setMuted] = useState(true);

      useEffect(() => {
        if (videoRef.current) {
          videoRef.current.muted = muted;
        }
      }, [muted]);

      const toggleMute = useCallback(() => {
        const next = !muted;
        setMuted(next);
        const video = videoRef.current;
        if (video) {
          video.muted = next;
          if (!next) {
            video.play().catch(() => {});
          }
        }
      }, [muted]);

      return (
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl ring-1 ring-white/10 overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={`${HERO_VIDEO_URL}?v=2`}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-black/55"
              aria-label={muted ? 'Включить звук' : 'Выключить звук'}
            >
              <IconSound muted={muted} />
            </button>
          </div>
        </div>
      );
    }
