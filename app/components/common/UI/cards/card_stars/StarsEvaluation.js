import StartWhite from "../../../icons/stars/StarWhite";
import StartYellow from "../../../icons/stars/StarYellow";

export default function StartsEvaluation(props) {
  console.log(props.evaluation - 5);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < props.evaluation; i++) {
      stars.push(<StartYellow key={i} />);
    }
    for (let i = 0; i < 5 - props.evaluation; i++) {
      stars.push(<StartWhite key={i} />);
    }

    return stars;
  };

  return <div className="flex">{props.evaluation ? renderStars() : ""}</div>;
}
