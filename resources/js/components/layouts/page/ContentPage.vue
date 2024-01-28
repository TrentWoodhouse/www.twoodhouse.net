<template>
    <div class="w-100 h-100 p-3 content-page scrollable">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "ContentPage",
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
        border-radius: 3px;
        background-color: rgba(125, 125, 125, 0.25);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
</style>
