import MainComment from "./MainComment";

export default function Reply() {
  return (
    <div>
      <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
          <MainComment />
        </footer>
      </article>
    </div>
  );
}
