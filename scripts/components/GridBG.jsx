    const GridBG = memo(function GridBG() {
      return (
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <radialGradient id="glow" cx="50%" cy="10%" r="70%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="800" height="600" fill="url(#glow)" />
          <g stroke="white" strokeOpacity="0.06">
            {Array.from({ length: 21 }).map((_, i) => (<line key={i} x1={i * 40} y1="0" x2={i * 40} y2="600" />))}
            {Array.from({ length: 16 }).map((_, i) => (<line key={i} x1="0" y1={i * 40} x2="800" y2={i * 40} />))}
          </g>
        </svg>
      );
    });

