import TimeLine from "./TimeLine";

export default function CreateTimeLine(array) {
  <TimeLine
    key={array.id}
    id={array.id}
    href={array.href}
    title={array.title}
    month={array.month}
    imgURL={array.imgURL}
    region={array.region}
    district={array.district}
    town1={array.town1}
    town2={array.town2}
    direction1={array.direction1}
    access1={array.access1}
    access2={array.access2}
    advices={array.advices}
    distance={array.distance}
    array={array.array}
    description={array.description}
    paragraph1={array.paragraph1}
    paragraph2={array.paragraph2}
    paragraph3={array.paragraph3}
    paragraph4={array.paragraph4}
    sources={array.sources}
  />;
}