const Buttons = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-gap gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full bg-coral-red shadow-lg text-white">
      {label}

      <img
        src={iconURL}
        alt="arrow left icon"
        className="ml-2 rounded-full h-5 w-5"
      />
    </button>
  );
};

export default Buttons;
