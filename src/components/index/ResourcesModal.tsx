import Modal from '../ui/Modal.tsx'
import { Link, Info, Library } from 'lucide-react';
import { ResourceData } from './ResourceData.ts';

const ResourcesModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Books and Resources" onExit={onExit}>
      {/* Useful links */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse table-auto">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-2 font-medium text-gray-300">
                <Link size="16" className="inline -mt-0.5 mr-1"/>Title
              </th>
              <th className="p-2 font-medium text-gray-300">
                <Library size="16" className="inline -mt-0.5 mr-1"/>Type
              </th>
              <th className="p-2 font-medium text-gray-300">
                <Info size="16" className="inline -mt-0.5 mr-1"/>Desc
              </th>
            </tr>
          </thead>
          <tbody>
            {ResourceData.map((resource, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/40 text-sm">
                <td className="p-2 text-gray-200">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all"
                  >
                    {resource.title}
                  </a>
                </td>
                <td className="p-2 text-gray-200">{resource.type}</td>
                <td className="p-2 text-gray-200">{resource.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  </>)
}

export default ResourcesModal;
