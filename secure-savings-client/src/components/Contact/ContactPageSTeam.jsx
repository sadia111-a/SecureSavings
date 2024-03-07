const ContactPageSTeam = () => {
  return (
    <>
      <div className="mt-20 mb-3">
        <h1 className="md:text-5xl text-3xl text-dark dark:text-white font-semibold text-center">
          Get in touch with our creator-friendly <br /> support team
        </h1>
        <div className="flex w-32 mx-auto overflow-hidden rounded mb-2 mt-4 md:mb-5">
          <div className="flex-1 h-2 bg-teal-200"></div>
          <div className="flex-1 h-2 bg-teal-400"></div>
          <div className="flex-1 h-2 bg-teal-300"></div>
        </div>
        <p className="md:text-2xl text-base text-dark dark:text-white pt-3 font-medium text-center">
          Our business hours are 9AM-6PM ET Monday-Friday and 9AM-5PM ET on
          weekends.
        </p>
        <div className="mt-10 md:h-[450px] md:flex bg-[#272636] rounded-lg">
          <div className="md:flex-1">
            <img
              className="rounded-l-lg h-full w-full rounded-tl-lg object-cover"
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="dark:text-white md:flex-1 text-white w-full p-10 space-y-10">
            <h2 className="md:text-3xl text-2xl font-semibold text-center my-8 md:my-16">
              Contact the Dropbox sales team
            </h2>
            <button className="block bg-[#303cc1cf] font-semibold text-base w-full py-3">
              Fink a partner near you
            </button>
            <button className="block bg-[#303cc1cf] font-semibold text-base w-full py-3">
              Visit our help center
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageSTeam;
