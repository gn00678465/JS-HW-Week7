<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="prod">
          <header class="prod__header">
            <div class="title">產品管理列表</div>
            <BtnGroup class="newBtn" :btns="btn" @btnEmit="BtnClick"/>
          </header>
          <div class="prod__body">
              <div class="table">
                <div class="table-head">
                  <div class="tr">
                    <span class="th">分類</span>
                    <span class="th">產品名稱</span>
                    <span class="th">原價</span>
                    <span class="th">售價</span>
                    <span class="th">是否啟用</span>
                    <span class="th"><font-awesome-icon class="icon" :icon="['fas', 'cog']" />
                    </span>
                  </div>
                </div>
                <div v-scrollbar class="table-body vld-parent">
                  <loading :active.sync="isLoading"
                    :can-cancel="true"
                    :is-full-page="false"></loading>
                  <!-- <div class="tr" v-for="i in 12" :key="i">
                    <div class="td">{{products[0].category}}</div>
                    <div class="td">{{products[0].title}}</div>
                    <div class="td">{{products[0].origin_price | Currency | Dollar}}</div>
                    <div class="td">{{products[0].price | Currency | Dollar}}</div>
                    <div class="td">
                      <toggle :prodId="products[0].id.substr(0, 5)" :disabled="true"
                      :checked="products[0].enabled"/>
                    </div>
                    <div class="td">
                      <BtnGroup :btns="btns" v-on="$listeners" :border="true" btnSize="md"/>
                    </div>
                  </div> -->
                  <item :prod="products[0]"/>
                </div>
              </div>
            <pagination :total_pages="total" :page="page" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import item from 'components/_ProductsItem.vue';

export default {
  name: 'Products',
  components: { item },
  data() {
    return {
      isLoading: false,
      page: 1,
      total: 5,
      products: [
        {
          id: 'fDlXGowjSmGCzGBzxXd6uJ5791dak9gNfaMegywIAfmMqez2V2qcoiSuLrxwyOWp',
          title: 'Abysswalker',
          category: 'T-Shirts',
          content: 'Its wearer, like Artorias himself, can traverse the Abyss.',
          imageUrl: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'],
          enabled: true,
          origin_price: 300,
          price: 200,
          unit: '單位',
        },
      ],
      btn: [{
        class: 'primary',
        outline: false,
        content: '新增產品',
        icon: '',
        action: 'new',
        size: 'xl',
      }],
    };
  },
  methods: {
    BtnClick(data) {
      console.log(data);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>

// variable
$main-color: #f0f0f0;
$thead: #c9dff0;

.prod {
  margin-top: 2rem;
  padding: 10px 1.5rem;
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
  &__header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-top: -1.5rem;
    .title {
      padding: 1rem;
      border-radius: 3px;
      background: linear-gradient(60deg,#ef5350,#e53935);
      flex: 1 0 0;
      display: inline-block;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
    }
    .newBtn {
      margin-left: 1.5rem;
    }
  }
  &__body {
    margin-top: 1.5rem;
    .table {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0 2rem;
      height: 100%;
      .tr {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      }
      .th {
        flex-grow: 1;
        display: inline-block;
        text-align: center;
        background: $thead;
        font-weight: bold;
        padding: 0.8rem 0;
      }
      .td {
        flex-grow: 1;
        display: inline-block;
        text-align: center;
        padding: 10px 0;
        color: #555;
      }
      &-head {
        border-bottom: 2px solid #eee;
      }
      &-body {
        min-height: 100px;
        max-height: 600px;
        .tr:nth-child(odd) {
        background: rgba(230,230,230,0.2);
        }
      }
      }
  }
}

$basis: (15% 40% 12% 12% 15% 15%);

.table {
  @for $i from 1 through length($basis) {
    &-head, &-body {
      span:nth-of-type(#{$i}) {
      flex-basis: nth($basis, $i);
      }
    }
  }
}

</style>
