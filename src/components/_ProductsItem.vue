<template>
  <div class="tr vld-parent">
    <loading :active.sync="isLoading" color="#218DFE"
      :can-cancel="true" loader="dots"
      :is-full-page="false"></loading>
    <span class="td">{{prod.category}}</span>
    <span class="td">{{prod.title}}</span>
    <span class="td">{{prod.origin_price | Currency | Dollar}}</span>
    <span class="td">{{prod.price | Currency | Dollar}}</span>
    <span class="td">
      <toggle :prodId="prod.id.substr(0, 5)" :disabled="true"
      :checked="prod.enabled"/>
    </span>
    <span class="td">
      <BtnGroup :btns="btns" v-on="$listeners" :border="true" btnSize="md"/>
    </span>
  </div>
</template>

<script>

export default {
  name: 'ProductsItem',
  props: {
    prod: {
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
};
</script>

<style lang="scss" scoped>
.tr {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.td {
  flex-grow: 1;
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  color: #555;
}

$basis: (15% 40% 12% 12% 15% 15%);

@for $i from 1 through length($basis) {
  span:nth-of-type(#{$i}) {
  flex-basis: nth($basis, $i);
  }
}
</style>
