<template>
    <Page
        title="About Me"
        :image="publicImage('about.png')"
        :back="{name: 'home'}"
    >
        <TextPage>
            <p>Hi there!</p>
            <p>
                I'm Trent, a software engineer based in Madison, Wisconsin, with four years of web development experience. 
                I aim to to craft clean and elegantly designed products and features that not only meet user needs but 
                are delightful and satisfying to use. With a keen eye for detail and a dedication to quality, I strive to make 
                every project I work on an enjoyable experience.
            </p>
        </TextPage>
    </Page>
</template>

<script>
    import Page from "../layouts/page/Page";
    import Content from "../layouts/page/ContentPage";
    import TextPage from "../layouts/page/TextPage";
    export default {
		name: "About",
        components: {TextPage, Content, Page},
    }
</script>

<style scoped>

</style>
