import Modal from '../ui/Modal.tsx'
import { Calendar, Star } from 'lucide-react';
import { EventData } from './EventData.ts';

const EventsModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Events" onExit={onExit}>
      {/* Useful links */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse table-auto">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-2 font-medium text-gray-300">
                <Star size="16" className="inline -mt-0.5 mr-1"/>Event
              </th>
              <th className="p-2 font-medium text-gray-300">
                <Calendar size="16" className="inline -mt-0.5 mr-1"/>Date
              </th>
            </tr>
          </thead>
          <tbody>
            {EventData.map((event, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/40 text-sm">
                <td className="p-2 text-gray-200">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all"
                  >
                    {event.title}
                  </a>
                </td>
                <td className="p-2 text-gray-200">{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  </>)
}

export default EventsModal;
