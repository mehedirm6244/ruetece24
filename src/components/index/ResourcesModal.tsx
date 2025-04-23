import Modal from '../ui/Modal.tsx'

const ResourcesModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Books and Resources" onExit={onExit}>
      <p>Coming soon...</p>
    </Modal>
  </>)
}

export default ResourcesModal;
