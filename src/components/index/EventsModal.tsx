import Modal from '../ui/Modal.tsx'

const EventsModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Events" onExit={onExit}>
      <p>Coming soon...</p>
    </Modal>
  </>)
}

export default EventsModal;
