const PrimaryButton = ({ buttonName, destination }) => {
    return (
      <button className="btn btn-primary group rounded-full bg-primary-blue px-4 py-2 font-bold transition">
        <a className="flex items-center" href={destination}>
          {buttonName}
          <span className="text-[0] group-hover:ml-1 group-hover:text-[1rem] font-[900] transition-all duration-200">
            →
          </span>
        </a>
      </button>
    );
  };
  
  export default PrimaryButton;
