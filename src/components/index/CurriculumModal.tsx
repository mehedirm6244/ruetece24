import Modal from '../ui/Modal.tsx'
import { File } from 'lucide-react';
import CurriculumPdf from '../../assets/ece-undergrad-syllabus-2020.pdf';

const CurriculumModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Curriculum" onExit={onExit}>
      <div className="">
        <p>
          Download the undergraduate course curriculum of the Department of Electronics and Electrical Engineering, as of 2020 and onwards.
        </p>
        <div className="text-center mt-4">
          <a href={CurriculumPdf}>
            <button
              className="font-medium text-sm text-blue-400 bg-blue-400/7 hover:bg-blue-400/15 border border-blue-400/15 rounded-lg px-3 py-1.5"
            >
              <File size={16} className="-mt-0.5 inline mr-1" />
              Curriculum PDF
            </button>
          </a>
        
          <p className="mt-4 text-sm text-gray-300">
            Hash (md5):
            <span className="text-green-300 font-mono">ffb92e3e7ff30402fa202bc163c1428f</span>
          </p>
        </div>
      </div>
    </Modal>
  </>)
}

export default CurriculumModal;
