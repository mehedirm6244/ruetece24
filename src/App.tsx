import { useState, useEffect } from 'react';
import RuetLogo from './assets/ruet_logo.png';
import CurriculumModal from './components/index/CurriculumModal';
import ResourcesModal from './components/index/ResourcesModal';
import EventsModal from './components/index/EventsModal';

const App = () => {
  const [ twText, setTwText ] = useState('');
  const [ twIdx, setTwIdx ] = useState(0);
  const twMotto: string = 'Exploring Circuits & Executables';

  const keyPressTime: number = 75;

  useEffect(() => {
    setTimeout(() => {
      if (twIdx < twMotto.length) {
        setTwText(twText + twMotto[twIdx]);
        setTwIdx(twIdx+1);
      }
    }, keyPressTime)
  });

  const typedChars = twMotto.slice(0, twIdx).split('');

  const [ showCurriculum, setShowCurriculum ] = useState(false);
  const [ showResources, setShowResources ] = useState(false);
  const [ showEvents, setShowEvents ] = useState(false);

  const links = [
    { caption: 'Curriculum', onClick: () => { setShowCurriculum(true) } },
    { caption: 'Resources', onClick: () => { setShowResources(true) } },
    { caption: 'Events', onClick: () => { setShowEvents(true) } }
  ];

  return (<>
    <div className="h-screen w-screen fixed top-0 left-0 bg-gray-950 flex flex-col justify-center items-center gap-2 p-6">
      <img
        src={RuetLogo}
        className="h-40 w-fit -mt-10"
      />
      <p className="text-blue-100 text-2xl md:text-3xl font-slab">
        {typedChars.map((char, i) => {
          const isFirstLetter =
            (i === 0 || twMotto[i - 1] === ' ') && twMotto[i] != '&';
          return (
            <span key={i} className={isFirstLetter ? 'text-blue-400 underline' : ''}>
              {char}
            </span>
          );
        })}
        <span className="animate-blink text-green-400">|</span>
      </p>

      <div className="flex flex-row flex-wrap justify-center align-middle items-center gap-2 mt-4">
        {links.map((link) => {
          return (
            <button
              className="font-medium text-sm text-blue-400 bg-blue-400/7 hover:bg-blue-400/15 border border-blue-400/15 rounded-lg px-3 py-1.5"
              onClick={link.onClick}
            >
              {link.caption}
            </button>
        )})}
      </div>
    </div>

    { !!showCurriculum &&
      <CurriculumModal onExit={() => setShowCurriculum(false)}/>
    }

    { !!showResources &&
      <ResourcesModal onExit={() => setShowResources(false)}/>
    }

    { !!showEvents &&
      <EventsModal onExit={() => setShowEvents(false)}/>
    }
  </>)
}

export default App;
