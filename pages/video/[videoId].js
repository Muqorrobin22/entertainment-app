import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

const Video = () => {
  const router = useRouter();

  const pathId = router.query.videoId;

  Modal.setAppElement("#__next");

  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={() => {
          router.back();
        }}
        contentLabel="Example Modal"
        overlayClassName={styles.overlay}
        className={styles.modal}
      >
        <div>Modal Body</div>
      </Modal>
    </div>
  );
};

export default Video;
