    function IconSound({ muted }) {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true">
          <path d="M5.5 15H7.8L11.5 18V6L7.8 9H5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {muted ? (
            <>
              <line x1="15" y1="9" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M15 9.5C16.4 10.6 16.4 13.4 15 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M17.5 7.5C19.7 9.4 19.7 14.6 17.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      );
    }

