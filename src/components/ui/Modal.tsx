import { ReactElement, useEffect } from "react";

type ArgTypes = {
  caption: string,
  children: ReactElement,
  onExit: () => void;
}

const Modal = ({caption, children, onExit}: ArgTypes) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onExit]);

  return (
    // Backdrop
    <div
      className="fixed top-0 left-0 h-screen w-screen touch-none bg-black/30 z-[500] flex justify-center items-center backdrop-blur-xs"
      onClick={onExit}
    >
      {/* Modal */}
      <div
        className="bg-gray-900 relative sm:border max-h-screen border-white/15 sm:rounded-lg shadow-md overflow-hidden w-full sm:w-lg md:w-xl"
        onClick={(e) => { e.stopPropagation(); }}
      >
        {/* Title Bar */}
        <div className="bg-gray-800 p-3 sm:p-2 flex flex-row justify-between items-center absolute top-0 left-0 w-full">
          <p className="px-2">{caption}</p>
          <button
            className="bg-blue-400/15 hover:bg-blue-400/20 border border-blue-400/30 px-1.5 py-1 rounded-md text-xs"
            onClick={onExit}
          >
            esc
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 max-h-screen overflow-auto pt-16">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;
