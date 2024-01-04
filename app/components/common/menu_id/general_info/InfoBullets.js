import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";
import Bullet from "@/components/common/icons/bullets/Bullet";

export default function InfoBullets(props) {
  return (
    <div>
      <div
        className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {TAB_BUTTONS_LABELS.recomendation}
        </h2>
        <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
          <div>
            <li class="flex space-x-2 items-center">
              <Bullet />
              <span class="leading-tight">{props.bullet1}</span>
            </li>
            <li class="flex space-x-2 items-center">
              <Bullet />
              <span class="leading-tight">{props.bullet2}</span>
            </li>
            <li class="flex space-x-2 items-center">
              <Bullet />
              <span class="leading-tight">{props.bullet3}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
