import TRANSPORTS_LABELS from "@/components/enums/transports_labels";
import Label from "@/components/common/UI/forms/details/Label";

export default function Select() {
  return (
    <div>
      <div className="relative z-0 w-full mb-6 group">
        <select
          id="transport"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
          required
        >
          <option className="bg-yellow" selected>
            {TRANSPORTS_LABELS.selection}
          </option>
          <option value="car">{TRANSPORTS_LABELS.car}</option>
          <option value="airplane">{TRANSPORTS_LABELS.airplane}</option>
          <option value="train">{TRANSPORTS_LABELS.train}</option>
          <option value="bus">{TRANSPORTS_LABELS.bus}</option>
        </select>

        <Label label={TRANSPORTS_LABELS.transport} />
      </div>
    </div>
  );
}
