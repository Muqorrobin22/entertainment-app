import InputCustom from "../components/input/input";
import Image from "next/image";
import styled from "styled-components";
import bookmark from "../public/assets/Bookmark.svg";
import film from "../public/assets/movies.svg";
import tv from "../public/assets/tvs.svg";
import { useContext } from "react";
import MoviesContext from "../store/movies-context";

const Film = () => {
  const context = useContext(MoviesContext);

  return (
    <div>
      <InputCustom placeholder="Search for Movies" />
      <Recommended2>
        <h1>Movies</h1>
        <div className="row">
          {context.filterData.length !== 0 &&
            context.filterData.map((data) => {
              return (
                data.category === "Movie" && (
                  <div className="trending" key={data.title}>
                    <Video2 imgData={data.thumbnail.regular}>
                      <div className="bookmark">
                        <Image src={bookmark} alt="bookmark" />
                      </div>
                    </Video2>
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
                  </div>
                )
              );
            })}
        </div>
      </Recommended2>
    </div>
  );
};

const Recommended2 = styled.div`
  margin-top: 2.4rem;
  h1 {
    font-family: "Outfit";
    font-size: "2rem";
    font-weight: 300;
  }
  .trending {
    margin-top: 2.4rem;
    margin-left: 1.2rem;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  .info {
    font-family: "Outfit";

    font-weight: 300;
    .info-top {
      display: flex;
      align-items: center;
      h1 {
        font-size: 1.3rem;
        font-weight: 300;
      }
      .category {
        display: flex;
        font-size: 1.1rem;
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
        font-size: 1.3rem;
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

const Video2 = styled.div`
  width: 20rem;
  height: 13rem;
  background: url(${(props) => props.imgData.small});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  position: relative;
  @media (min-width: 768px) {
    width: 22rem;
    height: 19.2rem;
  }
  @media (min-width: 1440px) {
    width: 28rem;
    height: 22.6rem;
  }
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
    cursor: pointer;
  }
`;

export default Film;
