<template>
  <transition name="modal" v-if="ModalShow">
    <div class="modal">
      <div class="modal__container" :class="`modal__wrapper-${size}`">
        <!-- header -->
        <header class="modal__header">
          <slot name="header">
            {{ ModalTitle }}
          </slot>
          <span class="times" @click.prevent="closeModal">&times;</span>
        </header>
        <!-- body -->
        <div class="modal__body">
          <component ref="form" :is="body"></component>
        </div>
        <!-- footer -->
        <div class="modal__footer">
          <BtnGroup class="mr-3" :btns="btnCheck" @btn-emit="excution"/>
          <BtnGroup :btns="cancleBtn" @btn-emit="closeModal"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import file from 'components/InputUpload.vue';

export default {
  name: 'Modal',
  mixins: [],
  components: { file },
  props: {
    size: {
      type: String,
      default: 'md',
    },
  },
  data() {
    return {
      ModalShow: false,
      ModalTitle: '',
      body: '',
      btnCheck: [
        {
          class: 'primary',
          outline: true,
          content: '確定',
          icon: '',
          action: 'checked',
        },
      ],
      cancleBtn: [
        {
          class: 'error',
          outline: true,
          content: '取消',
          icon: '',
          action: 'cancle',
        },
      ],
      isUplading: false,
      inputTemp: {
        imageUrl: [],
      },
    };
  },
  methods: {
    closeModal() {
      this.ModalShow = false;
    },
    excution(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  .modal {
    &__container {
      width: 100%;
      height: auto;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.8s ease;
    }
    &__header {
      padding: 1.2rem;
      font-size: 1.8rem;
      border-bottom: 1px solid #dee2e6;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      .times {
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
      }
    }
    &__body {
      padding: 1rem;
    }
    &__footer {
      padding: 1rem;
      border-top: 1px solid #dee2e6;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
    }
  }
}

.mr-3 {
  margin-right: 1.5rem;
}

// size
.modal__wrapper {
  &-sm {
    max-width: 300px;
  }
  &-md {
    max-width: 500px;
  }
  &-lg {
    max-width: 800px;
  }
  &-xl {
    max-width: 1140px;
  }
}

// animate
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter-active .modal__container {
  animation: bounceInDown .7s forwards;
}
.modal-leave-active .modal__container {
  animation: bounceOutUp .7s forwards;
}
// enter
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
// leave
@keyframes bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}

</style>
