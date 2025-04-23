import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

const Preloader = () => {
  const [ isLoading, setLoading ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
       setLoading(false);
    }, 300); // Sorry for the intentional delay
  })

  return (<>
    { !!isLoading &&
      <div className="h-screen w-screen touch-none fixed top-0 left-0 z-[1000] bg-gray-950 flex items-center justify-center">
        <LoaderCircle
          size={64}
          strokeWidth={1.5}
          className="animate-spin text-blue-200"
        />
      </div>
    }
  </>)
}

export default Preloader;
