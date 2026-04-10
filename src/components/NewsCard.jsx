import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = new Date(
    author.published_date || Date.now()
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mb-8 bg-white border border-gray-100 flex flex-col">
      {/* Decorative gradient blur in background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 opacity-50 z-0"></div>
      
      {/* Actual content z-index elevated */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Author + Share Top Bar */}
        <div className="flex bg-white/60 backdrop-blur-md justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 ring-2 ring-transparent group-hover:ring-pink-300 transition-all duration-300">
                <img src={author.img} alt={author.name} className="object-cover" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-sm text-gray-800 tracking-wide">{author.name}</h2>
              <p className="text-xs text-gray-500 font-medium">{formattedDate}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-pink-500 transition-colors flex gap-3 text-lg items-center">
            <FaRegBookmark className="cursor-pointer hover:scale-110 transition-transform" />
            <FaShareAlt className="cursor-pointer hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Title */}
        <div className="px-5 py-4">
          <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300 cursor-pointer leading-tight">
            {title}
          </h2>
        </div>

        {/* Image Display */}
        <div className="px-5 py-1 relative">
          <div className="overflow-hidden rounded-xl shadow-inner relative">
             <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Details text */}
        <div className="px-5 py-3 text-gray-600 text-sm leading-relaxed flex-grow">
          {details.length > 180 ? (
            <>
              {details.slice(0, 180)}...
              <span className="text-pink-500 font-bold ml-1 cursor-pointer hover:underline">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </div>

        {/* Footer Area */}
        <div className="mt-auto flex justify-between items-center px-6 py-4 bg-gray-50/80 border-t border-gray-100 backdrop-blur-sm rounded-b-2xl">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex text-amber-500 opacity-90 drop-shadow-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < Math.round(rating?.number || 0) ? "" : "text-gray-300"} />
                ))}
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-700 bg-white px-2 py-0.5 rounded-md shadow-sm border border-gray-100">{rating?.number || 'N/A'}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600 font-medium bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
            <FaEye className="text-blue-400 text-lg" />
            <span className="text-sm">{total_view || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
