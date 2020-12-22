<template>
    <div>
        <Nav :nav-items="navItems"></Nav>
    </div>
</template>

<script>
    import Nav from "../layouts/Nav";
    export default {
		name: "Home",
        components: {Nav},
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
                    {
                        name: 'My Blog',
                        route: { name: 'home' },
                    },
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
