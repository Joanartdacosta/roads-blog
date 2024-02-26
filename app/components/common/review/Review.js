import MainComment from "./comments/MainComment";
import Reply from "./comments/ReplyComment";
import TextArea from "./comments/TextArea";

export default function Review() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (20)
            </h2>
          </div>
          <TextArea />
          <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <MainComment />
          </article>
          <Reply />
        </div>
      </section>
    </div>
  );
}
