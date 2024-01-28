<template>
    <Page
        title="Trent Woodhouse - Coding & Design"
        :image="publicImage('home.png')"
    >
        <Nav :nav-items="navItems"/>
    </Page>
</template>

<script>
    import Nav from "../layouts/Nav";
    import Page from "../layouts/page/Page";
    import config from "../../config";
    export default {
		name: "Home",
        components: {Page, Nav},
        data() {
		    return {
                navItems: [
                    {
                        name: 'About Me',
                        icon: 'person-fill',
                        route: {name: 'about'},
                    },
                    {
                        name: config.post.project.title,
                        icon: 'tools',
                        route: {name: 'posts', params: {type: 'project'}},
                    },
                    {
                        name: config.post.career.title,
                        icon: 'briefcase-fill',
                        route: {name: 'posts', params: {type: 'career'}},
                    },
                    {
                        name: 'Contact Me',
                        icon: 'envelope-fill',
                        route: { name: 'contact' },
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
