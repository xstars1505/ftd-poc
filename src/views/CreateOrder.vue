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
              <div class="custom-autocomplete">
                <AutoComplete
                  v-model="productName"
                  :suggestions="productList"
                  @complete="searchProduct($event)"
                  @item-select="selectProduct"
                  field="name"
                  class="w-100"
                >
                  <template #item="slotProps">
                    <div class="country-item d-flex justify-content-between">
                      <img
                        width="80"
                        height="80"
                        class="img-object-fit-cover"
                        :src="slotProps.item.src"
                      />
                      <div class="text-right">
                        <p>{{ slotProps.item.name }}</p>
                        <p>{{ slotProps.item.price }} 円</p>
                      </div>
                    </div>
                  </template>
                </AutoComplete>
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
              <div class="p-fluid p-grid p-formgrid">
                <div class="p-field p-col-12">
                  <label class="mr-3">Image</label>
                  <div class="image-upload-content d-flex align-items-end">
                    <img
                      class="img-object-fit-cover mr-2"
                      height="100"
                      width="100"
                      :src="src"
                    />
                    <FileUpload
                      mode="basic"
                      accept="image/*"
                      name="file"
                      :url="url"
                      :auto="true"
                      @select="selectImage"
                      class="p-btn-sm"
                    />
                  </div>
                </div>
                <div class="p-field p-col-12 p-md-6">
                  <label for="setName" class="mr-3">Set Name</label>
                  <InputText id="setName" v-model="setName" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                  <label for="numberOfSet" class="mr-3">Number of sets</label>
                  <InputNumber
                    id="numberOfSet"
                    v-model="numberOfSet"
                    :min="1"
                  />
                </div>
              </div>

              <hr />

              <Button
                icon="pi pi-plus"
                label="Add WM"
                class="p-button-rounded p-button-text p-button-plain btn-add-workmenu"
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
              <h2 class="title">メモ</h2>
            </template>
            <template slot="content">
              <Textarea v-model="note" class="w-100" :rows="5" />
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
                  <span class="cl-title"> {{ productPrice }} 円 </span>
                </li>
                <li>
                  <label>税(10%)</label>
                  <span class="cl-title"> {{ productPrice * 0.1 }} 円 </span>
                </li>
                <hr />
                <li>
                  <label
                    class="tx-normal tx-rubik tx-spacing--1 mg-b-5 font-21 cl-title"
                    >合計</label
                  >
                  <span
                    class="tx-normal tx-rubik tx-spacing--1 mg-b-5 font-21 cl-title"
                  >
                    {{ productPrice + productPrice * 0.1 }} 円
                  </span>
                </li>
              </ul>
            </template>
          </Card>
        </div>
      </div>

      <hr />

      <div class="p-d-flex p-jc-end">
        <Button label="Save" class="p-button p-btn-sm" />
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
          <InputNumber id="price" v-model="newProduct.price" />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <label for="quantity">Quantity</label>
          <InputNumber id="quantity" v-model="newProduct.quantity" />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <label for="productUrl">Product Url</label>
          <InputText
            id="productUrl"
            type="text"
            v-model="newProduct.productUrl"
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
import FileUpload from "primevue/fileupload";
import Textarea from "primevue/textarea";
import AutoComplete from "primevue/autocomplete";

import CreateWorkMenu from "../components/CreateWorkMenu";

export default {
  name: "CreateOrder",
  components: {
    AutoComplete,
    CreateWorkMenu,
    Button,
    Card,
    InputText,
    InputNumber,
    OrderItem,
    Dialog,
    Checkbox,
    FileUpload,
    Textarea
  },
  computed: {
    productPrice() {
      let result = 0;
      this.items.map(item => {
        result += item.quantity * item.price;
      });
      return result;
    }
  },
  data: () => ({
    productName: "",
    productList: [],
    src: "../assets/img/img-default-280.jpg",
    url: "https://api.ftd-dev.nals.vn/ftd-order/api/v1/files/upload",
    items: [],
    workMenus: [],
    isShowAddProductDialog: false,
    isSet: false,
    setName: "",
    note: "",
    numberOfSet: 1,
    newProduct: {
      name: "Manual Product",
      quantity: 1,
      price: 1,
      attributes: [],
      workMenus: [],
      src: "",
      productUrl: "",
      id: Math.random()
    }
  }),
  methods: {
    goToList() {
      router.push("/");
    },
    searchProduct(event) {
      setTimeout(() => {
        const list = [
          {
            id: 1,
            name: "Shirt",
            attributes: ["L", "Red"],
            quantity: 1,
            price: 10,
            workMenus: [],
            src:
              "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
          },
          {
            id: 2,
            name: "T-Shirt",
            attributes: ["L", "Red"],
            quantity: 1,
            price: 20,
            workMenus: [],
            src:
              "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
          },
          {
            id: 3,
            name: "Paint",
            attributes: ["L"],
            quantity: 1,
            price: 11,
            workMenus: [],
            src:
              "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
          },
          {
            id: 4,
            name: "Shoes",
            attributes: ["L", "White"],
            quantity: 1,
            price: 13,
            workMenus: [],
            src:
              "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
          }
        ];
        if (!event.query.trim().length) {
          this.productList = [...list];
        } else {
          this.productList = list.filter(item => {
            return item.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },
    selectProduct(event) {
      this.items.push(event.value);
      this.productName = "";
    },
    selectImage(event) {
      this.src = event.files[0].objectURL;
      console.log(event.files[0].objectURL);
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
        productUrl: "",
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
.img-object-fit-cover {
  object-fit: cover;
}

/deep/.custom-autocomplete {
  span {
    width: 100%;
  }
  input {
    flex: 1 1 auto;
  }
}
</style>
