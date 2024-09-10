const TeamMemberCard = () => {
  return (
    
      <div className="max-w-xs rounded-2xl border bg-white p-10 text-center shadow-lg">
        <img
          className="mx-auto mb-4  rounded-full shadow-lg"
          src="https://i.pravatar.cc/200"
          alt="profile picture"
        />
        <h1 className="text-xl font-semibold text-slate-800">Charlie Doe</h1>
        <h2 className="font-semibold text-slate-500">UI/UX Designer</h2>
        {/* <span className="inline-block">
          <a href="#">
            <i className="fa-brands fa-linkedin text-slate-500 hover:text-slate-800"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter text-slate-500 hover:text-slate-800"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github text-slate-500 hover:text-slate-800"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-codepen text-slate-500 hover:text-slate-800"></i>
          </a>
        </span> */}
        <p className="mt-8 text-sm font-normal text-slate-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* <button className="mt-8 rounded-3xl border-2 border-solid border-violet-900 px-8 py-2 font-semibold uppercase tracking-wide text-violet-900 hover:bg-violet-900 hover:text-white">
          Hire me
        </button> */}
      </div>
    
  );
};

export default TeamMemberCard;
