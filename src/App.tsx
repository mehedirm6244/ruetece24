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
  const keyPressTime: number = 100;
  const typedChars = twMotto.slice(0, twIdx).split('');

  // Lol I should prolly learn DB or smth idk
  const nicknames = [
    'Koushik', 'Rafat', 'Fariha', 'Mahdi', 'Azmain', 'Smriti', 'Tareq', 'Proma', 'Simum',
    'Nice', 'Shabib', 'Araf', 'Musfikur', 'Shefat', 'Rakib', 'Tasnim', 'Sami', 'Sharmista',
    'Shams', 'Shadib', 'Ittihad', 'Abu Bokkor', 'Mahi', 'Samin', 'Sarah', 'Abdullah', 'Uddipon',
    'Siam', 'Nidhi', 'Mashrafee', 'Subhayon', 'Aminul', 'Hasibul', 'Ifaz', 'Jarin', 'Nafis',
    'Tamim', 'Sakib', 'Israq', 'Tirtho', 'Abujar', 'Rafi', 'Shihab', 'Aysha', 'Suchok', 'Emon',
    'Hamidur', 'Niloy', 'Sayma', 'Preety', 'Oleen', 'Abdullah', 'Rafin', 'Fazle', 'Sohan', 'Imran',
    'Tamjid', 'Shammo', 'Amir'
  ];
  const [currentName, setCurrentName] = useState('..');
  const nameSwitchDelay = 350;

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

  // Typing effect
  useEffect(() => {
    if (twIdx < twMotto.length) {
      const timeout = setTimeout(() => {
        setTwText(twText + twMotto[twIdx]);
        setTwIdx(twIdx => twIdx + 1);
      }, keyPressTime);

      return () => clearTimeout(timeout);
    }
  }, [twIdx]);

  // Name switcher – run independently
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * nicknames.length);
      setCurrentName(nicknames[randomIndex]);
    }, nameSwitchDelay);

    return () => clearInterval(interval);
  }, []);

  return (<>
    {/* Logo */}
    <div
      className="min-h-screen min-w-screen flex flex-col justify-center items-center gap-2 p-6"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='100%25' height='100%25' fill='%23030914'/%3E%3Cpath d='M 20 0 H 0 V 20' fill='none' stroke='%23071329' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
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
              className="text-sm text-blue-400 bg-blue-400/7 hover:bg-blue-400/15 border border-blue-400/15 rounded-lg px-3 py-1.5 backdrop-blur-sm"
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
      <div className="mt-8 text-gray-300 font-slab font-medium">
        Powered by&#32;&nbsp;
        <span className="font-mono text-sm">
          ~/ECE/24/&apos;
          <span className="text-blue-300">{currentName}</span>
          &apos;
        </span>
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
