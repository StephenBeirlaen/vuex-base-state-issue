<template>
    <div class="flex flex-col h-full">
        <main class="flex-auto flex flex-row">
            <div class="flex-auto p-4">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script>

export default {
    name: "App",
    created() {
        console.log('Stores length:', this.$store.getters['store/stores'].length);
    },
}
</script>
