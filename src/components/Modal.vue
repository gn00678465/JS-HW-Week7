<template>
  <transition name="modal" v-if="showModal">
    <div class="modal">
      <div class="modal__container modal__wrapper-xl">
        <!-- header -->
        <h4 class="modal__header">
          <slot name="header">
            {{ modalTitle }}
          </slot>
          <span class="times" @click.prevent="closeModal">&times;</span>
        </h4>
        <!-- body -->
        <div class="modal__body">
        </div>
        <!-- footer -->
        <div class="modal__footer">
          <BtnGroup :btns="btns" @emitHandler="actionHandler"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
  mixins: [],
  components: {
  },
  data() {
    return {
      showModal: false,
      modalTitle: '',
      inputTemp: {
        imageUrl: [],
      },
      btns: [
        {
          class: 'primary',
          outline: true,
          content: '確定',
          icon: '',
          action: 'checked',
        },
        {
          class: 'error',
          outline: true,
          content: '取消',
          icon: '',
          action: 'cancle',
        },
      ],
      isUplading: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
@import './../assets/_sass/sass.scss';

.box {
  background: #000;
  color: #fff;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    &__container {
      width: 100%;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.8s ease;
    }
    &__header {
      padding: 1rem;
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
      .label {
        display: inline-block;
        margin-bottom: 0.5rem;
      }
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

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 15px;
  margin-right: 15px;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
  width: 100%;
}

// file
.form-file {
  box-sizing: border-box;
  label {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    padding: 0.75rem 0.5rem;
    border-radius: 5px;
    border: 1px solid #ced4da;
    color: #495057;
    cursor: pointer;
  }
  input[type="file"] {
    display: none;
  }
}

// size
.modal__wrapper {
  max-width: 500px;
  &-sm {
    max-width: 300px;
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
