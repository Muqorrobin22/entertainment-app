import InputCustom from "../components/input/input";
import data from "../public/data.json";
import Movie from "../components/cardMovie/Movie";
import VideosData from "../lib/videos";

export async function getServerSideProps() {
  const Movies = await VideosData("Movie");
  return {
    props: { Movies },
  };
}

const Film = ({ Movies }) => {
  return (
    <div>
      <InputCustom placeholder="Search for Movies" />
      <Movie data={Movies} title="Movies" />
    </div>
  );
};

export default Film;
