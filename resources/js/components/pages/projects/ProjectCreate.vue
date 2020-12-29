<template>
    <div>
        <p>Create a new project.</p>
        <ProjectForm/>
    </div>
</template>

<script>
	import ProjectForm from "../../forms/ProjectForm";
    export default {
		name: "ProjectCreate",
        components: {ProjectForm}
    }
</script>

<style scoped>

</style>
