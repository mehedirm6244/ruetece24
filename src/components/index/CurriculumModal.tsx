import Modal from '../ui/Modal.tsx'
import { File } from 'lucide-react';

const CurriculumModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Curriculum" onExit={onExit}>
      <div className="">
        <p>
          Download the undergraduate course curriculum of the Department of Electronics and Electrical Engineering, as of 2020 and onwards, from here:
        </p>
        <div className="flex justify-center flex-wrap mt-4">
        <button
          className="font-medium text-sm text-blue-400 bg-blue-400/7 hover:bg-blue-400/15 border border-blue-400/15 rounded-lg px-3 py-1.5"
        >
          <a href="https://ruet.ac.bd/public/storage/files/ece-undergraduate-syllabus-from-2020-series_1726484116.pdf">
            <File size={16} className="-mt-0.5 inline mr-1" />
            Curriculum PDF
          </a>
        </button>
        </div>
      </div>
    </Modal>
  </>)
}

export default CurriculumModal;
