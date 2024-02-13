import Bullet from "@/components/common/icons/bullets/Bullet";
import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";

export default function InfoBullets(props) {
  const ARRAY = [];

  for (let i = 0; i < props.bullets.length; i++) {
    ARRAY.push(props.bullets[i]);
  }
  return (
    <div>
      <div
        className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        {" "}
        <div>
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {TAB_BUTTONS_LABELS.recomendation}
          </h2>
          <ul
            role="list"
            className="space-y-4 text-gray-500 dark:text-gray-400"
          >
            <div>
              {ARRAY.map((bullet) => {
                return (
                  <li className="flex space-x-2 items-center" key={bullet}>
                    <Bullet />
                    <span className="leading-tight p-2">{bullet}</span>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
