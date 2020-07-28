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
            <div class="info p-col-12 p-md-9">
              <p class="p-my-0">{{ name }}</p>
              <small>{{ attributes.join(" / ") }}</small>
            </div>
            <div class="quantity-block p-col-12 p-md-3">
              <span class="tx-quantity">{{ quantity }} x</span>
              <span v-if="editing" class="input-content"
                ><InputText
                  class="w-100"
                  type="number"
                  v-model="newQuantity"
                  placeholder="Search"/></span
              ><span v-else class="price">{{ price }} 円</span>
            </div>
          </div>
          <div class="item-total">
            <div class="price">
              {{ quantity * (editing ? newQuantity : price) }} 円
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
            >Details</a
          >
          <a href="javascript:void(0)" v-else @click="showWorkMenuDialog"
            >Add Workmenu</a
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
      header="Header"
      :visible.sync="display"
      :style="{ width: '60vw' }"
      :modal="true"
    >
      <div class="dialog-creat-workmenu">
        <Button
          icon="pi pi-plus"
          label="Add WM"
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
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import CreateWorkMenu from "./CreateWorkMenu";

export default {
  name: "OrderItem",
  components: { CreateWorkMenu, InputText, Dialog, Button },
  props: {
    src: String,
    quantity: Number,
    price: Number,
    attributes: Array,
    last: Boolean,
    editing: Boolean,
    name: String,
    workMenus: Array
  },
  data: () => ({
    newQuantity: 1,
    display: false
  }),
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
</style>
