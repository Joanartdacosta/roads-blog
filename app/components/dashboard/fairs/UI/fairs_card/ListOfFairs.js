import FairCard from "./FairCard";

export default function ListOfFairs(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div>
      {ARRAY.map((event) => {
        return (
          <FairCard
            month={event.month}
            imgURL={event.imgURL}
            title={event.title}
            district={event.district}
            town2={event.town2}
            region={event.region}
            description={event.description}
            paragraph1={event.paragraph1}
            paragraph2={event.paragraph2}
            paragraph3={event.paragraph3}
            paragraph4={event.paragraph4}
          />
        );
      })}
    </div>
  );
}
