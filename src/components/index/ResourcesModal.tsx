import Modal from '../ui/Modal.tsx'
import { Link, Info, Library, GraduationCap } from 'lucide-react';
import { ResourceData, CourseResourceData } from './ResourceData.ts';

const ResourcesModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Books and Resources" onExit={onExit}>
      <div>

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
                      className=""
                    >
                      {resource.title}
                    </a>
                  </td>
                  <td className="p-2 text-gray-200">{resource.type}</td>
                  <td className="p-2 text-gray-200 break-all">{resource.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Coursewise resources */}
          <p className="px-2 pb-1 text-lg text-slate-300 mt-6">
            <GraduationCap
              size={20}
              className="inline mr-2 -mt-0.5"
            />
            Course Specific Resources
          </p>

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
                  <GraduationCap size="16" className="inline -mt-0.5 mr-1"/>Course
                </th>
              </tr>
            </thead>
            <tbody>
              {CourseResourceData.map((resource, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/40 text-sm">
                  <td className="p-2 text-gray-200">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {resource.title}
                    </a>
                  </td>
                  <td className="p-2 text-gray-200">{resource.type}</td>
                  <td className="p-2 text-gray-200 break-all">{resource.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
      </div>
    </Modal>
  </>)
}

export default ResourcesModal;
