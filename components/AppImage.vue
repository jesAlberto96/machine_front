<template>
    <div class="content">
        <img class="img" :src="src">
    </div>
</template>


<script>
import { ref, defineComponent  } from 'vue';

export default defineComponent({
    props: {
        src: { type: String, default: "" },
    },

    setup(props) {
    }
});
</script>

<style scoped>
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        padding: 1vh;
    }

    .img {
        object-fit: cover;
        height: 12vh;
        width: 6vh;
    }
</style>