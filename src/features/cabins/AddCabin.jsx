import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
    </div>
  );
  // const [isOpenModal, SetIsOpenModal] = useState(false);
  // return (
  //   <div>
  //     <Button onClick={() => SetIsOpenModal((show) => !show)}>
  //       {isOpenModal ? "Close form" : "Add new cabin"}
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => SetIsOpenModal(false)}>
  //         <CreateCabinForm onCloseModal={() => SetIsOpenModal(false)}/>
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddCabin;
