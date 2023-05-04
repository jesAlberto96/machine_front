<template>
    <div :class="class">
        <div class="form-floating">
            <select class="form-select" :name="name" aria-label="Floating label select example" :required="required">
                <option selected>Selecciona una opción</option>
                <template v-for="item in items">
                    <option :value="item.value" v-text="item.text"></option>
                </template>
            </select>
            <label for="floatingSelect" v-text="label"></label>
        </div>
    </div>
</template>


<script>
import { ref, defineComponent  } from 'vue';

export default defineComponent({
    props: {
        items: { type: Array, default: [] },
        type: { type: String, default: "" },
        placeholder: { type: String, default: "" },
        name: { type: String, default: '' },
        class: { type: String, default: 'col-xl-6 col-lg-6 col-md-12 col-sm-12' },
        label: { type: String, default: "" },
        required: { type: Number, default: 0 },
    },

    setup(props) {
    }
});
</script>