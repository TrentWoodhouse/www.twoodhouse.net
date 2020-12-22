<template>
    <div>
        <div class="content-page p-3 h-100 overflow-auto">
            <slot></slot>
        </div>
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
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.15);
        font-family: 'Fira Sans';
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
</style>
