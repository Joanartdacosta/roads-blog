import StartWhite from "@/components/common/icons/stars/StarWhite";
import StartYellow from "@/components/common/icons/stars/StarYellow";

export default function StartsEvaluation(props) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < props.evaluation; i++) {
      stars.push(<StartYellow key={`${i}y`} />);
    }
    for (let i = 0; i < 5 - props.evaluation; i++) {
      stars.push(<StartWhite key={`${i}w`} />);
    }

    return stars;
  };

  return <div className="flex">{props.evaluation ? renderStars() : ""}</div>;
}
