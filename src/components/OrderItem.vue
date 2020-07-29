<template>
  <div class="order-item">
    <div class="p-d-flex p-ai-center p-my-3 order-infor">
      <div class="image-container p-mr-3">
        <div class="image">
          <img :src="src || '../assets/img/img-default-280.jpg'" />
        </div>
      </div>
      <div class="item-info">
        <div class="item-container p-d-flex p-jc-between p-ai-center">
          <div class="item-name p-grid p-ai-center p-md-jc-between p-mt-0">
            <div class="info p-col-12 p-sm-6 p-md-8">
              <p class="p-my-0">{{ name }}</p>
              <small>{{ attributes.join(" / ") }}</small>
            </div>
            <div class="quantity-block p-col-12 p-sm-6 p-md-4">
              <span class="tx-quantity">{{ price }} 円 x</span>
              <span v-if="editing" class="input-content"
                ><InputNumber class="w-100" v-model="newQuantity" :min="1"
              /></span>
              <span v-else class="price">{{ quantity }}</span>
            </div>
          </div>
          <div class="item-total pl-2">
            <div class="price">
              {{ +price * (editing ? +newQuantity : +quantity) }} 円
            </div>
          </div>
        </div>
      </div>
      <template v-if="editing">
        <div class="work-menu p-mx-3">
          <a
            href="javascript:void(0)"
            v-if="workMenus[0] && workMenus[0].id"
            @click="showWorkMenuDialog"
            >詳細</a
          >
          <a href="javascript:void(0)" v-else @click="showWorkMenuDialog"
            >作業メニューを追加</a
          >
        </div>
        <Button
          class="p-button-rounded p-button-text p-button-plain"
          icon="pi pi-times"
          @click="onRemoveItem()"
        />
      </template>
    </div>

    <hr v-if="!last" />

    <Dialog
      header="作業メニューを追加"
      :visible.sync="display"
      :style="{ width: '60vw' }"
      :modal="true"
    >
      <div class="dialog-creat-workmenu">
        <Button
          icon="pi pi-plus"
          label="作業メニューを追加"
          class="p-button-rounded p-button-text p-button-plain btn-add-workmenu"
          @click="addNewWorkMenu"
        />
        <CreateWorkMenu
          v-for="(workMenu, index) in workMenus"
          :key="workMenu && workMenu.id"
          v-model="workMenus[index]"
          @removeWorkMenu="removeWorkMenu(index)"
        />
      </div>
    </Dialog>
  </div>
</template>

<script>
import InputNumber from "primevue/inputnumber";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import CreateWorkMenu from "./CreateWorkMenu";

export default {
  name: "OrderItem",
  components: { CreateWorkMenu, InputNumber, Dialog, Button },
  props: {
    name: String,
    attributes: Array,
    quantity: Number,
    price: Number,
    workMenus: Array,
    src: String,
    last: Boolean,
    editing: Boolean
  },
  data: () => ({
    newQuantity: 1,
    display: false
  }),
  created() {
    this.newQuantity = this.quantity || 1;
  },
  methods: {
    showWorkMenuDialog() {
      this.display = true;
    },
    addNewWorkMenu() {
      this.workMenus.push({
        id: null,
        name: "",
        allowComment: false,
        attachFile: false,
        fileName: "",
        comment: ""
      });
    },
    removeWorkMenu(index) {
      this.workMenus.splice(index, 1);
    },
    onRemoveItem() {
      this.$emit("removeItem");
    }
  }
};
</script>

<style scoped lang="scss">
.image-container {
  min-width: 0;
  max-width: 100%;
  flex: 0 0 auto;

  .image {
    width: 4rem;
    flex-shrink: 0;
    flex-grow: 0;
  }
}

.item-info {
  min-width: 0;
  max-width: 100%;
  flex: 1 1 auto;

  .item-name {
    max-width: 100%;
    flex: 1 1 auto;
  }

  .item-total {
    flex-grow: 0;
    margin-left: 0.85rem;
    text-align: right;
  }
}

hr {
  color: #e6e6e6;
  background-color: #e6e6e6;
  height: 1px;
  padding: 0;
  border: 0;
}
.w-100 {
  width: 100% !important;
}
/deep/.p-inputnumber-input {
  width: 100%;
}
</style>
