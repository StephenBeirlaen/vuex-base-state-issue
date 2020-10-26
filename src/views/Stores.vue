<template>
    <div>
        <h1>Stores</h1>

        <div v-if="isLoading">
            <p>Loading...</p>
        </div>

        <div v-else-if="!hasStores">
            No stores!
        </div>

        <div
            v-for="store in stores"
            v-else
            :key="store.id"
        >
            <store :message="store.message" />
        </div>
    </div>
</template>

<script>
import Store from "../components/Store";

export default {
    name: "Stores",
    components: {
        Store
    },
    data() {
        return {
            message: ""
        };
    },
    computed: {
        isLoading() {
            return this.$store.getters["store/isLoading"];
        },
        hasError() {
            return this.$store.getters["store/hasError"];
        },
        error() {
            return this.$store.getters["store/error"];
        },
        hasStores() {
            return this.$store.getters["store/hasStores"];
        },
        stores() {
            return this.$store.getters["store/stores"];
        },
    },
    created() {
        this.$store.dispatch("store/findAll");
    },
    methods: {
        async createStore() {
            const result = await this.$store.dispatch("store/create", this.$data.message);
            if (result !== null) {
                this.$data.message = "";
            }
        }
    }
};
</script>