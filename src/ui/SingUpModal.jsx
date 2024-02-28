import SingUpForm from "../features/authentication/SingUpForm"
import Button from "./Button"
import Modal from "./Modal"

function SingUpModal({ children, type, variation, size }) {
  return (
    <Modal>
      <Modal.Open opens='signup'>
        <Button $variation={variation}
          $size={size}>{children}</Button>
      </Modal.Open>
      <Modal.Window name='signup'>
        <SingUpForm type={type} />
      </Modal.Window>
    </Modal>
  )
}

export default SingUpModal
