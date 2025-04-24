import Modal from '../ui/Modal.tsx'

const EventsModal = ({onExit} : {onExit: () => void}) => {
  return (<>
    <Modal caption="Events" onExit={onExit}>
      <p>Nothing interesting to see here.</p>
    </Modal>
  </>)
}

export default EventsModal;
