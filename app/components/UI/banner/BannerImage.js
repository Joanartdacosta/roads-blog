export default function BannerImage(props) {
  return (
    <div>
      <div className="h-64 w-44 overflow-hidden rounded-lg">
        <img
          src={props.imgUrl}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
