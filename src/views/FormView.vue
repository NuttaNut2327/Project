<template lang="">
    <div class="pt-40">
       <button @click="dropdown=!dropdown">switch</button> 
       <div v-if="dropdown">open</div>
    </div>
    <div>This is onchange</div>
    <input class="p-2 border-2" type="text" @change="count++">
    <div>
        count :: {{count}}
    </div>
    <div>This is v-model</div>
    <input v-model="name">
    <div>{{name}}</div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: false,
            count : 0,
            name : 'ford'
        }
    }
}
</script>
<style lang="">
    
</style>