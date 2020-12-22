<template>
    <div class="p-3 h-100 overflow-auto">
        <ListItem :title="project.title" :src="project.image" :description="project.description" :badge="badge" :to="{ name: 'home' }"/>
    </div>
</template>

<script>
    import ListItem from "../../layouts/ListItem";
    export default {
		name: "Projects",
        components: {ListItem},
        data() {
		    return {
		        project: {
		            title: 'big bob\'s brain',
                    description: 'Yeee haw pardner\'',
                    src: 'https://photographicdictionary.com/sites/photographicdictionary.com/files/photos/h/hick.jpg',
                },
                badge: {
                    text: 'new',
                    variant: 'danger',
                }
            }
        }
    }
</script>

<style scoped>

</style>
