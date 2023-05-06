<template>
    <div class="content" :class="{ 'product-selected': isSelected, 'product-blocked': isBlock }" :style="stylesContent">
        <img class="img" :src="src">
    </div>
</template>


<script>
import { ref, defineComponent  } from 'vue';

export default defineComponent({
    props: {
        src: { type: String, default: "" },
        isSelected: { type: Boolean, default: false },
        isBlock: { type: Boolean, default: false },
        stylesContent: { type: Object, default: function() { return {} } },
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
        border-radius: 20px;
    }

    .img {
        object-fit: cover;
        height: 12vh;
        width: 6vh;
    }

    .product-selected{
        background: #07fb07;
    }

    .product-blocked{
        background-color: #00000099;
        opacity: .5;
        cursor: no-drop;
    }
</style>