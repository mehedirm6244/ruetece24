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
                <th className="p-2 font-medium text-gray-300 w-[30%]">
                  <Link size="16" className="inline -mt-0.5 mr-1.5"/>Title
                </th>
                <th className="p-2 font-medium text-gray-300 w-2/5">
                  <Info size="16" className="inline -mt-0.5 mr-1.5"/>Description
                </th>
                <th className="p-2 font-medium text-gray-300 w-3/10">
                  <Library size="16" className="inline -mt-0.5 mr-1.5"/>Type
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
                  <td className="p-2 text-gray-200">{resource.desc}</td>
                  <td className="p-2 text-gray-200">
                    <span className="bg-blue-300/5 text-blue-300 px-1 py-0.5 text-xs rounded border border-blue-200/10">
                      {resource.type}
                    </span>
                  </td>
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
                <th className="p-2 font-medium text-gray-300 w-3/10">
                  <Link size="16" className="inline -mt-0.5 mr-1.5"/>Title
                </th>
                <th className="p-2 font-medium text-gray-300 w-2/5">
                  <GraduationCap size="16" className="inline -mt-0.5 mr-1.5"/>Course
                </th>
                <th className="p-2 font-medium text-gray-300 w-3/10">
                  <Library size="16" className="inline -mt-0.5 mr-1.5"/>Type
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
                  <td className="p-2 text-gray-200 break-all">
                    <div className="flex flex-row gap-1.5 flex-wrap">
                      {resource.courses?.map((course, index) => (
                        <span key={index} className="bg-blue-300/5 text-blue-300 px-1 py-0.5 text-xs rounded border border-blue-200/10">
                          {course}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-2 text-gray-200">
                    <span className="bg-blue-300/5 text-blue-300 px-1 py-0.5 text-xs rounded border border-blue-200/10">
                      {resource.type}
                    </span>
                  </td>
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
