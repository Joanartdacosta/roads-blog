import PathImage from "../../PathImage";

export default function Access(props) {
  return (
    <div
      className="p-4 bg-white rounded-lg dark:bg-gray-800"
      id="faq"
      role="tabpanel"
      aria-labelledby="faq-tab"
    >
      <div
        id="accordion-flush-body-3"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{props.label}</p>
          <p className="underline">Percurso: </p>
          <p>{props.option}</p>

          {props.image1 ? (
            <div>
              <PathImage image={props.image1} title={props.title} />
            </div>
          ) : (
            ""
          )}

          {props.image2 || props.image3 || props.image4 || props.image5 ? (
            <div>
              <p className="underline">Percurso em partes: </p>
              <PathImage image={props.image2} title={props.title} />
              <PathImage image={props.image3} title={props.title} />
              <PathImage image={props.image4} title={props.title} />
              <PathImage image={props.image5} title={props.title} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
