<template>
  <div class="p-grid detail-container">
    <div class="p-col">
      <Button
        icon="pi pi-chevron-left"
        label="注文"
        class="p-button-text p-pl-0"
        @click="goToList"
      />

      <div class="p-d-flex p-align-baseline">
        <h2 class="p-my-0 p-pr-2">Create order</h2>
      </div>

      <div class="p-grid main-content">
        <div class="p-col-12 p-md-8">
          <Card class="card-default">
            <template slot="title">
              <div class="p-d-flex p-jc-between p-ai-center p-mb-2">
                <h2 class="title">Order details</h2>
                <Button
                  label="Add product manually"
                  class="p-button-text p-button-plain p-button-sm"
                  @click.prevent="showAddProductDialog"
                />
              </div>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-search"></i>
                </span>
                <InputText
                  class="search-input"
                  type="text"
                  v-model="productName"
                  placeholder="Search"
                />
                <Button
                  label="Browser"
                  @click="addProduct()"
                  class="btn-primary"
                />
              </div>
            </template>
            <template slot="content">
              <OrderItem
                v-for="(item, index) in items"
                :key="item.id"
                v-bind="item"
                :last="index === items.length - 1"
                editing
                @removeItem="removeItem(index)"
            /></template>
          </Card>

          <Card class="card-default">
            <template slot="title">
              <div class="p-d-flex p-jc-between">
                <h2 class="title">Set</h2>
                <div class="p-field-checkbox">
                  <Checkbox
                    id="isSet"
                    label="Is Set"
                    :binary="true"
                    v-model="isSet"
                  />
                  <label class="mb-0" for="isSet">Is Set</label>
                </div>
              </div>
            </template>
            <template slot="content" v-if="isSet">
              <div class="p-field p-col">
                <label for="numberOfSet" class="mr-3">Number of sets</label>
                <InputNumber id="numberOfSet" v-model="numberOfSet" :min="1" />
              </div>
              <Button
                icon="pi pi-plus"
                label="Add WM"
                class="p-button-rounded p-button-text p-button-plain"
                @click="addNewWorkMenu"
              />
              <CreateWorkMenu
                v-for="(workMenu, index) in workMenus"
                :key="workMenu.id"
                :isFirst="index === 0"
                v-model="workMenus[index]"
                @removeWorkMenu="removeWorkMenu(index)"
              />
            </template>
          </Card>
        </div>
        <div class="p-col-12 p-md-4 right-col-ct">
          <Card class="card-default">
            <template slot="title">
              <div class="p-d-flex p-jc-between">
                <h2 class="title">メモ</h2>
                <Button label="編集" class="p-button-link" />
              </div>
            </template>
            <template slot="content">
              お客様からのメモはありません
            </template>
          </Card>

          <Card class="card-default">
            <template slot="title">
              <h2 class="title">支払い済</h2>
            </template>
            <template slot="content">
              <ul class="total-content">
                <li>
                  <label>小計</label>
                  <span class="cl-title"> 40 円 </span>
                </li>
                <li>
                  <label>税</label>
                  <span class="cl-title"> 4 円 </span>
                </li>
                <li>
                  <label>合計</label>
                  <span class="cl-title"> 44 円 </span>
                </li>
                <hr />
                <li>
                  <label
                    class="tx-normal tx-rubik tx-spacing--1 mg-b-5 font-21 cl-title"
                    >お客様支払い済</label
                  >
                  <span
                    class="tx-normal tx-rubik tx-spacing--1 mg-b-5 font-21 cl-title"
                  >
                    44 円
                  </span>
                </li>
              </ul>
            </template>
          </Card>
        </div>
      </div>
    </div>

    <Dialog
      header="Add Product"
      :visible.sync="isShowAddProductDialog"
      :style="{ width: '70vw' }"
      :modal="true"
      :contentStyle="{ overflow: 'visible' }"
    >
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12 p-md-4">
          <label for="name">Name</label>
          <InputText id="name" type="text" v-model="newProduct.name" />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <label for="price">Price</label>
          <InputText id="price" type="number" v-model="newProduct.price" />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <label for="quantity">Quantity</label>
          <InputText
            id="quantity"
            type="number"
            v-model="newProduct.quantity"
          />
        </div>
      </div>
      <template #footer>
        <Button label="Add" @click="addManualProduct" class="btn-primary" />
      </template>
    </Dialog>
  </div>
</template>

<script>
import router from "@/router";
import OrderItem from "@/components/OrderItem";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";
import CreateWorkMenu from "../components/CreateWorkMenu";

export default {
  name: "CreateOrder",
  components: {
    CreateWorkMenu,
    Button,
    Card,
    InputText,
    InputNumber,
    OrderItem,
    Dialog,
    Checkbox
  },
  data: () => ({
    productName: "",
    items: [],
    workMenus: [],
    isShowAddProductDialog: false,
    isSet: false,
    numberOfSet: 1,
    newProduct: {
      name: "Manual Product",
      quantity: 1,
      price: 1,
      attributes: [],
      workMenus: [],
      src: "",
      id: Math.random()
    }
  }),
  methods: {
    goToList() {
      router.push("/");
    },
    addProduct() {
      this.items.push({
        id: 1,
        name: "Shirt",
        attributes: ["L", "Red"],
        quantity: 2,
        price: 10,
        workMenus: [],
        src:
          "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
      });
    },
    addManualProduct() {
      this.items.push({ ...this.newProduct });
      this.newProduct = {
        name: "Manual Product",
        quantity: 1,
        price: 1,
        attributes: [],
        workMenus: [],
        src: "",
        id: Math.random()
      };
      this.isShowAddProductDialog = false;
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    showAddProductDialog() {
      this.isShowAddProductDialog = true;
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
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding-left: 0;

  li {
    display: flex;
    justify-content: space-between;
  }
}
</style>
