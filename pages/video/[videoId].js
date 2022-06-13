import { useRouter } from "next/router";
import Modal from "react-modal";
import { getYoutubeVideoId } from "../../lib/videos";
import styles from "../../styles/Video.module.css";

export async function getStaticProps(context) {
  // const video = {
  //   title: "Hi Trending",
  //   publishTime: "1990-01-01",
  //   description: " lorem epsum fjksla;fjasfffff ",
  //   channelTitle: "paramount",
  //   viewCount: 10000,
  // };
  console.log(context);
  const videoId = context.params.videoId;
  const videoArray = await getYoutubeVideoId(videoId);

  console.log(videoArray);
  return {
    props: {
      video: videoArray.length > 0 ? videoArray[0] : {},
    },

    revalidate: 10,
  };
}

// TODO ADD GETSTATICPATHS
export async function getStaticPaths() {
  const listOfVideos = [];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  return { paths, fallback: "blocking" };
}

const Video = ({ video }) => {
  const router = useRouter();

  const pathId = router.query.videoId;

  Modal.setAppElement("#__next");

  const { title, publishTime, description, channelTitle, viewCount } = video;
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
        <iframe
          id="ytplayer"
          type="text/html"
          className={styles.videoPlayer}
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${pathId}?autoplay=0&origin=http://example.com&controls=0`}
          frameBorder="0"
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}> {publishTime} </p>
              <p className={styles.title}> {title} </p>
              <p className={styles.description}> {description} </p>
            </div>
            <div className={styles.col2}>
              <p className={styles.subText}>
                <span> ViewCount : </span>
                <span className={styles.channelTitle}> {viewCount} </span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
