import React, { useState } from "react";
import PropTypes from "prop-types";
import ImgTemp from "../assets/temp-1.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";

//youtube
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

//modal
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  //
  const [trailerKey, setTrailerKey] = useState("");

  //trailer
  const handleTrailer = async (id) => {
    //reset cái cũ
    setTrailerKey(""); //cho cái key rỗng -> gọi api -> truyền key -> mở modal

    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.log(error);
    }
  };

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-xl mb-4 uppercase">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {/* > 0: có giá trị ; => {phải có return}  , (viết thẳng html đc)*/}
        {data && data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              // onClick={handleTrailer}
              onClick={() => handleTrailer(item.id)} //này là cách truyền đối số cho function
              //còn nếu muốn xài thuộc tính sẵn có thì {handleTrailer} hoặc  (e) => handleTrailer()
              className="w-[200px] h-[300px] relative group"
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>

      {/* modal, để ngoài map cho đỡ render nhièu lần */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
