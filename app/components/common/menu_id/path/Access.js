import PathImage from "./PathImage";

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

          {props.image1 ? (
            <div>
              <PathImage image={props.image1} title={props.title} />
              <PathImage image={props.image11} title={props.title} />
            </div>
          ) : (
            ""
          )}

          {props.image3 || props.image4 || props.image5 ? (
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

          {props.image2 ||
          props.image21 ||
          props.image22 ||
          props.image23 ||
          props.image24 ? (
            <div>
              <p className="underline">Percurso em partes: </p>
              <PathImage image={props.image21} title={props.title} />
              <PathImage image={props.image22} title={props.title} />
              <PathImage image={props.image23} title={props.title} />
              <PathImage image={props.image24} title={props.title} />
              <PathImage image={props.image25} title={props.title} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
