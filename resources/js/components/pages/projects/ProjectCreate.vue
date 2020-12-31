<template>
    <div class="h-100 overflow-auto">
        <ProjectForm @onSubmit="onSubmit" @onCancel="onCancel"/>
    </div>
</template>

<script>
	import ProjectForm from "../../forms/ProjectForm";
    export default {
		name: "ProjectCreate",
        components: {ProjectForm},
        methods: {
		    onSubmit() {
                this.$router.push({ name: 'projects' });
            },
            onCancel() {
                this.$router.push({ name: 'projects' });
            }
        }
    }
</script>

<style scoped>

</style>
