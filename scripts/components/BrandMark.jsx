    function BrandMark({ size = null, className = '' }) {
      return <img src={LOGO_URL} {...(typeof size==='number'?{width:size,height:size}:{})} alt="L'AInga logo" className={"inline-block object-contain " + className} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=LOGO_URL;}} />;
    }

