import { ReactElement, useEffect, useState } from "react";

type ArgTypes = {
  caption: string,
  children: ReactElement,
  onExit: () => void;
}

const Modal = ({caption, children, onExit}: ArgTypes) => {
  const [ isClosing, setClosing ] = useState(false);

  const handleExit = () => {
    setClosing(true);
    setTimeout(() => {
      onExit();
    }, 240); // `animate-modal-out` has 250ms duration. 290ms delay to avoid flickering
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleExit]);

  return (
    // Backdrop
    <div
      className={`
        fixed top-0 left-0 h-screen w-screen touch-none z-40 flex justify-center items-center ${isClosing ? 'backdrop-blur-none bg-black/0' : 'backdrop-blur-xs bg-gray-900/30'}
      `}
      onClick={handleExit}
      >
      {/* Modal */}
      <div
        className={`
          bg-gray-900 relative border sm:max-h-[90%] border-gray-100/15 sm:rounded-lg shadow-md overflow-hidden w-full sm:w-lg md:w-xl  ${isClosing ? 'animate-modal-out' : 'animate-modal-in'}
        `}
        onClick={(e) => { e.stopPropagation(); }}
        >
        {/* Title Bar */}
        <div className="bg-gray-800 p-3 sm:p-2 flex flex-row justify-between items-center sticky top-0 left-0 w-full shadow-sm">
          <p className="px-2">{caption}</p>
          <button
            className="bg-blue-300/10 hover:bg-blue-300/20 border border-blue-300/20 px-1.5 py-0.5 rounded-md text-xs text-blue-300"
            onClick={handleExit}
            >
            esc
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 max-h-[calc(100vh-3rem)] sm:max-h-[calc(90vh-3rem)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;
