import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Buttons from "../components/Buttons";
const SpecialOffer = () => {
  return (
    <section className=" drop-shadow-sm flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" drop-shadow-lg flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="  drop-shadow-sm mt-11 flex flex-wrap gap-4">
          <Buttons label="Shop now" iconURL={arrowRight} />
          <Buttons
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            className="drop-shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
