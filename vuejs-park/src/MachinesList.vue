<template>
    <div>
        <h1>Liste des Machines</h1>
        <Machine v-bind:machine="machine1"> </Machine>
    </div>
</template>

<script>
    import Machine from "./Machine.vue";

    export default {
        name: "machines-list",
        components: {
            Machine
        },
        data() {
            return {
                machine1 : {
                    name: 'What else ?',
                    status: true,
                    checkedAt: new Date(),
                    statusColor: 'red'
                }
            }
        }
    }
</script>

<style scoped>

</style>