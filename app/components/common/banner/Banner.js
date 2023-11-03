export default function Banner(props) {
  return (
    <div className="h-80 background-image bg-cover bg-no-repeat">
      <div className="pt-32">
        <div className="backdrop-blur-md w-80 m-auto text-center p-2">
          <img src={props.imgUrl} alt="roteiro" />
          <h1 className="tracking-widest text-5xl ">{props.title}</h1>
          <p className="p-1 text-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
