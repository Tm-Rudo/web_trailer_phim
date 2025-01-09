import React from "react";
import PropType from "prop-types";
const MovieSearch = (title, data) => {
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-xl mb-4 uppercase">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              // onClick={handleTrailer}

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
      </div>
    </div>
  );
};

// MovieSearch.PropType = {
//   title: PropType.string,
//   data: PropType.array,
// };

MovieSearch.propTypes = {
  title: PropType.string,
  data: PropType.array,
};

export default MovieSearch;
