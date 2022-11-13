<template lang="">
    <div class="fixed flex justify-items-stretch drop-shadow-lg top-0 left-0 right-0 flex bg-gradient-to-r from-sky-200 via-rose-200 to-emerald-300 font-bold h-[110px]" style="z-index:100;">
        <div class="w-1/6 justify-self-start pt-2 pl-3">
            <img class="" src="https://i.postimg.cc/15tvsdYQ/pcg-1.png" alt="" width="150">
        </div>
        <div class="grow w-70 items-center flex justify-center">
            <img src="https://i.postimg.cc/4ds1M2hj/font-PCG-1.png" class="">
        </div>
        <div class="w-1/6 text-2xl text-right pt-7 pr-7">
            <router-link to="/"><font-awesome-icon icon="fa-solid fa-house-chimney-user" class=" h-12 w-12 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"/></router-link>
        </div>
    </div>
    <div class="  bg-gray-700">
    </div>
<div><slot></slot></div>
</template>

<main>
</main>
<script>
export default {

}
</script>