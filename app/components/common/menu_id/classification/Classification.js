import CLASSIFICATIONS from "../../../lists/classifications";

export default function Classification() {
  return (
    <div className="p-8 m-auto">
      {CLASSIFICATIONS.map((item) => {
        return (
          <div key={item.id}>
            <div className="mb-1 text-base font-medium dark:text-white">
              {item.label}
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: item.evaluation }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
