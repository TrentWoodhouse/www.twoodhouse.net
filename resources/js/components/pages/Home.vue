<template>
    <Page
        title="Trent Woodhouse - Coding & Design"
        :image="getImage('home.png')"
    >
        <Nav :nav-items="navItems"></Nav>
    </Page>
</template>

<script>
    import Nav from "../layouts/Nav";
    import Page from "../layouts/Page";
    export default {
		name: "Home",
        components: {Page, Nav},
        data() {
		    return {
                navItems: [
                    {
                        name: 'Get to Know Me',
                        route: { name: 'about' },
                    },
                    {
                        name: 'My Projects',
                        route: { name: 'projects' },
                    },
                    // {
                    //     name: 'My Blog',
                    //     route: { name: 'home' },
                    // },
                    {
                        name: 'Contact Me',
                        route: { name: 'contact' },
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
