<template>
    <div class="min-h-screen bg-sky-200">
        <profileCard 
        name="Nuttanicha Keaopholsri" 
        nickname="Fresh" 
        ID="6510405474"
        IG="https://www.instagram.com/nt._.fresh/" 
        git="https://github.com/NuttaNut2327"
        Image="https://i.postimg.cc/L2xVkSkP/Fresh.jpg" 
        color="bg-sky-200"
        back="/yeepoon"
        next="/yuuka">>
        </profileCard>
    </div>
</template>
<script>
import profileCard from "../components/Profile.vue";
export default {
    data() {
        return {
            name: "Yuuka Kawai",
            ID: 6510405768,

        };
    },
    components: {
        profileCard,
    },
};
</script>