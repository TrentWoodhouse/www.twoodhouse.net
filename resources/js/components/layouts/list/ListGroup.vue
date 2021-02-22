<template>
    <div>
        <div v-if="loaded">
            <ListItem v-for="item in items" :key="item.id" :title="item.title" :src="item.src" :description="item.description" :badge="getBadge(item)" :to="item.to"/>
        </div>
        <div v-else>
            <b-card v-for="n in repeat" :key="n" no-body class="overflow-hidden mb-3">
                <b-row no-gutters>
                    <b-col md="4">
                        <b-skeleton-img card-img="left" aspect="1"/>
                    </b-col>
                    <b-col md="8">
                        <b-card-body>
                            <b-card-title title-tag="h2">
                                <b-skeleton/>
                            </b-card-title>
                            <b-skeleton/>
                            <b-skeleton/>
                            <b-skeleton/>
                            <b-skeleton/>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script>
    import ListItem from "./ListItem";
    import moment from "moment";
	export default {
		name: "ListGroup",
        components: {ListItem},
        props: {
		    items: {
		        type: Array,
                default() {
		            return [];
                }
            },
            repeat: {
		        type: Number,
                default: 1,
            }
        },
        data() {
		    return {
                loadedImages: 0,
            }
        },
        computed: {
		    loaded() {
		        return this.loadedImages === this.items?.length;
            }
        },
        watch: {
		    items() {
		        this.loadImages();
            }
        },
        created() {
            this.loadImages();
        },
        methods: {
            getBadge(item) {
                let createdAt = moment(item.created_at);
                let now = moment();
                if(!now.isAfter(createdAt.add(7, 'days').startOf('day'))) {
                    return {
                        text: 'New',
                        variant: 'danger',
                    }
                }
                return null;
            },
            loadImages() {
                this.loadedImages = 0;
                this.items?.forEach(item => {
                    let image = new Image();
                    image.src = item.src;
                    if(image.complete) {
                        this.loadedImages++;
                    }
                    else {
                        image.onload = () => {
                            this.loadedImages++;
                        }
                    }
                })
            }
        }
	}
</script>

<style scoped>

</style>
