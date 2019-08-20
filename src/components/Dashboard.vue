<template>
    <div id='page'>

        <h1>{{ title }}</h1>

        <section>
            <div>
                <span v-for="card in cards">
                    <Card :title="card.title">
                        <p>{{ card.text }}</p>
                    </Card>
                </span>
            </div>
        </section>

        <section>
            <h1>Morbi mattis ullamcorper velit</h1>
            <p class="text-justify">
                Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
            </p>
        </section>

        <section>
            <h1>Donec orci lectus, aliquam</h1>
            <p class="text-justify">
                Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
            </p>
        </section>

    </div>
</template>

<script>
    import Card from './common/Card.vue';

    const cards = [
        {
            id: 1,
            title: 'Card One',
            text: 'Ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque earum, id ipsam saepe totam. Assumenda beatae delectus eligendi eveniet excepturi, illo ipsam itaque omnis quo saepe ullam ut? Id?'
        },
        {
            id: 2,
            title: 'Card One',
            text: 'Dolores esse fuga laudantium quasi vero! Alias autem error, ex explicabo hic illum magnam obcaecati. Assumenda ea id, iure non saepe veniam.'
        },
        {
            id: 3,
            title: 'Card Three',
            text: 'Blanditiis cumque earum, id ipsam saepe totam. Assumenda beatae delectus eligendi eveniet excepturi, hic illum magnam obcaecati. Assumenda ea id, iure non saepe veniam.'
        },
        {
            id: 4,
            title: 'Card Fore',
            text: 'Assumenda beatae delectus eligendi eveniet excepturi, hic illum magnam obcaecati. Blanditiis cumque earum, id ipsam saepe totam. , iure non saepe veniam.'
        },
    ];


    export default {

        name: 'Dashboard',

        props: [],

        data() {
            return {
                title: "Component - Home",
                sidebar: {left: 3, right: 9},
                cards: cards,
            }
        },

        methods: {},

        computed: {
            // title() {}
        },

        mounted() {},

        components: {
            Card,
        }

    }
</script>

<style>
    section {
        min-height: 100vh;
    }
</style>