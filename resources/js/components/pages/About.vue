<template>
    <Page
        title="About"
        :image="publicImage('about.png')"
        :back="{name: 'home'}"
    >
        <TextPage>
            <p>Hi All,</p>
            <p>
                I'm a full time student and part time freelance web developer, based in Ames, Iowa. Primarily
                working with Laravel and Vue, I aim to build robust websites that have a sleek design and
                function well.
            </p>
        </TextPage>
    </Page>
</template>

<script>
    import Page from "../layouts/Page";
    import Content from "../layouts/page/ContentPage";
    import TextPage from "../layouts/page/TextPage";
    export default {
		name: "About",
        components: {TextPage, Content, Page},
    }
</script>

<style scoped>

</style>
