import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import data from "../public/data.json";
import bookmark from "../public/assets/Bookmark.svg";
import film from "../public/assets/movies.svg";
import tv from "../public/assets/tvs.svg";
import ScrollContainer from "react-indiana-drag-scroll";
import InputCustom from "../components/input/input";
import Movie from "../components/cardMovie/Movie";

export default function Home() {
  // console.log(data);
  const Mydata = [...data];
  return (
    <div>
      <Head>
        <title>Entertainment - app</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <InputCustom placeholder="Search for Movies or Tv Series" />
      <Trending>
        <h1>Trending</h1>
        <ScrollContainer
          className="scroll-container"
          vertical={false}
          horizontal={true}
        >
          {Mydata.map((data) => {
            return (
              data.isTrending && (
                <div className="trending" key={data.title}>
                  <Video imgData={data.thumbnail.trending}>
                    <div className="bookmark">
                      <Image src={bookmark} alt="bookmark" />
                    </div>
                    <div className="info">
                      <div className="info-top">
                        <h1>{data.year}</h1>
                        <div className="category">
                          {data.category === "Movie" ? (
                            <Image src={film} alt="category" />
                          ) : (
                            <Image src={tv} alt="category" />
                          )}
                          <p>{data.category}</p>
                        </div>
                        <p>{data.rating}</p>
                      </div>
                      <div className="info-bottom">
                        <h1>{data.title}</h1>
                      </div>
                    </div>
                  </Video>
                </div>
              )
            );
          })}
        </ScrollContainer>
      </Trending>
      <Movie />
    </div>
  );
}

const Trending = styled.div`
  margin-top: 2.4rem;
  h1 {
    font-family: "Outfit";
    font-size: "2rem";
    font-weight: 300;
  }
  .trending {
    margin-top: 1.6rem;
    margin-left: 1.6rem;
  }
`;

const Video = styled.div`
  width: 24rem;
  height: 14rem;
  background: url(${(props) => props.imgData.small});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  position: relative;
  .bookmark {
    background-color: #5a698f;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5%;
    top: 5%;
  }
  .info {
    font-family: "Outfit";
    position: absolute;
    left: 5%;
    bottom: 5%;
    font-weight: 300;
    .info-top {
      display: flex;
      align-items: center;
      h1 {
        font-size: 1.2rem;
        font-weight: 300;
      }
      .category {
        display: flex;
        font-size: 1.2rem;
        font-weight: 300;
        margin-left: 2rem;
        align-items: center;
        p {
          margin-top: 0;
          margin-bottom: 0;
          margin-left: 0.6rem;
        }
      }
      p {
        font-size: 1.2rem;
        font-weight: 300;
        margin-left: 2rem;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    .info-bottom {
      h1 {
        margin: 0;
        font-weight: 500;
      }
    }
  }
`;
