import Image from "next/image";
import styled from "styled-components";
import bookmark from "../../public/assets/Bookmark.svg";
import film from "../../public/assets/movies.svg";
import tv from "../../public/assets/tvs.svg";

const Movie = ({ data, title }) => {
  return (
    <Recommended>
      <h2>{title}</h2>
      <div className="row">
        {data.map((data) => {
          return (
            <div className="trending" key={data.title}>
              <Video2 imgData={data.img}>
                <div className="bookmark">
                  <Image src={bookmark} alt="bookmark" />
                </div>
              </Video2>
              <div className="info">
                <div className="info-top">
                  <h1>{data.year}</h1>
                  <div className="category">
                    {title === "Movies" ? (
                      <Image src={film} alt="category" />
                    ) : null}
                    {title === "TV Series" ? (
                      <Image src={tv} alt="category" />
                    ) : null}

                    <p>{title}</p>
                  </div>
                </div>
                <div className="info-bottom">{/* <h1>{data.title}</h1> */}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Recommended>
  );
};

const Recommended = styled.div`
  margin-top: 2.4rem;
  h2 {
    font-family: "Outfit";
    font-size: "2rem";
    font-weight: 300;
    @media (min-width: 1440px) {
      font-size: 3.2rem;
    }
  }
  .trending {
    margin-top: 2.4rem;
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
        font-size: 1.1rem;
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
        font-size: 1.1rem;
        font-weight: 300;
        margin-left: 2rem;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    /* .info-bottom {
      h1 {
        margin: 0;
        font-weight: 500;
        width: 50%;
      }
    } */
  }
`;

const Video2 = styled.div`
  width: 17rem;
  height: 11rem;
  background: url(${(props) => props.imgData});
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    width: 22rem;
    height: 19.2rem;
  }
  @media (min-width: 1440px) {
    width: 28rem;
    height: 22.6rem;
    background: url(${(props) => props.imgData});
    background-size: cover;
  }
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
`;

export default Movie;
