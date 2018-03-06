<template>
    <div>
        <h1>Machine {{machine.name}}</h1>
        <h3 v-bind:class="machine.statusColor">{{getStatus()}}</h3>
        <h5>Last time checked : {{machine.checkedAt.toLocaleString('en-GB', {timeZone: 'UTC'})}}</h5>
    </div>
</template>

<script>
    export default {
        name: "machine",
        props: ['machine'],

        methods: {
            getStatus: function () {
                if (this.machine.status) {
                    this.machine.statusColor = 'green';
                    return 'Status OK'
                }

                this.machine.statusColor = 'red';
                return 'Status KO'

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