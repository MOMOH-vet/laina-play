    function Input({ label, name, id, type = 'text', autoComplete, ...props }) {
      const inputId = id ?? name;
      return (
        <label className="block" htmlFor={inputId}>
          <span className="text-sm text-slate-300">{label}</span>
          <input id={inputId} name={name} type={type} autoComplete={autoComplete ?? (type === 'email' ? 'email' : name)} {...props}
            className="mt-1 w-full p-3 rounded-xl bg-white/5 ring-1 ring-white/10 focus:outline-none" />
        </label>
      );
    }

