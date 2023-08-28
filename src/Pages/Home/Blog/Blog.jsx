import React from 'react';
import './Blog.css';
import card1 from '../../../assets/website/images (1).jpg'
import card2 from '../../../assets/website/images (2).jpg'
import card3 from '../../../assets/website/download.jpg'

const Blog = () => {
    return (
        <div>
         <h1 className='text-4xl font-bold mt-16 mb-10 text-center'>Blog</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto'>
        <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src={card1}
      class="h-16 w-2/5 mx-auto rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Web Design</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300">Website</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href=""
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Project A</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          consequuntur deleniti, unde ab ut in!
        </p>
      </a>
    </li>

    <li>
      <a
        href=""
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Project B</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          cumque saepe sit.
        </p>
      </a>
    </li>
  </ul>
</article>
<article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src={card2}
      class="h-16 w-2/5 mx-auto rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Ui/Ux Design</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300">Website</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href=""
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Project A</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          consequuntur deleniti, unde ab ut in!
        </p>
      </a>
    </li>

    <li>
      <a
        href=""
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Project B</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          cumque saepe sit.
        </p>
      </a>
    </li>
  </ul>
</article><article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src={card3}
      class="h-16 w-2/5 mx-auto rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Next JS</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li class="p-1 leading-none">
            <a href="" class="text-xs font-medium text-gray-300">Website</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href=""
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Project A</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          consequuntur deleniti, unde ab ut in!
        </p>
      </a>
    </li>

    <li>
      <a
        href=""
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Project B</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          cumque saepe sit.
        </p>
      </a>
    </li>
  </ul>
</article>
        </div>
        </div>
    );
};

export default Blog;