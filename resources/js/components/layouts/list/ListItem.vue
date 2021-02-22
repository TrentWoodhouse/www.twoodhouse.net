<template>
    <b-card no-body class="overflow-hidden mb-3">
        <b-row no-gutters>
            <b-col md="4">
                <b-card-img :src="src"/>
            </b-col>
            <b-col md="8">
                <b-card-body>
                    <b-card-title title-tag="h2">
                        {{ title }}
                        <h5 class="d-inline align-middle">
                            <b-badge pill v-if="badge" :variant="badge.variant">
                                {{ badge.text }}
                            </b-badge>
                        </h5>
                    </b-card-title>
                    <b-card-text>{{ description }}</b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
        <router-link v-if="to" class="stretched-link" :to="to"/>
    </b-card>
</template>

<script>
	export default {
		name: "ListItem",
        props: {
		    title: String,
            description: String,
            src: String,
            badge: Object,
            to: [String, Object],
        },
	}
</script>

<style scoped>

</style>
