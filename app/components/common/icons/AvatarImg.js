export default function AvatarImg(props) {
  return (
    <div>
      <img
        className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
        src={props.imgURL}
        alt={props.title}
      />
    </div>
  );
}
