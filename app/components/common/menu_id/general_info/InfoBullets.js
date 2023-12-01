import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";
import Bullet from "../../../../common/icons/bullets/Bullet";
import LABELS from "@/components/lists/labels";

export default function InfoBullets() {
  return (
    <div>
      <div
        class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {TAB_BUTTONS_LABELS.recomendation}
        </h2>
        <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
          {LABELS.map((item) => {
            return (
              <div>
                <li class="flex space-x-2 items-center">
                  <Bullet />
                  <span class="leading-tight">{item.desciption}</span>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
