import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import home from "../../public/assets/icon-nav-home.svg";
import homeActive from "../../public/assets/icon-nav-home-active.svg";
import film from "../../public/assets/icon-nav-movies.svg";
import filmActive from "../../public/assets/icon-nav-movies-active.svg";
import tv from "../../public/assets/icon-nav-tv-series.svg";
import tvActive from "../../public/assets/icon-nav-tv-series-active.svg";
import bookmark from "../../public/assets/icon-nav-bookmark.svg";
import bookmarkActive from "../../public/assets/icon-nav-bookmark-active.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <Wrap>
      <div className="first">
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>
            {router.pathname === "/" ? (
              <Link scroll={true} href="/" passHref>
                <a>
                  <Image src={homeActive} alt="Home" />
                </a>
              </Link>
            ) : (
              <Link scroll={true} href="/" passHref>
                <a>
                  <Image src={home} alt="Home" />
                </a>
              </Link>
            )}
          </li>
          <li>
            {router.pathname === "/movies" ? (
              <Link scroll={true} href="/movies" passHref>
                <a>
                  <Image src={filmActive} alt="Home" />
                </a>
              </Link>
            ) : (
              <Link scroll={true} href="/movies" passHref>
                <a>
                  <Image src={film} alt="Home" />
                </a>
              </Link>
            )}
          </li>
          <li>
            {router.pathname === "/tv" ? (
              <Link scroll={true} href="/tv" passHref>
                <a>
                  <Image src={tvActive} alt="Home" />
                </a>
              </Link>
            ) : (
              <Link scroll={true} href="/tv" passHref>
                <a>
                  <Image src={tv} alt="Home" />
                </a>
              </Link>
            )}
          </li>
          <li>
            {router.pathname === "/bookmark" ? (
              <Link scroll={true} href="/bookmark" passHref>
                <a>
                  <Image src={bookmarkActive} alt="Home" />
                </a>
              </Link>
            ) : (
              <Link scroll={true} href="/bookmark" passHref>
                <a>
                  <Image src={bookmark} alt="Home" />
                </a>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="second">
        <div className="avatar"></div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.nav`
  background-color: var(--color-semi-Semi-dark);
  padding: 1.8rem 1.6rem;
  display: flex;
  justify-content: space-between;
  .first {
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding-left: 0;
      li:first-child {
        margin: 0 1rem 0 0;
      }
      li {
        margin: 0 1rem;
      }
    }
  }
  .second {
    display: flex;
    justify-content: flex-end;
    .avatar {
      justify-self: flex-end;
      width: 40px;
      height: 40px;
      background-color: var(--color-dark-blue);
      border-radius: 50%;
    }
  }

  @media (min-width: 768px) {
    margin: 2.3rem 2.4rem;
    border-radius: 10px;
  }

  @media (min-width: 1440px) {
    position: fixed;
    left: 3.6rem;
    top: 40%;
    transform: translateY(-40%);
    flex-direction: column;
    align-items: center;
    height: 92%;
    padding: 3.2rem 2.7rem;
    .menu {
      ul {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      li {
        margin: 2rem 0 !important;
      }
    }
  }
`;

export default Navbar;
