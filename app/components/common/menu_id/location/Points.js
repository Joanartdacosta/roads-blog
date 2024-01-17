import InfoBullets from "../general_info/InfoBullets";

export default function Points(props) {
  return (
    <div className="flex flex-col justify justify-center">
      <InfoBullets
        point1={props.point1}
        point2={props.point2}
        point3={props.point3}
        point4={props.point4}
      />
    </div>
  );
}
