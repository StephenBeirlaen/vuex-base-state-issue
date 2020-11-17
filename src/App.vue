<template>
    <div>
        <h1>Vuex base state issue</h1>
        <p>Turn off "New Vuex backend"</p>
        <p>Int value: {{ intValue }}</p>
    </div>
</template>

<script>

export default {
    name: "App",
    created() {
        console.log("Int value is", this.$store.getters["int"]);
        this.$store.commit('UPDATE_INT');
        console.log("Int value is", this.$store.getters["int"]);
    },
    computed: {
        intValue() {
            return this.$store.getters["int"];
        },
    },
}
</script>
