import BlueBullet from "../../../../common/icons/bullets/BLueBullet";
import MenuDescriptionArrow from "./elements/MenuDescriptionArrow";
import MenuDescriptionValues from "./elements/MenuDescriptionValues";
import MenuDescriptionInfo from "./elements/MenuDescriptionInfo";
import MenuDescriptionTab from "./elements/menu_tab/MenuDescriptionTab";
import MenuDescriptionSelectTab from "../menu_select_tab/MenuDescriptionSelectTab";
import MenuDescriptionItem from "./elements/menu_tab/MenuDescriptionItem";

export default function MenuDescription() {
  return (
    <div>
      <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <MenuDescriptionSelectTab
          option1={"Localizacao"}
          option2={"Dicas e Recomendacoes"}
        />
        <MenuDescriptionTab />
        <div
          id="fullWidthTabContent"
          class="border-t border-gray-200 dark:border-gray-600"
        >
          <div className="flex justify-center">
            <MenuDescriptionValues value={"12 KM"} subtitle={"Distancia"} />
            <MenuDescriptionValues value={"4/5"} subtitle={"Duracao (dias)"} />
            <MenuDescriptionValues value={"3.5"} subtitle={"Dificuldade"} />
            <MenuDescriptionValues value={"4+"} subtitle={"Avaliacao"} />
          </div>
          <BlueBullet />
        </div>

        <div
          class="p-4 bg-white rounded-lg dark:bg-gray-800"
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <MenuDescriptionArrow label={"Trajeto - Opcao 1"} />
            <MenuDescriptionInfo />
            <MenuDescriptionArrow label={"Trajeto - Opcao 2"} />
            <MenuDescriptionInfo />
            <MenuDescriptionArrow label={"Trajeto - Opcao 3"} />
            <MenuDescriptionInfo />
            <MenuDescriptionArrow label={"Trajeto - Opcao 4"} />
            <MenuDescriptionInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
