import Admission from "../assets/WhatsApp Image 2024-06-03 at 6.31.png";
import findCity from "../assets/WhatsApp Image 2024-06-03 at 7.06.png";
import scholarships from "../assets/WhatsApp Image 2024-06-06 at 8.53.png";
const NavigationTile = () => {
  const tileData = [
    {
      title: "Admission Application",
      img: Admission,
      description:
        "Apply to any course and institution—university, college, or school. Find admission dates, schedules, fees, and more",
    },
    {
      title: "Find Your City",
      img: findCity,
      description:
        "Choose your city for admission to the best universities, colleges, schools, and hostels.",
    },
    {
      title: "Scholarships",
      img: scholarships,
      description:
        "Discover scholarships: merit-based, need-based, discounts, and loan assistance.",
    },
  ];
  return (
    <div className="flex mt-[120px] max-w-[1320px] w-full gap-8 mx-auto justify-center flex-wrap mb-[80px]">
      {tileData.map((obj) => (
        <div key={obj.title} className="max-w-[410px] w-full">
          <div className=" p-[50%] relative rounded-[50px]">
            <img src={obj.img} className="w-full absolute left-0 top-0 object-cover" alt={obj.title} />
            <div className="bottom-0 left-0 w-full absolute p-5">
              <h3 className="text-[32px] text-white font-bold">{obj.title}</h3>
              <p className="text-base text-white">{obj.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationTile;
