<style>
    @import url('https://fonts.googleapis.com/css2?family=Sono&display=swap');
</style>
<template lang="">
    <div style="font-family: 'Sono', sans-serif;">
        <div class="bg-amber-100 p-20 mt-[90px]">
        <div class="flow-root text-center animate-fade">
            <p class="text-4xl font-bold">Leading , Learning and fighter</p>
            <div class="flow-root text-xl pt-8 pb-13">
                <p>Our team's concept is as strong as the Powerpuff Girls.</p>
                <p class="pt-2">We have member with leading like Blossom,</p>
                <p class="pt-2">member who never stop learning like Bubble and a fighter like a Buttercup</p>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class="flex-1 text-center z-0 bg-sky-200 drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-sky-400 duration-300 hover:z-50">
            <div class="flex-col inline-block py-10">
                <div class="flex justify-center">
                    <img class="rounded-full" src="https://i.postimg.cc/L2xVkSkP/Fresh.jpg" alt="" width="200">
                </div>
                <div class="p-5">
                    <p class="text-4xl font-bold">Fresh</p>
                    <p class="p-2 text-xl">Nuttanicha Kaeopholsri</p>
                </div>
                <div class="flex justify-center">
                    <router-link to="/fresh">
                        <div class="m-3 p-2 w-[200px] bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300">Profile</div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="flex-1 text-center z-0 bg-rose-300 drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-rose-400 duration-300 hover:z-50">
            <div class="flex-col inline-block py-10 ">
                <div class="flex justify-center">
                    <img class="rounded-full" src="https://i.postimg.cc/3KYpzbZh/Yuuka.jpg" alt="" width="200">
                </div>
                <div class="p-5">
                    <p class="text-4xl font-bold">Yuuka</p>
                    <p class="p-2 text-xl">Yuuka Kawai</p>
                </div>
                <div class="flex justify-center">
                    <router-link to="/yuuka">
                        <div class="m-3 p-2 w-[200px] bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300">Profile</div>
                </router-link>
                </div>
            </div>
        </div>
        <div class="flex-1 text-center z-0 bg-emerald-300 drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-400 duration-300 hover:z-50">
            <div class="flex-col inline-block py-10">
                <div class="flex justify-center">
                    <img class="rounded-full justify-self-center" src="https://i.postimg.cc/bzyDmSzN/Yeepoon.jpg" alt="" width="200">
                </div>
                <div class="p-5">
                    <p class="text-4xl font-bold">Yeepoon</p>
                    <p class="p-2 text-xl">Panisara Poosee</p>
                </div>
                <div class="flex justify-center">
                    <router-link to="/yeepoon">
                        <div class="m-3 p-2 w-[200px] bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300">Profile</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center font-bold text-xl bg-amber-100 pt-24 pb-10">
        <div class="items-center flex justify-center">
            <router-link to="/flex">
            <div class="w-[350px] h-[60px] text-3xl items-center flex justify-center bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300">Our LifeStyle</div>
        </router-link>
        </div>
        <div class="pt-[75px]">
            <p>Female Future Foundation</p>
            <p>@2022</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
