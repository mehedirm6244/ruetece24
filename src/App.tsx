import { useState, useEffect } from 'react';
import { Book, GraduationCap, Calendar } from 'lucide-react';
import RuetLogo from './assets/ruet_logo.png';
import CurriculumModal from './components/index/CurriculumModal';
import ResourcesModal from './components/index/ResourcesModal';
import EventsModal from './components/index/EventsModal';

const App = () => {
  const [ twText, setTwText ] = useState('');
  const [ twIdx, setTwIdx ] = useState(0);
  const twMotto: string = 'Exploring Circuits & Executables';

  const keyPressTime: number = 80;

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
    {
      caption: 'Curriculum',
      onClick: () => { setShowCurriculum(true) },
      icon: Book
    },
    {
      caption: 'Resources',
      onClick: () => { setShowResources(true) },
      icon: GraduationCap
    },
    {
      caption: 'Events',
      onClick: () => { setShowEvents(true) },
      icon: Calendar
    }
  ];

  return (<>
    {/* Logo */}
    <div className="min-h-screen min-w-screen bg-gray-950 flex flex-col justify-center items-center gap-2 p-6">
      <img
        src={RuetLogo}
        className="drop-shadow w-40 md:w-44"
      />
      <p className="text-blue-100 text-2xl md:text-3xl font-slab">
        {typedChars.map((char, i) => {
          const isFirstLetter =
            (i === 0 || twMotto[i - 1] === ' ') && twMotto[i] != '&';
          return (
            <span
              key={i}
              className={isFirstLetter ? 'text-blue-400 border-b-2 border-b-blue-400' : ''}>
              {char}
            </span>
          );
        })}
        <span className="animate-blink text-green-400">|</span>
      </p>

      {/* Quick Links */}
      <div className="flex flex-row flex-wrap justify-center align-middle items-center gap-2 mt-3">
        {links.map((link, i) => {
          return (
            <button key={i}
              className="text-sm text-blue-400 bg-blue-400/7 hover:bg-blue-400/15 border border-blue-400/15 rounded-lg px-3 py-1.5"
              onClick={link.onClick}
            >
              <link.icon
                size={16}
                className="inline -mt-0.5 mr-1"
              />
              {link.caption}
            </button>
        )})}
      </div>

      {/* Credits */}
      <div className="mt-8 text-gray-300 font-slab">
        <span className="text-yellow-300">&lt;</span>
        Powered by <span className="text-blue-400">ECE &apos;24</span>
        <span className="text-yellow-300">&gt;</span>
      </div>
    </div>

    {/* Modals */}
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
