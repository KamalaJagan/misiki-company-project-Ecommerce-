<nav>
<div class="w-full fixed top-0 bg-white font-serif z-40">
    <div class="container px-6 mx-auto py-3 flex justify-between">

        <div class="flex gap-2 items-center text-bold text-xl cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor">
                <path stroke-Linecap="round" stroke-Linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
        </div>

        <div class="hidden md:flex gap-4 items-center">
            <div class="text-xl">Theme styles</div>
            <!-- <select class="cursor-pointer">
                <svg fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"  class="w-4 h-6 hover:text-gray-500">
                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </select> -->
            <select id="Website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Gothenburg</option>
                <option value="1">Stockolm</option>
                <option value="2">Oslo</option>
                <option value="3">Copenhagen</option>
            </select>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-7 text-bold" fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor">
                    <path stroke-Linecap="round" stroke-Linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-7 font-bold" fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" >
                    <path stroke-Linecap="round" stroke-Linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            </button>
        </div>

        <div class="hidden md:flex items-center ">
            <button class="h-10 text-white md:w-auto lg:w-32 rounded bg-[#008060] shadow-200 hover:bg-gray-700">Try theme</button>
        </div>

    </div>
    <hr class="w-full black-800 dark:bg-gray-700"/>
</div>

<div>
    <!-- <hr class="w-full black-800 mt-16"/> -->
    <div class="mt-16 bg-[#f2ebce] w-full shadow-md inline-flex justify-center gap-4 font-bold-10 p-3 font-serif ">Free shipping when spend over $100!</div>
</div>

<div class=" w-full bg-white font-serif ">
    <div class="container px-5 md:px-10 mx-auto py-5 flex justify-between">
        
        <ul class="hidden md:flex flex-row gap-4 uppercase items-center">
            <li class="hover:text-gray-500"><a href="/">Home</a></li>
            <li class="hover:text-gray-500"><a href="/aboutus">About</a></li>
            <li class="hover:text-gray-500"><a href="/blog">Blog</a></li>
        </ul>

        <div class="space-y-1 md:hidden cursor-pointer justify-center md:justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-12 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
        </div>
        
        <div class="items-center">
            <img src="images1.png" class="h-30 w-40" alt="...">
        </div>

        <div class="gap-6 items-center flex">
            <select class="hidden md:flex">
                <svg fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"  class="w-4 h-6 hover:text-gray-500">
                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </select>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-10 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" >
                    <path stroke-Linecap="round" stroke-Linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
            </button>
            <button class="hidden md:flex"><a href="/login"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-10 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" >
                <path stroke-Linecap="round" stroke-Linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg></a>
            </button>
            <button><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-10 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" >
                <path stroke-Linecap="round" stroke-Linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </button>
        </div>
        
    </div>
</div>


<div class="mt-2 cursor-pointer container font-serif">
    <ul class="hidden md:flex flex-row gap-12 justify-center uppercase" >
        <li class=" hover:text-gray-500 flex gap-2 ">new in
            <button>
                <svg fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" class="w-4 h-6 hover:text-gray-500">
                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
            </button>
        </li>
        <li class=" hover:text-gray-500 "><a href="/nacleses">Necklaces</a></li>
        <li class=" hover:text-gray-500 "><a href="/earings">earrings</a></li>
        <li class=" hover:text-gray-500 "><a href="/anklets">anklets</a></li>
        <li class=" hover:text-gray-500 flex gap-2">collections<svg fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"  class="w-4 h-6 hover:text-gray-500">
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg></li>
        <li class=" hover:text-gray-500 ">sale</li>
        <li class=" hover:text-gray-500 ">Theme features</li>
        <li class=" hover:text-gray-500 flex gap-2">demos<svg fill="none" viewBox="0 0 24 24" stroke-Width={1.5} stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"  class="w-4 h-6 hover:text-gray-500">
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg></li>
    </ul>
</div>
<hr class="w-full gray-800 mt-4"/>
</nav>

