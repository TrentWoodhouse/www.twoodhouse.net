<template>
    <div class="w-100 h-100 p-3 content-page overflow-auto">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Content",
    }
</script>

<style scoped>
    h1 {
        color: #fff;
    }

    h2 {
        color: #fff;
    }

    h3 {
        color: #fff;
    }

    h4 {
        color: #eee;
    }

    h5 {
        color: #eee;
    }

    p {
        color: #ccc;
    }

    .content-page {
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
</style>
