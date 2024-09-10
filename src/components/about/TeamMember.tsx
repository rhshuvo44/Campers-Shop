import TeamMamberCard from "./TeamMamberCard";

const TeamMember = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
         <TeamMamberCard/>
       
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
