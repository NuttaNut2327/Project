<style>
    @import url('https://fonts.googleapis.com/css2?family=Sono&display=swap');
</style>
<template >
    <div>
        <div class="h-96 w-full bg-cover bg-center mt-[110px]"
            style="background-image: url(https://i.postimg.cc/WNbNkxM5/pcg-extend-sunscreen.png); font-family: 'Sono', sans-serif;">
            <div class="grid justify-items-center pt-10">
                <div :style="getUrlImage(Image)"
                    class="blur-none rounded-full border-4 drop-shadow-2xl shadow-black bg-cover w-[300px] h-[300px] animate-fadeimage"
                    alt="">
                </div>
            </div>
            <div :class="getColor(color)" class="flex h-[400px]  w-full  pt-5 mt-[44px] ">
                <div class="flex-1 pb-10 items-center flex justify-center text-white text-2xl text-right pt-8 mr-11 ">
                    <router-link :to="getBack(back)">
                        <font-awesome-icon icon="fa-solid fa-circle-left shadow-2xl"
                            class="h-12 w-12 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" />
                    </router-link>
                </div>
                <div class="w-2/5 h-[310px] grid justify-items-center bg-white rounded-xl m-5 drop-shadow-2xl px-10 animate-fadeimage">
                    <p class="pt-6 text-4xl font-bold">Information</p>
                    <p class="text-xl">Name : {{ name }}</p>
                    <p class="text-xl">Nickname : {{ nickname }}</p>
                    <p class="text-xl">ID : {{ ID }}</p>
                    <p class="text-xl">CS37 KU82</p>
                    <div>
                        <a :href="IG" class="text-black text-4xl mr-3 ">
                            <font-awesome-icon icon="fa-brands fa-instagram"
                                class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" />
                        </a>
                        <a :href="git" class="text-black text-4xl">
                            <font-awesome-icon icon="fa-brands fa-square-github"
                                class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" />
                        </a>
                    </div>
                </div>
                <div
                    class="flex-1 pb-10 items-center flex justify-center text-center text-white text-2xl text-right pt-8 mr-11 ">
                    <router-link :to="getNext(next)">
                        <font-awesome-icon icon="fa-solid fa-circle-right"
                            class="h-12 w-12 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" />
                    </router-link>
                </div>
            </div>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>

</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: "A B"
        },
        ID: {
            type: String,
            default: "0000"
        },
        Image: {
            type: String,
            default: "/assets/images/Yuuka.jpg"
        },
        nickname: {
            type: String,
            default: "Yuuka"
        },
        IG: {
            type: String,
            default: "https://www.instagram.com/yuuka__uk/"
        },
        git: {
            type: String,
            default: "https://github.com/yuuka2803"
        },
        color: {
            type: String,
            default: "bg-sky-200"
        },
        back: {
            type: String,
            default:"/yuuka"
        },
        next: {
            type: String,
            default:"/fresh"
        }
    },
methods:
{
    getUrlImage(imagePath) {
        return {'background-image': 'url("'+imagePath+'")'};
    },
    getColor(color) {
        return color
    },
    getBack(back) {
        return back
    },
    getNext(next) {
        return next
    }
}   
};
</script>
