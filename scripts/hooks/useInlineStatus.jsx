    function useInlineStatus() {
      const [status, setStatus] = useState(null);
      const api = { show: (type, text) => setStatus({type, text}), clear: () => setStatus(null) };
      const node = status ? (
        <div role="status" aria-live="polite" className={"fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-sm " + (status.type === 'ok' ? 'bg-emerald-500 text-black' : status.type === 'error' ? 'bg-rose-500 text-white' : 'bg-white text-black')}>
          {status.text}
        </div>
      ) : null;
      return [node, api];
    }

