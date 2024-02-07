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
            description={event.description}
            district={event.district}
            imgURL={event.imgURL}
            month={event.month}
            region={event.region}
            paragraph1={event.paragraph1}
            paragraph2={event.paragraph2}
            paragraph3={event.paragraph3}
            paragraph4={event.paragraph4}
            title={event.title}
            town2={event.town2}
          />
        );
      })}
    </div>
  );
}
