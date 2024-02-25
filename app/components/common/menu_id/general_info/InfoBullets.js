import Bullet from "@/components/common/icons/bullets/Bullet";
import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";

export default function InfoBullets(props) {
  const BULLETS = [];

  for (let i = 0; i < props.bullets.length; i++) {
    BULLETS.push(props.bullets[i]);
  }
  return (
    <div>
      <div
        className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800 text-left"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        {" "}
        <div>
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {props.label}
          </h2>
          <ul
            role="list"
            className="space-y-4 text-gray-500 dark:text-gray-400"
          >
            <div>
              {BULLETS.map((bullet) => {
                return (
                  <li className="flex space-x-2" key={bullet}>
                    <Bullet className="pr-2" />
                    <span className="leading-tight pl-2 pb-4 poppins">
                      {bullet}
                    </span>
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
