export default function BannerImage(props) {
  return (
    <div>
      <div className="h-64 w-48 overflow-hidden rounded-lg">
        <img
          src={props.imgUrl}
          alt=""
          className=" object-cover object-center"
        />
      </div>
    </div>
  );
}
