<template>
    <div class="min-h-screen bg-rose-200">
        <profileCard 
        name="Yuuka Kawai" 
        nickname="Yuuka" 
        ID="6510405768"
        IG="https://www.instagram.com/yuuka__uk/" 
        git="https://github.com/yuuka2803"
        Image="https://i.postimg.cc/3KYpzbZh/Yuuka.jpg" 
        color="bg-rose-200"
        back="/fresh"
        next="/yeepoon">
        
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
