import Movie from "../components/cardMovie/Movie";
import InputCustom from "../components/input/input";
import VideosData from "../lib/videos";

export async function getServerSideProps() {
  const Series = await VideosData("Series");
  return {
    props: { Series },
  };
}

const Tv = ({ Series }) => {
  return (
    <div>
      <InputCustom placeholder="Search for TV Series" />
      <Movie data={Series} title="TV Series" />
    </div>
  );
};

export default Tv;
