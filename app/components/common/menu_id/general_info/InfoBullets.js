import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";
import Bullet from "@/components/common/icons/bullets/Bullet";

export default function InfoBullets(props) {
  return (
    <div>
      <div
        className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        {props.bullet1 || props.bullet2 || props.bullet3 ? (
          <div>
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {TAB_BUTTONS_LABELS.recomendation}
            </h2>
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <div>
                <li className="flex space-x-2 items-center">
                  <Bullet />
                  <span className="leading-tight p-1">{props.bullet1}</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <Bullet />
                  <span className="leading-tight p-1">{props.bullet2}</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <Bullet />
                  <span className="leading-tight p-1">{props.bullet3}</span>
                </li>

                {props.bullet4 ? (
                  <li className="flex space-x-2 items-center">
                    <Bullet />
                    <span className="leading-tight p-1">{props.bullet4}</span>
                  </li>
                ) : (
                  ""
                )}
                {props.bullet5 ? (
                  <li className="flex space-x-2 items-center">
                    <Bullet />
                    <span className="leading-tight">{props.bullet4}</span>
                  </li>
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <div>
                {props.point1 ||
                props.point2 ||
                props.point3 ||
                props.point4 ? (
                  <div>
                    <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                      {TAB_BUTTONS_LABELS.points}
                    </h2>
                    <li className="flex space-x-2 items-center">
                      <Bullet />
                      <span className="leading-tight p-2">{props.point1}</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                      <Bullet />
                      <span className="leading-tight p-2">{props.point2}</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                      <Bullet />
                      <span className="leading-tight p-2">{props.point3}</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                      <Bullet />
                      <span className="leading-tight p-2">{props.point4}</span>
                    </li>
                  </div>
                ) : (
                  "Em atualizacao."
                )}

                {props.point5 || props.point6 ? (
                  <div>
                    <li className="flex space-x-2 items-center">
                      <Bullet />
                      <span className="leading-tight p-2">{props.point5}</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                      <Bullet />
                      <span className="leading-tight p-2">{props.point6}</span>
                    </li>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
