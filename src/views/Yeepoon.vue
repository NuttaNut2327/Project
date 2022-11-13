<template>
    <div class="min-h-screen bg-emerald-200">
        <profileCard 
        name="Panisara Poosee" 
        nickname="Yeepoon" 
        ID="6510405661"
        IG="https://www.instagram.com/miss_jxpxn/" 
        git="https://github.com/imyourjxpxn"
        Image="https://i.postimg.cc/bzyDmSzN/Yeepoon.jpg" 
        color="bg-emerald-200"
        back="/yuuka"
        next="/fresh"
        >
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
