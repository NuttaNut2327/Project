<template lang="">
    <div style="font-family: 'Sono', sans-serif;">
        <div class="flex-col pt-[110px]">
            <div class="flex bg-amber-100 h-[400px]">
                <div class="flex-1 text-center pt-[35px] animate-fade">
                    <p class="text-8xl">Our</p>
                    <p class="text-8xl">lifestyle</p>
                    <p class="pt-[30px] text-xl">Do you know that our lifestyles are not ordinary?</p>
                    <p class="text-xl">Because this lifestyle,only beautiful and cute people</p>
                    <p class="text-xl">can like something like this...</p>
                </div>
                <div class="flex-1 items-center flex justify-center">
                    <img class="rounded-full justify-self-center pt-9 animate-fade" src="https://i.postimg.cc/RZ2sPTdz/Capture.png" alt="" width="600">
                </div>
            </div>
            <div class="flex-col z-0">
                <div class="flex bg-sky-200 z-0 p-4">
                    <div class="flex-1 z-10 ">
                        <img class="animate-movebubble ml-[300px]" src="https://i.postimg.cc/52G5F6Ht/bubble.png" width="250"/>
                    </div>
                    <div class="flex-1 z-10 justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-fade">
                        <div v-for="lifestyles in lifestyle" :key="lifestyle.id" class="">
                            <div v-if ="lifestyles.Name==='Fresh'" class="bg-white w-[450px] m-10 p-5 text-center rounded-3xl">
                                    <p class="text-4xl font-bold">{{lifestyles.Name}}</p>
                                    <div class="text-xl pt-3">
                                        <p>Color : {{lifestyles.Color}}</p>
                                        <p>Food : {{lifestyles.Food}}</p>
                                        <p>Hobbie : {{lifestyles.Hobbie}}</p>
                                        <a :href="lifestyles.Song" class="text-black text-4xl mr-3 ">
                                            <font-awesome-icon icon="fa-brands fa-spotify"
                                                class="pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" />
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex bg-rose-200">
                    <div class="flex-1 z-10 items-center flex justify-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-fade">
                        <div v-for="lifestyles in lifestyle" :key="lifestyle.id" class="">
                            <div v-if ="lifestyles.Name==='Yuuka'" class="bg-white w-[450px] m-10 p-5 text-center rounded-3xl">
                                    <p class="text-4xl font-bold">{{lifestyles.Name}}</p>
                                    <div class="text-xl pt-3">
                                        <p>Color : {{lifestyles.Color}}</p>
                                        <p>Food : {{lifestyles.Food}}</p>
                                        <p>Hobbie : {{lifestyles.Hobbie}}</p>
                                        <a :href="lifestyles.Song" class="text-black text-4xl mr-3 ">
                                            <font-awesome-icon icon="fa-brands fa-spotify"
                                                class="pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" />
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 z-10">
                        <img class="animate-movebloss ml-[300px]" src="https://i.postimg.cc/zGBZGPWr/blossom-removebg-preview.png" width="250"/>
                    </div>
                </div>
                <div class="flex bg-emerald-200 p-4">
                    <div class="flex-1 z-10 ">
                        <img class="ml-[300px] animate-movebutter" src="https://i.postimg.cc/853g2dsS/buttercup.png" width="250"/>
                    </div>
                    <div class="flex-1 z-10 justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-fade">
                        <div v-for="lifestyles in lifestyle" :key="lifestyle.id" class="">
                            <div v-if ="lifestyles.Name==='Yeepoon'" class="bg-white w-[450px] m-10 p-5 text-center rounded-3xl">
                                    <p class="text-4xl font-bold">{{lifestyles.Name}}</p>
                                    <div class="text-xl pt-3">
                                        <p>Color : {{lifestyles.Color}}</p>
                                        <p>Food : {{lifestyles.Food}}</p>
                                        <p>Hobbie : {{lifestyles.Hobbie}}</p>
                                        <a :href="lifestyles.Song" class="text-black text-4xl mr-3 ">
                                            <font-awesome-icon icon="fa-brands fa-spotify"
                                                class="pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" />
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { useLifestylesStore } from "../stores/counter"

export default {
  data() {
    return {
        lifestyle: [],
    };
  },
  async mounted() {
    await useLifestylesStore().fetchLifestyle();
    this.lifestyle = useLifestylesStore().getLifestyle;
    
  },
   
}

</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Sono&display=swap');
</style>