const CourseCard = ({ course }) => {
  const {
    title,
    students,
    lessons,
    status,
    image,
    isDraft,
    actionText,
  } = course;

  return (
    <div className="bg-[#14532D]  rounded-lg shadow-sm border border-[#e5eeee]  overflow-hidden group hover:shadow-md transition-shadow">
      
      {/* Image */}
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#013621] flex items-center justify-center">
            <span className="material-symbols-outlined lg:text-2xl text-lg text-white/20">
              {title}
            </span>
          </div>
        )}

        <span
          className={`absolute top-3 left-3 text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wider
          ${status === "Published"
            ? "bg-teal-500/90 text-white"
            : "bg-amber-warm/90 text-[#0d1c1c]"}`}
        >
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-terracotta transition-colors">
          {title}
        </h3>

        <div className="flex gap-4 text-sm text-[#499c9c] mb-6">
          <span className="flex items-center gap-1">
            
            {students} Students
          </span>
          <span className="flex items-center gap-1">
            
            {lessons} Lessons
          </span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-[#e5eeee]">
          <div className="flex gap-2">
            <button className="icon-btn border-2 border-white bg-white rounded-md px-4">
              <span className="material-symbols-outlined  text-[#14532D]">edit</span>
            </button>
            <button className="icon-btn border-2 border-white bg-red-800 rounded-md px-4">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>

          <button className="text-sm font-bold text-teal-deep hover:underline">
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
