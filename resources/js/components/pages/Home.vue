<template>
    <Page
        title="Trent Woodhouse - Coding & Design"
        :image="publicImage('home.png')"
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
                        icon: 'person-fill',
                        route: { name: 'about' },
                    },
                    {
                        name: 'My Projects',
                        icon: 'tools',
                        route: { name: 'projects' },
                    },
                    // {
                    //     name: 'My Blog',
                    //     icon: 'book-fill,
                    //     route: { name: 'home' },
                    // },
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
