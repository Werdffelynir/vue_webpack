<template>

    <div class="">

        <h1>{{title}}</h1>

        <MenuIcon ></MenuIcon>
        <DiskIcon ></DiskIcon>
        <ArrowRightBoldIcon ></ArrowRightBoldIcon>
        <FileOutlineIcon ></FileOutlineIcon>

        <section>
            <p class="text-justify">
                Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
            </p>
        </section>

        <section>
            <p class="text-left">Left aligned text on all viewport sizes.</p>
            <p class="text-center">Center aligned text on all viewport sizes.</p>
            <p class="text-right">Right aligned text on all viewport sizes.</p>
        </section>
    </div>

</template>

<script>
    export default {

        name: 'Login',

        data () {
            return {
                title: "Component - Login/SighIn",
            }
        },

        methods: {
            action (e) {},
        },

        computed: { },

        mounted() {},

        components: {},
    }
</script>