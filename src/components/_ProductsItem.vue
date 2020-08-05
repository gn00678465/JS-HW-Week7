<template>
  <tr>
    <td>{{prodItem.category}}</td>
    <td>{{prodItem.title}}</td>
    <td>{{prodItem.origin_price | Currency | Dollar}}</td>
    <td>{{prodItem.price | Currency | Dollar}}</td>
    <td>
      <toggler :prodId="prodItem.id.substr(0, 5)" :disabled="true" :checked="prodItem.enabled"/>
      </td>
    <td><BtnGroup :btns="btns" v-on="$listeners" :border="true" btnSize="md"/></td>
  </tr>
</template>

<script>
import toggler from 'components/ToggleSwitch.vue';
import BtnGroup from 'components/BtnGroup.vue';

export default {
  name: 'DashboardProductsItem',
  components: { toggler, BtnGroup },
  props: {
    prodItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      btns: [
        {
          class: 'secondary',
          outline: true,
          content: '',
          icon: 'marker',
          action: 'edit',
        },
        {
          class: 'error',
          outline: true,
          content: '',
          icon: 'trash-alt',
          action: 'del',
        },
      ],
    };
  },
  methods: {
    emitHandler(action) {
      this.$emit('click', action, this.prodItem);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
