<template>
    <div>
        <h1>Machine {{name}}</h1>
        <h3 v-bind:class="statusColor">{{getStatus()}}</h3>
        <h5>Last time checked : {{checkedAt.toLocaleString('en-GB', {timeZone: 'UTC'})}}</h5>
    </div>
</template>

<script>
    export default {
        name: "machine-view",
        data() {
            return {
                name: 'What else ?',
                status: true,
                checkedAt: new Date(),
                statusColor: 'red'
            }
        },
        methods: {
            getStatus: function () {
                if (this.status === true) {
                    this.statusColor = 'green';
                    return 'Status OK'
                }
                if (this.status === false) {
                    this.statusColor = 'red';
                    return 'Status KO'
                }
            }
        }
    }
</script>

<style scoped>
    .green {
        color: green;
    }
    .red {
         color: red;
     }
</style>